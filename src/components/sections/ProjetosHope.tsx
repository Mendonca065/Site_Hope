// src/components/sections/ProjetosHope.tsx

import bgOutrosProjetos from '../../assets/images/OutrosProjetosPng.png';
import tituloOutrosProjetos from '../../assets/images/TituloOutrosProjetos.png';
import cardHopeIde from '../../assets/images/HopeIde.png';
import cardHopeRun from '../../assets/images/HopeRun.png';

export function ProjetosHope() {
  return (
    /* 
      AJUSTES DE TAMANHO DA SESSÃO:
      1. pt-[160px] md:pt-[240px]: Aumentou bastante o espaço em cima do título.
      2. pb-40 md:pb-[250px]: Aumentou bastante o espaço no fundo, deixando a sessão bem maior e mais longa.
    */
    <section className="relative z-10 w-full -mt-[40px] md:-mt-[80px] pt-[160px] md:pt-[240px] pb-40 md:pb-[350px] bg-[#EBE2D4] overflow-hidden flex flex-col items-center ">
      
      {/* Background Laranja Decorativo */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:200%_auto] md:bg-[length:90%_auto] bg-[position:left_-110px_top_40px] md:bg-[position:left_top_110px] opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${bgOutrosProjetos})` }}
      />

      {/* Container Principal em Coluna (Título em cima, Cards embaixo) */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 flex flex-col items-center">
        
        {/* Título Centralizado no Topo */}
        {/* 
          AJUSTE DO TÍTULO: Substituí o scale-200 por max-w-[800px] (celular) e max-w-[1000px] (desktop).
          Também ajustei a margem inferior (mb-16 md:mb-24) para dar um respiro saudável antes dos cards.
        */}
        <img 
          src={tituloOutrosProjetos} 
          alt="O Movimento Não Para" 
          className="w-full max-w-[800px] md:max-w-[1000px] object-contain drop-shadow-xl mb-16 md:mb-24 hover:scale-105 transition-transform duration-500"
        />

        {/* 
          AJUSTE DOS CARDS: 
          Troquei o gap para gap-8 md:gap-16 lg:gap-24 para afastar os cards um do outro.
        */}
        <div className="flex flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 w-full">
          
          {/* Card 1: HOPE IDE */}
          <a 
            href="https://seulink-hopeide.com" // Insira o link aqui
            target="_blank" 
            rel="noopener noreferrer"
            className="w-1/2 max-w-[500px] hover:-translate-y-3 transition-transform duration-300 drop-shadow-xl" 
          >
            <img 
              src={cardHopeIde} 
              alt="Hope IDE" 
              className="w-full h-auto object-contain"
            />
          </a>

          {/* Card 2: HOPE RUN */}
          <a 
            href="https://seulink-hoperun.com" // Insira o link aqui
            target="_blank" 
            rel="noopener noreferrer"
            className="w-1/2 max-w-[500px] hover:-translate-y-3 transition-transform duration-300 drop-shadow-xl" 
          >
            <img 
              src={cardHopeRun} 
              alt="Hope Run" 
              className="w-full h-auto object-contain"
            />
          </a>
          
        </div>

      </div>
    </section>
  );
}