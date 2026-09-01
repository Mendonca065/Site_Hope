// src/components/elements/Footer.tsx

import logoHangar3 from '../../assets/images/Hangar3logo.png';

export function Footer() {
  const text = "AMADOS PARA AMAR ✦ CURADOS PARA CURA ✦ TRANSFORMADOS PARA TRANSFORMAR ✦ ";
  const repeatedText = Array(4).fill(text).join("");

  return (
    <footer className="relative w-full -mt-[10px] bg-[#111111] pt-32 pb-12 flex flex-col items-center overflow-x-clip z-20">
      
      {/* MARQUEE LARANJA */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex items-center justify-center pointer-events-none z-30">
        <div className="w-[110vw] -ml-[5vw] flex items-center bg-[#EA5F25] py-2 md:py-4 transform rotate-1 md:rotate-2 shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
          <div className="flex whitespace-nowrap animate-marquee pointer-events-auto">
            <span className="font-['Inter',_sans-serif] font-bold text-[14px] md:text-[24px] leading-none tracking-[2px] uppercase text-white pr-4">
              {repeatedText}
            </span>
            <span className="font-['Inter',_sans-serif] font-bold text-[14px] md:text-[24px] leading-none tracking-[2px] uppercase text-white pr-4">
              {repeatedText}
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 flex flex-col items-center mt-8 md:mt-12">
        
        {/* LOGO */}
        <img 
          src={logoHangar3} 
          alt="Hangar 3 - Go to heaven" 
          className="w-full max-w-[280px] md:max-w-[450px] object-contain mb-10 md:mb-14 hover:scale-105 transition-transform duration-500"
        />

        {/* NAVEGAÇÃO */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 md:mb-10">
          {['Sobre', 'Line-Up', 'Ingressos', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="font-['Montserrat',_sans-serif] font-black text-[#EA5F25] text-[12px] md:text-[14px] uppercase tracking-wider hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* REDES SOCIAIS */}
        <div className="flex items-center justify-center gap-6 mb-16 md:mb-24">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA5F25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EA5F25" stroke="#EA5F25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#111111"/>
            </svg>
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="font-['Inter',_sans-serif] text-[#666666] text-[10px] md:text-[12px]">
          © 2026 Hangar 3. Todos os direitos reservados.
        </p>
        
      </div>
    </footer>
  );
}