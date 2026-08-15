import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";

export const Donations = () => {
  return (
    <section id="donations" className="py-16 bg-[#1A1A1A]">
      <Container>
        <FadeInSection>
          <div className="text-center mb-12">
            <Title className="text-white">Seja um agente transformador, contribua</Title>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Paragraph className="text-lg text-gray-400">
                Sua contribuição é fundamental para impactar vidas e transformar nossa comunidade. 
                Juntos podemos fazer a diferença e levar esperança a quem mais precisa.
              </Paragraph>
            </div>
            
            <div className="bg-[#262626] p-8 rounded-3xl shadow-xl border border-[#FF9800]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Coluna Dados Bancários */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#FF9800]">Dados Bancários</h3>
                    <div className="space-y-2">
                      <p className="text-gray-300">Banco: 000 - Banco HOPE</p>
                      <p className="text-gray-300">Agência: 0000</p>
                      <p className="text-gray-300">Conta: 00000-0</p>
                    </div>
                  </div>
                </div>

                {/* Coluna PIX e QR Code */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#FF9800]">PIX</h3>
                    <p className="text-gray-300 mb-6">CNPJ: 00.000.000/0001-00</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#FF9800]">QR Code</h3>
                    <div className="bg-[#1A1A1A] p-4 rounded-lg w-36 h-36 mx-auto flex items-center justify-center border border-[#FF9800]/20">
                      <span className="text-gray-500">QR Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};
