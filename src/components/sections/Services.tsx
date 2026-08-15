import { services } from "../../utils/services";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Paragraph } from "../shared/Paragraph";

// Componente Services: Seção Servicos oferecidos da página inicial (Service section).

export const Services = () => {
  return (    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-white to-[#f0f7ff]">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-[#0096FF] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <Container className="space-y-10 md:space-y-12 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-black text-4xl font-bold">
              Por que escolher a G3NET
            </h2>
            <Paragraph>
              Oferecemos mais do que internet, entregamos uma experiência
              completa de conectividade.
            </Paragraph>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {services.map((service, key) => (
            <FadeInSection key={key} delay={key * 200} className="h-full">
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
