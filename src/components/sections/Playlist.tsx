// src/components/sections/Playlist.tsx

import bgPlaylist from '../../assets/images/Playlistpng.png';
import tituloPlaylist from '../../assets/images/tituloplaylist.png';
import mockupPlaylist from '../../assets/images/playlistmockup.png';
import NeonBorder from '../ui/NeonBorder';

export function Playlist() {
  return (
    <section id="playlist" className="relative z-20 w-full -mt-[40px] md:-mt-[80px] pt-[120px] md:pt-[160px] pb-32 md:pb-48 bg-[#FF6B2B] rounded-t-[40px] md:rounded-t-[80px] rounded-b-[40px] md:rounded-b-[80px] shadow-[0_-15px_40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col items-center">
      
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:150%_auto] md:bg-[length:80%_auto] bg-[position:right_-50px_top_-20px] md:bg-[position:right_-100px_top_-50px] opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${bgPlaylist})` }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12">
        
        {/* Coluna da Esquerda */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src={tituloPlaylist} 
            alt="Se prepare para tudo o que vamos viver!" 
            className="w-full max-w-[480px] md:max-w-[750px] object-contain drop-shadow-2xl mb-12 hover:scale-105 transition-transform duration-500"
          />
          
          {/* BOTÃO COM EFEITO PULSANTE (RADAR) */}
          <div className="relative inline-block z-20 hover:scale-105 transition-transform duration-300">
            {/* Animação da onda (ping) */}
            <div className="absolute inset-0 bg-[#FFC700] rounded-full animate-ping opacity-40"></div>
            
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-block bg-[#121212] text-white border-[3px] md:border-[4px] border-[#FFC700] rounded-full px-8 py-3 md:py-4 font-['Montserrat',_sans-serif] font-black text-[13px] md:text-[16px] tracking-widest uppercase shadow-[4px_4px_0px_rgba(0,0,0,0.5)] hover:bg-black hover:text-[#FFC700] transition-colors duration-300"
            >
              Clique e ouça a playlist
            </a>
          </div>
        </div>

        {/* Coluna da Direita: Mockup */}
        <div className="flex justify-center items-center w-full mt-12 md:mt-0">
          
          <div className="relative w-full max-w-[400px] md:max-w-[630px] group hover:-translate-y-4 transition-transform duration-500">
            
            {/* OBJETO FANTASMA DO NEON */}
            <div className="absolute z-0 top-[6.5%] bottom-[6.5%] left-[16%] right-[16%] rotate-[12deg] scale-110">
              <NeonBorder 
                color="#dfe216" 
                rounded={20} 
                thickness={4} 
                glow={100} 
              />
            </div>

            <img 
              src={mockupPlaylist} 
              alt="Mockup Playlist Spotify" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
            />

          </div>
        </div>

      </div>
    </section>
  );
}