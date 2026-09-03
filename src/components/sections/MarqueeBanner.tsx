// src/components/sections/MarqueeBanner.tsx

export function MarqueeBanner() {
  const text = "AMADOS PARA AMAR ✦ CURADOS PARA CURAR ✦ TRANSFORMADOS PARA TRANSFORMAR ✦ ";
  // Repete o texto para garantir que telas grandes fiquem preenchidas
  const repeatedText = Array(4).fill(text).join("");

  return (
    /* 
      Container com h-0 garante que a faixa não empurre o layout para baixo.
      O z-30 coloca a faixa acima tanto do Hero quanto da seção de Vídeo.
    */
    <div className="relative z-30 w-full h-0 flex items-center justify-center pointer-events-none">
      
      {/* 
        AJUSTE APLICADO AQUI:
        Mudei de -top-[45px] para -top-[15px] no celular
        Mudei de -top-[70px] para -top-[30px] no desktop
        Isso desce a faixa o suficiente para cobrir o fundo amarelo vazando.
      */}
      <div className="absolute -top-[40px] md:-top-[63px] w-full flex items-center bg-[#151515] py-3 md:py-4 transform -rotate-1 scale-[1.03] shadow-[0_15px_30px_rgba(0,0,0,0.5)] border-y-2 border-black">
        
        <div className="flex whitespace-nowrap animate-marquee pointer-events-auto">
          <span className="font-['Inter',_sans-serif] font-bold text-[16px] md:text-[28px] leading-none tracking-[1px] md:tracking-[2px] uppercase text-white pr-4 md:pr-4">
            {repeatedText}
          </span>
          <span className="font-['Inter',_sans-serif] font-bold text-[16px] md:text-[28px] leading-none tracking-[1px] md:tracking-[2px] uppercase text-white pr-4 md:pr-4">
            {repeatedText}
          </span>
        </div>
        
      </div>
    </div>
  );
}