import { useState } from "react";
import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";

const faqList = [
  {
    question: "O QUE É A CONFERÊNCIA HOPE?",
    answer:
      "A Conferência HOPE é um evento dedicado a unir e capacitar evangelistas e pessoas com o chamado para o evangelismo. Nosso objetivo é inspirar, equipar e encorajar os participantes a levar a mensagem transformadora do Evangelho ao Brasil e ao mundo.",
  },
  {
    question: "QUEM PODE PARTICIPAR DA CONFERÊNCIA?",
    answer: "Todos que desejam crescer em evangelismo e missões são bem-vindos!",
  },
  {
    question: "ONDE E QUANDO ACONTECERÁ A CONFERÊNCIA?",
    answer: "A conferência acontecerá em João Pessoa, PB, nos dias 25, 26 e 27 de setembro de 2025.",
  },
  // Adicione ou edite perguntas e respostas aqui
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-[#1A1A1A]">
      <Container>
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
            Perguntas <span className="text-[#FF9800]">Frequentes</span>
          </h2>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden divide-y divide-[#232323] border border-[#232323] bg-[#232323]">
            {faqList.map((faq, idx) => (
              <div key={idx}>
                <button
                  className={`w-full text-left px-6 py-5 font-bold tracking-wide uppercase text-base md:text-lg flex items-center justify-between focus:outline-none transition-colors ${openIndex === idx ? "bg-[#232323] text-[#FF9800]" : "bg-[#232323] text-white hover:text-[#FF9800]"}`}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span>{openIndex === idx ? "–" : "+"}</span>
                  <span className="flex-1 ml-3">{faq.question}</span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-gray-300 text-base bg-[#232323]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};
