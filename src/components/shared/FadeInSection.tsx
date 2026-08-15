import { useEffect, useRef, useState } from "react";

/**
 * Interface FadeInSectionProps
 * Define as propriedades que o componente aceita
 *
 * Alterações realizadas:
 * - Adicionada propriedade className opcional
 * - Mantida a propriedade delay existente
 * - Mantida a propriedade children obrigatória
 */
interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number; // delay em milissegundos para iniciar a animação
  className?: string; // classes CSS adicionais para personalização
}

/**
 * Componente FadeInSection
 * Cria uma seção com animação de fade-in ao entrar na viewport
 *
 * Alterações realizadas:
 * 1. Suporte a className:
 *    - Adicionado parâmetro className com valor padrão vazio
 *    - Incluído className na string de classes do div
 *
 * 2. Mantido comportamento original:
 *    - Animação de fade + slide up
 *    - Suporte a delay customizável
 *    - Uso do IntersectionObserver
 */
export const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay);
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}`}
    >
      {children}
    </div>
  );
};
