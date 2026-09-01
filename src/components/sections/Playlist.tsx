// src/components/sections/Playlist.tsx

import bgPlaylist from '../../assets/images/Playlistpng.png';
import tituloPlaylist from '../../assets/images/tituloplaylist.png';
import mockupPlaylist from '../../assets/images/playlistmockup.png';

export function Playlist() {
  return (
    /* 
      AUMENTO DA SESSÃO:
      Troquei pt-[80px] para pt-[120px] md:pt-[160px] (mais espaço no topo)
      Troquei pb-16 para pb-32 md:pb-48 (mais espaço na base)
    */
    <section className="relative z-20 w-full -mt-[40px] md:-mt-[80px] pt-[120px] md:pt-[160px] pb-32 md:pb-48 bg-[#FF6B2B] rounded-t-[40px] md:rounded-t-[80px] rounded-b-[40px] md:rounded-b-[80px] shadow-[0_-15px_40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col items-center">
      
      {/* Background Preto Decorativo */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:150%_auto] md:bg-[length:80%_auto] bg-[position:right_-50px_top_-20px] md:bg-[position:right_-100px_top_-50px] opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${bgPlaylist})` }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12">
        
        {/* Coluna da Esquerda: Título e Botão */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* 
            AJUSTE DO TÍTULO: 
            Removi o scale-150 e aumentei o tamanho real trocando o max-w-[500px] para max-w-[750px] (desktop) e max-w-[480px] (celular).
            Aumentei a margem inferior para mb-12 para afastar mais o botão.
          */}
          <img 
            src={tituloPlaylist} 
            alt="Se prepare para tudo o que vamos viver!" 
            className="w-full max-w-[480px] md:max-w-[750px] object-contain drop-shadow-2xl mb-12 hover:scale-105 transition-transform duration-500"
          />
          
          {/* Botão (Adicionei relative z-20 para garantir que ele seja sempre clicável e fique por cima de tudo) */}
          <a 
            href="https://spotify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-20 inline-block bg-[#121212] text-white border-[3px] md:border-[4px] border-[#FFC700] rounded-full px-8 py-3 md:py-4 font-['Montserrat',_sans-serif] font-black text-[13px] md:text-[16px] tracking-widest uppercase shadow-[4px_4px_0px_rgba(0,0,0,0.5)] hover:scale-105 hover:bg-black hover:text-[#FFC700] transition-all duration-300"
          >
            Clique e ouça a playlist
          </a>
          
        </div>

        {/* Coluna da Direita: Mockup do Celular */}
        <div className="flex justify-center items-center w-full mt-12 md:mt-0">
          {/* 
            AJUSTE DO MOCKUP: 
            Removi o scale-150 e aumentei o max-w-[420px] para max-w-[630px] no desktop.
          */}
          <img 
            src={mockupPlaylist} 
            alt="Mockup Playlist Spotify" 
            className="w-full max-w-[400px] md:max-w-[630px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] hover:-translate-y-4 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}