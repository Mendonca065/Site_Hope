import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";

export const Sponsors = () => {
  // Dois apoiadores agora
  const sponsors = [
    { name: "Vinttage Casa de Eventos", image: "/sponsors/vinttage-logo.png", link: "https://www.instagram.com/vinttagecasadeeventos/" },
    { name: "Igreja Batista Miramar", image: "/sponsors/Logo IBM.png", link: "https://www.instagram.com/batistamiramar/" }
  ];

  return (
    <section className="py-16 bg-[#262626]">
      <Container>
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-[#FF9800] text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase">
              NOSSOS APOIADORES
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {sponsors.map((sponsor, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[220px] flex flex-col items-center justify-center bg-[#1A1A1A] p-6 rounded-xl border border-[#FF9800]/10 hover:border-[#FF9800]/30 transition-colors cursor-pointer no-underline"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-24 max-w-full object-contain opacity-80 mb-4"
                  />
                  <span className="block text-center text-white text-base font-semibold tracking-wide mt-2">
                    {sponsor.name}
                  </span>
                </a>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};
