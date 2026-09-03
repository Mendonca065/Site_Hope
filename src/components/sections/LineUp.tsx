// src/components/sections/LineUp.tsx
import React, { useState } from 'react';

import bgLineUp from '../../assets/images/lineuppng.png';

import erickMelo from '../../assets/images/ErickMelo.png';
import beatrizCristina from '../../assets/images/BeatrizCristina.png';
import jeyReis from '../../assets/images/JeyReis.png';
import amandaLoyola from '../../assets/images/AmandaLoyola.png';
import jeanKleber from '../../assets/images/JeanKleber.png';
import rafaelSales from '../../assets/images/RafaelSales.png';
import maisaAbrantes from '../../assets/images/MaisaAbrantes.png';
import guilbertERanny from '../../assets/images/GuilbertERanny.png';

type Speaker = {
  id: string;
  name: string;
  image: string;
  bio: string;
};

const speakersData: Speaker[] = [
  { id: 'erick', name: 'Pr. Erick Melo', image: erickMelo, bio: 'Integrante do corpo pastoral da IBM, reconhecido por ministrações dinâmicas e profundas sobre perseverança, quebra de padrões e firmeza na fé. Sua comunicação conecta verdades bíblicas atemporais aos desafios práticos do dia a dia.' },
  { id: 'beatriz', name: 'Beatriz Cristina', image: beatrizCristina, bio: 'Faz parte de um ministério voltado à formação e avivamento da Igreja, levando a mensagem de Jesus a diversas nações. Com dedicação ao Reino de Deus, tem percorrido conferências encorajando vidas a viverem um relacionamento mais profundo com Cristo.' },
  { id: 'jey', name: 'Jey Reis', image: jeyReis, bio: 'Escritora, estudante de teologia e referência da influência cristã digital da atualidade. Percorre o mundo com missões e evangelismo, utilizando as redes sociais de forma inovadora para inspirar a juventude a viver uma fé apaixonada e sem reservas por Jesus.' },
  { id: 'amanda', name: 'Amanda Loyola', image: amandaLoyola, bio: 'Cantora, compositora e ministra de louvor de destaque no cenário gospel nacional. Autora do livro "Crescendo com a Falta de Paternidade", aborda de forma curativa os impactos emocionais da ausência paterna e a reconstrução da identidade através do amor do Pai Celestial.' },
  { id: 'jean', name: 'Pr. Jean', image: jeanKleber, bio: 'Pastor presidente da Igreja Batista de Miramar (IBM) em João Pessoa (PB), casado com a missionária Rosiane Matias. Líder marcado por uma trajetória de firmeza doutrinária, dedicação ministerial e profundo amor pela centralidade das Escrituras.' },
  { id: 'rafael', name: 'Pr. Rafael Sales', image: rafaelSales, bio: 'Pastor e líder do ministério de adolescentes Hangar 3 da IBM, casado com Miss Maísa. Administrador, consultor e escritor. Reconhecido por sua comunicação dinâmica, foca na construção de uma fé sólida, no fortalecimento da identidade em Cristo e no preparo de jovens com propósito.' },
  { id: 'maisa', name: 'Maísa Abrantes', image: maisaAbrantes, bio: 'Líder do ministério de adolescentes da IBM em João Pessoa (PB) junto com seu esposo, Pastor Rafael, é reconhecida por sua liderança sensível e conectada ao universo jovem. Une a firmeza da Palavra de Deus à escuta ativa para criar um ambiente de segurança e abertura. Aborda com clareza dilemas da juventude, saúde emocional e identidade, traduzindo verdades profundas do Evangelho para a linguagem do dia a dia.' },
  { id: 'guilbert', name: 'Guilbert e Ranny', image: guilbertERanny, bio: 'Casal apaixonado por Jesus que une a pregação da Palavra e a adoração musical para impactar a juventude. Trazem esperança e transformação por diversas igrejas do Brasil, marcando essa geração com intensidade, fé, louvor e propósito.' }
];

export function LineUp() {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  // A trava de tela (overflow hidden) foi removida completamente daqui.

  const handleOpen = (e: React.MouseEvent<HTMLImageElement>, speaker: Speaker) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = centerX - window.innerWidth / 2;
    const deltaY = centerY - window.innerHeight / 2;

    setOrigin({ x: deltaX, y: deltaY });
    setActiveSpeaker(speaker);
    
    setTimeout(() => setIsVisible(true), 10);
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsVisible(false); 
    setTimeout(() => setActiveSpeaker(null), 200); 
  };

  return (
    <section id="lineup" className="relative z-0 w-full -mt-[40px] md:-mt-[80px] pt-[80px] md:pt-[120px] pb-40 md:pb-[250px] overflow-hidden flex flex-col items-center">
      
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:200%_auto] bg-[position:center_top] md:bg-[length:100%_auto] md:bg-[position:center_center] opacity-100"
        style={{ backgroundImage: `url(${bgLineUp})`, backgroundColor: '#EBE2D4' }}
      />
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:180%_auto] bg-[position:left_top_760px] md:hidden opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${bgLineUp})` }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center">
        <div className={`w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pt-8 transition-all duration-300 ${activeSpeaker ? 'opacity-30 blur-[2px] pointer-events-none' : 'md:group'}`}>
          {speakersData.map((speaker, index) => (
            <img 
              key={speaker.id}
              src={speaker.image} 
              alt={speaker.name}
              onClick={(e) => handleOpen(e, speaker)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="true"
              className={`w-full h-full aspect-[3/5] object-contain object-bottom drop-shadow-lg cursor-pointer transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-3 md:hover:drop-shadow-[0_15px_30px_rgba(234,95,37,0.5)] ${
                !activeSpeaker ? 'md:group-hover:opacity-40 md:group-hover:blur-[2px] md:hover:!opacity-100 md:hover:!blur-none' : ''
              }`}
            />
          ))}
        </div>
      </div>

      {activeSpeaker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => handleClose()}
          />

          <div 
            className="relative z-50 w-full max-w-5xl flex flex-col md:flex-row bg-[#EBE2D4] border-[4px] border-black rounded-[1.5rem] md:rounded-[2rem] shadow-[12px_12px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible 
                ? 'translate(0px, 0px) scale(1)' 
                : `translate(${origin.x}px, ${origin.y}px) scale(0)`,
              opacity: isVisible ? 1 : 0
            }}
          >
            {/* Botão X (Fixo no topo) */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-[60] bg-white text-black p-2 rounded-full border-[3px] border-black hover:bg-[#EA5F25] hover:text-white hover:scale-110 transition-all duration-300 shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center justify-center"
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="w-full md:w-2/5 bg-[#EA5F25] flex items-center justify-center p-6 md:p-10 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black h-[300px] md:h-[550px] shrink-0">
              <img 
                src={activeSpeaker.image} 
                alt={activeSpeaker.name} 
                className="w-auto h-full max-h-[250px] md:max-h-[480px] object-contain drop-shadow-2xl"
              />
            </div>
            
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="font-['Montserrat',_sans-serif] font-black text-2xl md:text-4xl text-black mb-3 uppercase leading-none tracking-tight pr-10">
                {activeSpeaker.name}
              </h3>
              <div className="w-12 h-[4px] bg-[#EA5F25] mb-5 md:mb-6"></div>
              
              <p className="font-['Inter',_sans-serif] text-base md:text-xl text-gray-800 leading-relaxed font-medium pb-4">
                {activeSpeaker.bio}
              </p>
              
              {/* Botão Fechar (Embaixo) também continua lá */}
              <button 
                onClick={handleClose}
                className="mt-4 md:mt-8 w-fit text-[#EA5F25] font-bold text-xs md:text-sm uppercase tracking-widest hover:opacity-70 flex items-center gap-2 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                Clique para fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}