// src/components/Header.tsx
import { Link } from 'react-router-dom';

export function Header() {
  return (
    /* 
      Header fixo no topo. 
      Cor baseada no laranja da imagem: bg-[#FF6B2B] (ajuste o HEX exato se necessário)
    */
    <header className="w-full bg-[#FF6B2B] border-b-2 border-black z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-end">
        {/* Navegação - Links em negrito, caixa alta e com espaçamento */}
        <nav>
          <ul className="flex items-center gap-6 md:gap-8 text-white font-black text-sm md:text-base uppercase tracking-wider">
            <li>
              <a href="#inscricoes" className="hover:text-black transition-colors">
                Inscrições Grátis
              </a>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-black transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <a href="#lineup" className="hover:text-black transition-colors">
                Line-Up
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-black transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}