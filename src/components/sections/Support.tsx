import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

/**
 * Componente Support: Seção de Sobre nos da empresa e contatos para suporte da página inicial
 *
 * Alterações realizadas:
 * 1. Layout:
 *    - Estrutura convertida para grid com duas colunas em desktop
 *    - Layout responsivo (uma coluna em mobile, duas em desktop)
 *    - Máxima largura definida para melhor leitura
 *
 * 2. Seção de texto superior:
 *    - Centralizada com largura máxima
 *    - Adicionado FadeInSection para animação de entrada
 *
 * 3. Card de contato:
 *    - Mantido o design original do cartão
 *    - Adicionado delay de 200ms na animação
 *
 * 4. Nova seção de imagem:
 *    - Adicionada imagem profissional à direita
 *    - Aspect ratio square em mobile, altura automática em desktop
 *    - Delay de 400ms na animação para efeito escalonado
 *    - Bordas arredondadas para combinar com o card
 */

export const Support = () => {
  return (
    <section id="support" className="py-16">
      <Container>
        {/* Seção de texto centralizada com animação */}
        <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
          {" "}
          <Title className="text-center mb-6">Sobre nossa empresa</Title>
          <Paragraph>
            Somos uma empresa com foco em conectar você ao que realmente
            importa, oferecendo internet rápida, estável e com o melhor suporte.
          </Paragraph>
        </FadeInSection>

        {/* Grid responsivo para card e imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Card de informações de contato com animação */}
          <FadeInSection delay={200}>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Informações de contato
              </h2>

              <div className="space-y-8">
                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-[#0096FF]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>                    <h3 className="text-xl font-semibold text-gray-900">
                      Telefone
                    </h3>
                    <a href="https://wa.me/558331429400" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0096FF] transition-colors">
                      83 31429400
                    </a>
                    <p className="text-gray-500 text-sm">
                      Seg-Sex: 8h às 18h | Sáb: 8h às 12h
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-[#0096FF]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      E-mail
                    </h3>
                    <p className="text-gray-600">contato@g3netfibra.com.br</p>
                    <p className="text-gray-500 text-sm">
                      Retorno em até 24h úteis.
                    </p>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-[#0096FF]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Endereço
                    </h3>
                    <p className="text-gray-600">
                      Av. Pres. José Linhares, 204 - Sala 203
                    </p>
                    <p className="text-gray-600">Bessa, João Pessoa - PB</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Imagem com animação atrasada */}
          <FadeInSection delay={400} className="relative h-full">
            <div className="aspect-square lg:aspect-auto lg:h-full w-full">
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </FadeInSection>
        </div>
      </Container>
    </section>
  );
};
