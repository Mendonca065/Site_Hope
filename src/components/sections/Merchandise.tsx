import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { BtnLink } from "../shared/BtnLink";

export const Merchandise = () => {
  const products = [
    {
      name: "Camiseta HOPE '25",
      price: "R$ 49,90",
      image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Camiseta oficial do evento em algodão premium"
    },
    {
      name: "Kit HOPE '25",
      price: "R$ 149,90",
      image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Kit completo com camiseta, caneca, boné e adesivos"
    },
    {
      name: "Boné HOPE '25",
      price: "R$ 39,90",
      image: "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Boné ajustável com bordado exclusivo"
    }
  ];

  return (    <section id="merchandise" className="py-16 bg-[#1A1A1A]">
      <Container>
        <FadeInSection>
          <div className="text-center mb-12">
            <Title className="text-white">Merchandise Oficial</Title>
            <Paragraph className="mt-4 text-gray-400">
              Vista a camisa do HOPE '25 e faça parte desta história
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeInSection key={index} delay={index * 200}>                <div className="bg-[#262626] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                    <Paragraph className="mb-4 text-gray-400">{product.description}</Paragraph>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#FF9800]">{product.price}</span>
                      <BtnLink 
                        href="#" 
                        text="Comprar" 
                        className="bg-[#FF9800] hover:bg-[#F57C00]"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};
