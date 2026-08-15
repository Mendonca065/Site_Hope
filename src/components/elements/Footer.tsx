import { Container } from "../shared/Container";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-12 bg-[#1A1A1A] text-white mt-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo and Mission */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <img src="/logo-high-transparent.png" alt="HOPE '25 Logo" className="w-32" />
            </div>
            <p className="text-gray-400">
              Um evento que vai transformar vidas e fortalecer a fé da nossa geração.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 lg:justify-self-end">
            <h3 className="text-xl font-semibold mb-6 text-[#FF9800]">Contato</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-400">
                <i className="fas fa-map-marker-alt text-[#FF9800]"></i>
                Av. José Liberato, 157 - Igreja Batista Miramar, João Pessoa, PB
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-phone text-[#FF9800]"></i>
                <a href="tel:+558398765432" className="text-gray-400 hover:text-[#FF9800] transition-colors">
                  (83) 98765-4321
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#FF9800]"></i>
                <a href="mailto:contato@hope25.com.br" className="text-gray-400 hover:text-[#FF9800] transition-colors">
                  contato@hope25.com.br
                </a>
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-[#FF9800] hover:text-[#F57C00] transition-colors">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-[#FF9800] hover:text-[#F57C00] transition-colors">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-[#FF9800] hover:text-[#F57C00] transition-colors">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
              {/* Mapa */}
              <div className="mt-6 rounded-xl overflow-hidden border border-[#FF9800]/20 shadow-lg">
                <iframe
                  title="Mapa Localização HOPE"
                  src="https://www.google.com/maps?q=Av.+jose+liberato,+157,+Jo%C3%A3o+Pessoa,+PB&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[200px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">© 2025 HOPE. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
