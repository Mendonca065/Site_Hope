// src/components/layout/Header.tsx
import hopeLogo from '../../assets/images/hope-logo-sticker.png';

export function Header() {
  return (
    <header className="w-full bg-[#FF6B2B] sticky top-0 z-50 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* LOGO (Esquerda) */}
        <a href="#" className="flex-shrink-0">
          <img 
            src={hopeLogo} 
            alt="HOPE" 
            className="h-10 md:h-12 px-37 md:px-0 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* LINKS (Direita) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#inscricoes" className="text-white font-bold uppercase tracking-wider text-sm hover:text-black transition-colors">
            Inscrições Grátis
          </a>
          <a href="#sobre" className="text-white font-bold uppercase tracking-wider text-sm hover:text-black transition-colors">
            Sobre
          </a>
          <a href="#lineup" className="text-white font-bold uppercase tracking-wider text-sm hover:text-black transition-colors">
            Line-up
          </a>
          <a href="#faq" className="text-white font-bold uppercase tracking-wider text-sm hover:text-black transition-colors">
            FAQ
          </a>
        </div>

      </div>
    </header>
  );
}