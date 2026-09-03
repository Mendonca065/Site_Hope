// src/components/sections/VideoSobre.tsx
import { useState } from 'react';
import { PixelReveal } from '../ui/PixelReveal';

// Vídeo e Capa
import videoCover from '../../assets/images/cover-video.jpg'; 

// Backgrounds
import videoSobre1 from '../../assets/images/videosobre_1.png';
import videoSobre2 from '../../assets/images/videosobre_2.png';

// Textos e Títulos
import cruzNaoFoiEmVao from '../../assets/images/cruznaofoiemvao.png';
import lineUp from '../../assets/images/line-up.png';

// Fotos do Grid
import foto1 from '../../assets/images/foto1.png';
import foto2 from '../../assets/images/foto2.png';
import foto3 from '../../assets/images/foto3.png';
import foto4 from '../../assets/images/foto4.png';
import foto5 from '../../assets/images/foto5.png';
import foto6 from '../../assets/images/foto6.png';

type VideoStage = 'idle' | 'animating' | 'playing';

export function VideoSobre() {
  const [stage, setStage] = useState<VideoStage>('idle');

  const handlePlayClick = () => setStage('animating');
  const handleAnimationComplete = () => setStage('playing');

  return (
    <section id="sobre" className="relative z-10 w-full bg-[#FFC700] py-16 md:py-32 overflow-x-clip flex flex-col items-center rounded-b-[40px] md:rounded-b-[80px] border-b-[8px] border-black">
      
      {/* Background Layer 2 (Direita) */}
      <div 
        className="absolute inset-0 z-0 opacity-100 bg-no-repeat bg-[length:115%_auto] bg-[position:right_-30px_bottom_150px] md:bg-[length:50%_auto] md:bg-[position:right_bottom] pointer-events-none animate-float-slow"
        style={{ backgroundImage: `url(${videoSobre2})` }}
      />
      
      {/* Background Layer 1 (Esquerda) */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:120%_auto] bg-[position:left_top_-50px] md:bg-[length:60%_auto] md:bg-[position:left_top_-110px] pointer-events-none animate-float"
        style={{ backgroundImage: `url(${videoSobre1})` }}
      />
      
      {/* Retângulo Laranja */}
      <div 
        className="absolute top-[385px] -right-[180px] w-[413px] h-[1420px] bg-[#FF6B2B] rounded-t-[74px] rounded-b-[74px] z-0 hidden lg:block pointer-events-none animate-float-fast"
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center">
        
        {/* PARTE 1: O VÍDEO */}
        <div className="w-full max-w-5xl aspect-video bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] relative flex items-center justify-center mb-24 md:mb-72">
          
          {/* Iframe do YouTube */}
          {stage !== 'idle' && (
            <iframe
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${stage === 'playing' ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}
              src="https://www.youtube.com/embed/qw1Agy1Syvo?autoplay=1&rel=0&showinfo=0"
              title="Video Conferência Hope"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          {/* CAPA CLICÁVEL (Sem botão extra) */}
          {stage === 'idle' && (
            <img 
              src={videoCover} 
              alt="Capa do Vídeo" 
              onClick={handlePlayClick}
              className="absolute inset-0 w-full h-full object-cover z-20 cursor-pointer hover:scale-105 transition-transform duration-500" 
            />
          )}

          {stage === 'animating' && (
            <div className="absolute inset-0 z-40 bg-black">
              <PixelReveal 
                imageSrc={videoCover}
                pixelSize={12} 
                duration={1.2}
                trigger={true}
                onComplete={handleAnimationComplete}
              />
            </div>
          )}
        </div>

        {/* PARTE 2: TEXTO E GRID DE FOTOS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32 items-center">
          
          {/* Coluna da Esquerda: Textos */}
          <div className="flex flex-col">
            <img 
              src={cruzNaoFoiEmVao} 
              alt="A Cruz não foi em vão" 
              className="w-full max-w-[500px] mb-8 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
            
            <div className="font-['Montserrat',_sans-serif] font-medium text-lg md:text-2xl lg:text-[34px] leading-[1.31] text-justify text-black space-y-6 lg:max-w-[772px]">
              <p>Bem-vindos à 9ª edição da Conferência Hope, um movimento que está transformando essa geração.</p>
              <p>Desde 2018, o Hangar 3, em João Pessoa, consolida-se como um espaço seguro e acolhedor, onde os adolescentes encontram respaldo para enfrentar tabus, superar ansiedades e consolidar sua identidade em Deus.</p>
              <p>Em uma época em que a esperança parece escassa, nossa convicção permanece inabalável: Jesus é a nossa única esperança e, porque Ele vive, temos vida.</p>
            </div>
          </div>

          {/* Coluna da Direita: Grid de Fotos */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img 
              src={foto1} alt="Foto 1" 
              className="w-full h-auto object-contain drop-shadow-lg hover:scale-105 hover:-rotate-2 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer" 
            />
            <img 
              src={foto2} alt="Foto 2" 
              className="w-full h-auto object-contain drop-shadow-lg hover:scale-105 hover:rotate-2 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer" 
            />
            <img 
              src={foto3} alt="Foto 3" 
              className="w-full h-auto object-contain drop-shadow-lg hover:scale-105 hover:rotate-2 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer" 
            />
            <img 
              src={foto4} alt="Foto 4" 
              className="w-full h-auto object-contain drop-shadow-lg hover:scale-105 hover:-rotate-2 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer" 
            />
            <img 
              src={foto5} alt="Foto 5" 
              className="w-full h-auto object-contain drop-shadow-lg hover:scale-105 hover:-rotate-2 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer" 
            />
            <img 
              src={foto6} alt="Foto 6" 
              className="w-full h-auto object-contain drop-shadow-lg hover:scale-105 hover:rotate-2 hover:drop-shadow-2xl transition-all duration-300 cursor-pointer" 
            />
          </div>

        </div>

        {/* PARTE 3: LINE-UP */}
        <img 
          src={lineUp} 
          alt="LINE-UP" 
          className="w-full max-w-xl object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
        />

      </div>
    </section>
  );
}