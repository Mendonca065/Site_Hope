// src/components/sections/LineUp.tsx

import bgLineUp from '../../assets/images/lineuppng.png';

import erickMelo from '../../assets/images/ErickMelo.png';
import beatrizCristina from '../../assets/images/BeatrizCristina.png';
import jeyReis from '../../assets/images/JeyReis.png';
import amandaLoyola from '../../assets/images/AmandaLoyola.png';
import jeanKleber from '../../assets/images/JeanKleber.png';
import rafaelSales from '../../assets/images/RafaelSales.png';
import maisaAbrantes from '../../assets/images/MaisaAbrantes.png';
import guilbertERanny from '../../assets/images/GuilbertERanny.png';

export function LineUp() {
  return (
    /* 
      1. -mt-[40px] md:-mt-[80px]: Puxa esta seção para cima, escondendo os cantos pretos da seção anterior.
      2. pt-[80px] md:pt-[120px]: Adiciona espaço extra no topo para o conteúdo não ficar espremido.
      3. z-0: Garante que esta seção fique por baixo da VideoSobre.
    */
    <section className="relative z-0 w-full -mt-[40px] md:-mt-[80px] pt-[80px] md:pt-[120px] pb-40 md:pb-[250px] overflow-hidden flex flex-col items-center">
      
      {/* Background Laranja Decorativo com a cor bege de fundo que você solicitou */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:200%_auto] bg-[position:center_top] md:bg-[length:100%_auto] md:bg-[position:center_center] opacity-100"
        style={{ backgroundImage: `url(${bgLineUp})`, backgroundColor: '#EBE2D4' }}
      />
      {/* SEGUNDO BACKGROUND LARANJA (Apenas Celular) */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-[length:180%_auto] bg-[position:left_top_760px] md:hidden opacity-100 pointer-events-none"
        style={{ backgroundImage: `url(${bgLineUp})` }}
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center">
        
        {/* Grid de 4 colunas no computador e 2 no celular */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pt-8">
          
          <img 
            src={erickMelo} 
            alt="Erick Melo" 
            className="w-full h-full aspect-[3/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          <img 
            src={beatrizCristina} 
            alt="Beatriz Cristina" 
            className="w-full h-full aspect-[3/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          <img 
            src={jeyReis} 
            alt="Jey Reis" 
            className="w-full h-full aspect-[3/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          <img 
            src={amandaLoyola} 
            alt="Amanda Loyola" 
            className="w-full h-full aspect-[3/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          
          <img 
            src={jeanKleber} 
            alt="Jean Kleber" 
            className="w-full h-full aspect-[4/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          <img 
            src={rafaelSales} 
            alt="Rafael Sales" 
            className="w-full h-full aspect-[4/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          <img 
            src={maisaAbrantes} 
            alt="Maisa Abrantes" 
            className="w-full h-full aspect-[4/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          <img 
            src={guilbertERanny} 
            alt="Guilbert e Ranny" 
            className="w-full h-full aspect-[4/5] object-contain object-bottom drop-shadow-lg hover:-translate-y-2 transition-transform duration-300" 
          />
          
        </div>
      </div>
    </section>
  );
}