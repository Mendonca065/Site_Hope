import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-27T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tickets" className="py-20 bg-[#1A1A1A]">
      <Container>
        <FadeInSection>
          <div className="text-center mb-12">
            <Title className="text-white">INSCRIÇÕES DISPONÍVEIS EM</Title>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="bg-[#232323] p-8 rounded-3xl border border-[#FF9800]/20 text-center group hover:border-[#FF9800]/40 transition-all duration-300">
                  <span className="block text-5xl lg:text-6xl font-bold text-[#FF9800] mb-2">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-gray-300 text-lg uppercase tracking-wider">{item.label}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Paragraph className="text-gray-400 mb-8">
              Fique atento! As inscrições começa em breve. Não perca a oportunidade de fazer parte deste momento único.
            </Paragraph>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};
