// src/components/ui/PixelReveal.tsx
"use client";
import { useEffect, useRef, useMemo, useCallback } from "react";

interface PixelRevealProps {
  imageSrc?: string;
  pixelSize?: number;
  duration?: number;
  trigger?: boolean;
  onComplete?: () => void;
  style?: React.CSSProperties;
}

const NAMED_EASES: Record<string, [number, number, number, number]> = {
  easeOut: [0, 0, 0.58, 1],
};

function cubicBezierEase(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const dX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
  return (p: number) => {
    let t = p;
    for (let i = 0; i < 8; i++) {
      const x = sampleX(t) - p;
      const d = dX(t);
      if (Math.abs(x) < 1e-4 || Math.abs(d) < 1e-6) break;
      t -= x / d;
    }
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return sampleY(t);
  };
}

function easeToFn(ease: string) {
  const b = NAMED_EASES[ease] || NAMED_EASES.easeOut;
  return cubicBezierEase(b[0], b[1], b[2], b[3]);
}

export function PixelReveal({
  imageSrc,
  pixelSize = 12,
  duration = 1.2, // Acelerado levemente para ficar mais fluido antes do vídeo
  trigger = false,
  onComplete,
  style,
}: PixelRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const imgElRef = useRef<HTMLImageElement | null>(null);
  const tilesRef = useRef<{ x: number; y: number; order: number }[]>([]);
  const rafRef = useRef<number | null>(null);
  const genRef = useRef(0);
  const revealedRef = useRef(false);

  const easeFn = useMemo(() => easeToFn("easeOut"), []);

  const build = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const img = imgElRef.current;
    
    if (!container || !canvas || !img || !img.complete || !img.naturalWidth) return;
    
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    if (cw <= 0 || ch <= 0) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    canvas.style.width = cw + "px";
    canvas.style.height = ch + "px";
    const dctx = canvas.getContext("2d");
    if (!dctx) return;
    dctx.clearRect(0, 0, canvas.width, canvas.height);

    const off = offscreenRef.current || document.createElement("canvas");
    offscreenRef.current = off;
    off.width = canvas.width;
    off.height = canvas.height;
    const octx = off.getContext("2d");
    if (!octx) return;

    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    octx.clearRect(0, 0, off.width, off.height);
    octx.drawImage(img, dx * dpr, dy * dpr, dw * dpr, dh * dpr);

    const numCols = Math.ceil(cw / pixelSize);
    const rows = Math.ceil(ch / pixelSize);
    const data = octx.getImageData(0, 0, off.width, off.height).data;
    const tiles: { x: number; y: number; order: number }[] = [];
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = col * pixelSize;
        const y = row * pixelSize;
        const x0 = Math.floor(x * dpr);
        const y0 = Math.floor(y * dpr);
        const x1 = Math.min(off.width, Math.ceil((x + pixelSize) * dpr));
        const y1 = Math.min(off.height, Math.ceil((y + pixelSize) * dpr));
        let hasContent = false;
        for (let py = y0; py < y1 && !hasContent; py++) {
          let idx = (py * off.width + x0) * 4 + 3;
          for (let px = x0; px < x1; px++) {
            if (data[idx] > 3) {
              hasContent = true;
              break;
            }
            idx += 4;
          }
        }
        if (hasContent) tiles.push({ x, y, order: 0 });
      }
    }

    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    tiles.forEach((t, i) => (t.order = i));
    tilesRef.current = tiles;
    genRef.current += 1;
  }, [pixelSize]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const off = offscreenRef.current;
    const dctx = canvas?.getContext("2d");
    
    // Proteção contra falhas severas: Libera o vídeo direto se der erro.
    if (!canvas || !off || !dctx || !tilesRef.current.length) {
      if (onComplete) onComplete();
      return;
    }
    
    const dpr = window.devicePixelRatio || 1;
    const tiles = tilesRef.current;
    dctx.clearRect(0, 0, canvas.width, canvas.height);
    const slot = duration / tiles.length;
    const committed = new Uint8Array(tiles.length);
    const start = performance.now();
    const gen = genRef.current;

    const step = (now: number) => {
      if (gen !== genRef.current) return;
      const elapsed = (now - start) / 1000;
      let allDone = true;
      for (let i = 0; i < tiles.length; i++) {
        if (committed[i]) continue;
        const t = tiles[i];
        const p = slot > 0 ? (elapsed - t.order * slot) / slot : 1;
        if (p <= 0) { allDone = false; continue; }
        
        const dx = Math.round(t.x * dpr);
        const dy = Math.round(t.y * dpr);
        const dw = Math.round((t.x + pixelSize) * dpr) - dx;
        const dh = Math.round((t.y + pixelSize) * dpr) - dy;
        dctx.clearRect(dx, dy, dw, dh);
        
        if (p >= 1) {
          dctx.globalAlpha = 1;
          dctx.drawImage(off, dx, dy, dw, dh, dx, dy, dw, dh);
          committed[i] = 1;
        } else {
          allDone = false;
          dctx.globalAlpha = easeFn(p);
          dctx.drawImage(off, dx, dy, dw, dh, dx, dy, dw, dh);
        }
      }
      dctx.globalAlpha = 1;
      if (allDone) {
        dctx.clearRect(0, 0, canvas.width, canvas.height);
        dctx.drawImage(off, 0, 0);
        if (onComplete) onComplete();
      } else {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [duration, easeFn, pixelSize, onComplete]);

  useEffect(() => {
    if (!imageSrc) return;
    
    const img = new Image();
    
    const handleLoad = () => {
      imgElRef.current = img;
      build();
    };

    img.onload = handleLoad;
    img.onerror = () => { if (onComplete) onComplete(); };
    img.src = imageSrc;

    // O SEGREDO ESTÁ AQUI: Ignora o carregamento se a imagem já estiver no cache
    if (img.complete && img.naturalWidth > 0) {
      handleLoad();
    }
  }, [imageSrc, build, onComplete]);

  useEffect(() => {
    // Observa o tamanho da div para gerar os pixels no tamanho certo
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(() => build());
    ro.observe(container);
    return () => ro.disconnect();
  }, [build]);

  useEffect(() => {
    if (trigger && !revealedRef.current) {
      revealedRef.current = true;
      // Pequeno delay pra dar tempo do DOM registrar a tela preta
      setTimeout(() => animate(), 50);
    }
  }, [trigger, animate]);

  return (
    <div ref={containerRef} style={{ ...style, position: "relative", width: "100%", height: "100%" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
    </div>
  );
}