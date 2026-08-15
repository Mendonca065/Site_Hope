// src/components/sections/Hero.tsx
import heroBg from '../../assets/images/hero-background.png'; 
import hopeLogo from '../../assets/images/hope-logo-sticker.png';

export function Hero() {
  return (
    <section 
      className="relative w-full h-[calc(100vh-56px)] min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundColor: '#EBE2D4',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl">
        
        <img 
          src={hopeLogo} 
          alt="Season 09 HOPE" 
          className="w-full max-w-md md:max-w-2xl lg:max-w-4xl object-contain drop-shadow-xl"
        />

        <a 
          href="#inscricoes" 
          className="mt-6 md:mt-2 bg-[#FFC700] text-black border-[3px] border-black rounded-full px-8 py-3 md:px-12 md:py-4 font-black text-lg md:text-xl uppercase tracking-wider hover:bg-black hover:text-[#FFC700] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        >
          Garanta Seu Lugar
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-[#E6A900] border-t-2 border-black z-20"></div>
    </section>
  );
}