// src/components/sections/Faq.tsx

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    pergunta: "Qual o valor da inscrição?",
    resposta: "Totalmente gratuita! No entanto, as vagas são limitadas para garantir o conforto e a segurança de todos. Garanta a sua credencial clicando no botão acima."
  },
  {
    pergunta: "Onde será realizado o evento?",
    resposta: "O evento será realizado na nossa sede principal. O endereço completo e as instruções de chegada serão enviados para o seu e-mail após a inscrição."
  },
  {
    pergunta: "Preciso levar algo no dia?",
    resposta: "Sugerimos trazer uma garrafa de água, sua Bíblia e um caderno para anotações. Se tiver sua credencial em QR Code no celular, será ótimo para agilizar a entrada!"
  },
  {
    pergunta: "Tem estacionamento no local?",
    resposta: "Sim, contamos com estacionamento gratuito no local, sujeito à lotação. Recomendamos chegar cedo para garantir sua vaga com tranquilidade."
  },
  {
    pergunta: "Posso levar crianças?",
    resposta: "Sim! Teremos uma estrutura especial e uma equipe preparada para receber e cuidar das crianças durante o evento (Kids)."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    /* O -mt-[2px] puxa a seção milímetros para cima, engolindo a linha fina que estava vazando */
    <section className="relative z-10 w-full -mt-[2px] py-20 md:py-32 bg-[#EBE2D4] flex justify-center">
      
      <div className="w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* COLUNA DA ESQUERDA: Card Laranja */}
        <div className="lg:col-span-5 bg-[#EA5F25] border-[3px] border-black rounded-[24px] p-8 md:p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          
          <h4 className="font-['Montserrat',_sans-serif] font-black text-black text-[12px] md:text-[14px] uppercase tracking-widest mb-3">
            Dúvidas Frequentes
          </h4>
          
          <h2 className="font-['Montserrat',_sans-serif] font-black text-white text-4xl md:text-5xl uppercase leading-[1.1] mb-6">
            Tem alguma<br />pergunta?
          </h2>
          
          <p className="font-['Inter',_sans-serif] text-black text-[14px] md:text-[15px] leading-relaxed mb-8">
            Fizemos uma seleção das dúvidas mais comuns sobre o HOPE 2026 para te ajudar a se programar da melhor maneira. Caso ainda tenha dúvidas, entre em contato através das nossas redes sociais.
          </p>

          {/* Botão corrigido (w-fit impede que ele estique, e o conteúdo não está mais duplicado) */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 bg-[#111111] text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:scale-105 hover:bg-black transition-all duration-300"
          >
            <span className="font-['Montserrat',_sans-serif] font-bold text-[12px] md:text-[13px] tracking-wider uppercase">
              Falar no Instagram
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          
        </div>

        {/* COLUNA DA DIREITA: Acordeão de Perguntas */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`w-full rounded-2xl border-[2px] overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#EA5F25] bg-[#F2EDE4]' 
                    : 'border-[#D4CCC0] bg-[#F2EDE4] hover:border-black'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-['Montserrat',_sans-serif] font-bold text-black text-[15px] md:text-[17px]">
                    {faq.pergunta}
                  </span>
                  
                  <div className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ml-4 transition-colors duration-300 ${
                    isOpen ? 'bg-[#EA5F25]' : 'bg-black'
                  }`}>
                    {isOpen ? (
                      <Minus size={16} strokeWidth={4} color="white" />
                    ) : (
                      <Plus size={16} strokeWidth={4} color="white" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#333333] font-['Inter',_sans-serif] text-[14px] md:text-[15px] leading-relaxed">
                    {faq.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}