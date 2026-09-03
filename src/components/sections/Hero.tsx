// src/components/sections/Hero.tsx
import heroBg from '../../assets/images/hero-background.png';
import hopeLogo from '../../assets/images/hope-logo-sticker.png';
import confText from '../../assets/images/Conferência.png';
import seasonText from '../../assets/images/Season 09.png';
import DotLens from '../ui/DotLens'; 
import { MapPin, Calendar } from 'lucide-react'; // Import dos ícones

export function Hero() {
  return (
    <section id="hero"
      className="relative w-full h-[calc(100vh-56px)] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-no-repeat bg-[length:340%_auto] bg-[position:-780px_top] md:bg-cover md:bg-[position:center_center]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: '#EBE2D4',
      }}
    >
      
      <div className="absolute inset-0 z-0">
        <DotLens 
          baseColor="#FFC700"
          accentColor="#FF6B2B"
          density={45}         
          dotSize={70}         
          reach={20}
          speed={200}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl pointer-events-none">
        
        {/* CONTAINER DA LOGO */}
        <div className="relative flex justify-center items-center mt-4">
          
          <img 
            src={confText} 
            alt="Conferência" 
            className="absolute -top-5 left-1 md:-top-6 md:-left-10 lg:-top-8 lg:left-5 w-32 md:w-48 lg:w-64 object-contain z-20 drop-shadow-md"
          />

          <img 
            src={hopeLogo} 
            alt="Season 09 HOPE" 
            className="relative w-full max-w-[30rem] md:max-w-2xl lg:max-w-4xl object-contain drop-shadow-xl z-10 pointer-events-auto transition-transform duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
          />

          <img 
            src={seasonText} 
            alt="Season 09" 
            className="absolute -bottom-5 right-1 md:-bottom-8 md:-right-6 lg:-bottom-10 lg:right-3 w-24 md:w-40 lg:w-50 object-contain z-20 drop-shadow-md rotate-10"
          />
          
        </div>
        
        {/* BOTÃO SYMPLA */}
        <a 
          href="https://www.sympla.com.br/evento/conferEncia-hope-2026/3566344" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 md:mt-16 bg-[#FFC700] text-black border-[3px] border-black rounded-full px-12 py-5 md:px-12 md:py-4 font-black text-lg md:text-xl uppercase tracking-wider hover:bg-black hover:text-[#FFC700] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_rgba(0,0,0,1)] pointer-events-auto"
        >
          Garanta Seu Lugar
        </a>

        {/* TAGS DE DATA E LOCAL */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-3 md:gap-6 pointer-events-auto">
          
          <div className="flex items-center gap-2 bg-[#111111]/80 backdrop-blur-sm border border-white/10 px-2.5 py-1.25 rounded-full drop-shadow-lg hover:bg-black transition-colors duration-300">
            <Calendar size={20} className="text-[#FF6B2B]" />
            <span className="font-['Inter',_sans-serif] text-white font-medium text-sm md:text-base tracking-wide">
              24 a 26 de Setembro
            </span>
          </div>

          <a href="#localizacao" className="flex items-center gap-2 bg-[#111111]/80 backdrop-blur-sm border border-white/10 px-2.5 py-1.25 rounded-full drop-shadow-lg hover:bg-black transition-colors duration-300 cursor-pointer">
            <MapPin size={20} className="text-[#FF6B2B]" />
            <span className="font-['Inter',_sans-serif] text-white font-medium text-sm md:text-base tracking-wide">
              Hangar 3 (IBM) • João Pessoa, PB
            </span>
          </a>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-[#E6A900] border-t-2 border-black z-20 pointer-events-none"></div>
    </section>
  );
}