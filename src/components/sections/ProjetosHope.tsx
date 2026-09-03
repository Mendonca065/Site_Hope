// src/components/sections/ProjetosHope.tsx

import bgOutrosProjetos from '../../assets/images/OutrosProjetosPng.png';
import tituloOutrosProjetos from '../../assets/images/TituloOutrosProjetos.png';
import cardHopeIde from '../../assets/images/HopeIde.png';
import cardHopeRun from '../../assets/images/HopeRun.png';

export function ProjetosHope() {
  return (
    <section id="projetos" className="relative z-10 w-full -mt-[40px] md:-mt-[80px] pt-[160px] md:pt-[240px] pb-40 md:pb-[350px] bg-[#EBE2D4] overflow-hidden flex flex-col items-center ">
      
      {/* Background Laranja Decorativo */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:200%_auto] md:bg-[length:90%_auto] bg-[position:left_-110px_top_40px] md:bg-[position:left_top_110px] opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${bgOutrosProjetos})` }}
      />

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 flex flex-col items-center">
        
        {/* Título Animado com AOS */}
        <img 
          data-aos="fade-down"
          src={tituloOutrosProjetos} 
          alt="O Movimento Não Para" 
          className="w-full max-w-[800px] md:max-w-[1000px] object-contain drop-shadow-xl mb-16 md:mb-24 hover:scale-105 transition-transform duration-500"
        />

        <div className="flex flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 w-full">
          
          {/* Card 1: HOPE IDE (Surge Primeiro - delay de 100ms) */}
          <a 
            href="https://seulink-hopeide.com" 
            target="_blank" 
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-1/2 max-w-[500px] group hover:-translate-y-4 hover:drop-shadow-[0_25px_35px_rgba(234,95,37,0.4)] transition-all duration-500 drop-shadow-xl" 
          >
            <img 
              src={cardHopeIde} 
              alt="Hope IDE" 
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </a>

          {/* Card 2: HOPE RUN (Surge Depois - delay de 300ms criando a cascata) */}
          <a 
            href="https://www.instagram.com/hoperunpb/" 
            target="_blank" 
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-1/2 max-w-[500px] group hover:-translate-y-4 hover:drop-shadow-[0_25px_35px_rgba(234,95,37,0.4)] transition-all duration-500 drop-shadow-xl" 
          >
            <img 
              src={cardHopeRun} 
              alt="Hope Run" 
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </a>
          
        </div>

      </div>
    </section>
  );
}