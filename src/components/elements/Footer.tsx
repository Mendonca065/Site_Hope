// src/components/elements/Footer.tsx
import logoHangar3 from '../../assets/images/Hangar3logo.png';

export function Footer() {
  const text = "AMADOS PARA AMAR ✦ CURADOS PARA CURAR ✦ TRANSFORMADOS PARA TRANSFORMAR ✦ ";
  const repeatedText = Array(4).fill(text).join("");

  const navLinks = [
    { name: 'Sobre', id: '#sobre' },
    { name: 'Line-Up', id: '#lineup' }, 
    { name: 'Ingressos', id: '#hero' }, 
    { name: 'FAQ', id: '#faq' }
  ];

  return (
    <footer className="relative w-full -mt-[10px] bg-[#111111] pt-32 pb-12 flex flex-col items-center overflow-hidden z-20">
      
      {/* MARQUEE LARANJA */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center pointer-events-none z-30">
        <div className="absolute top-[-5px] md:top-[-10px] w-full flex items-center bg-[#EA5F25] py-2 md:py-6 transform rotate--1 md:rotate--3 scale-[1.05] shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
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
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 md:mb-20">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.id} 
              className="font-['Montserrat',_sans-serif] font-black text-[#EA5F25] text-[12px] md:text-[14px] uppercase tracking-wider hover:text-white transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* LOCALIZAÇÃO (MAPA DO GOOGLE) */}
        <div className="w-full flex flex-col items-center mb-16 md:mb-20">
          <h3 className="font-['Montserrat',_sans-serif] font-bold text-white text-[16px] md:text-[20px] uppercase tracking-widest mb-6">
          
          </h3>
          
          <div id="localizacao" className="w-full max-w-3xl h-[250px] md:h-[350px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-[4px] border-[#EA5F25] shadow-[8px_8px_0px_rgba(234,95,37,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300">
            {/* iframe com loading="lazy" para não afetar a performance */}
            <iframe 
  src="https://maps.google.com/maps?q=Igreja%20Batista%20de%20Miramar,%20Jo%C3%A3o%20Pessoa&t=&z=15&ie=UTF8&iwloc=&output=embed" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Mapa Igreja Batista de Miramar"
></iframe>
          </div>
          
          <p className="font-['Inter',_sans-serif] text-[#aaaaaa] text-sm md:text-base mt-5 text-center px-4 max-w-lg">
            <strong>Igreja Batista de Miramar (IBM)</strong><br/>
            João Pessoa, Paraíba
          </p>
        </div>

        {/* CONTATOS E REDES SOCIAIS */}
        <div className="flex flex-col items-center justify-center gap-6 mb-16 md:mb-24">
          
          {/* Grupo de Ícones */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Instagram */}
            <a href="https://www.instagram.com/hangar3oficial/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EA5F25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="https://www.youtube.com/@hangar3play" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#EA5F25" stroke="#EA5F25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#111111"/>
              </svg>
            </a>

            {/* Email Icon */}
            <a href="mailto:hangar3oficial@gmail.com" className="hover:scale-110 transition-transform duration-300" aria-label="Enviar E-mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#EA5F25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>

          {/* Texto do Email (Clicável) */}
          <a 
            href="mailto:hangar3oficial@gmail.com" 
            className="font-['Inter',_sans-serif] text-[#EA5F25] text-[14px] md:text-[16px] font-medium tracking-wide hover:text-white transition-colors duration-300"
          >
            hangar3oficial@gmail.com
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