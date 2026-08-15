// Lista de Planos de Internet com Preços e Benefícios
// ----------------------------------------------------------
// Este array contém os dados usados para exibir os planos
// comerciais disponíveis na G3NET.
// Cada objeto representa um plano com título, preço e
// recursos (features)

// Definição do tipo Plan para garantir consistência nos dados
export interface Plan {
  title: string;
  price: string;
  features: string[];
  bestValue?: boolean;
}

// Array de planos de internet para apartamentos
// Cada plano tem um título, preço e uma lista de recursos
// O campo bestValue é opcional e indica o melhor custo-benefício
// nas features Manter o padrão "Download até X Mbps" e "Upload até Y Mbps"
export const apartmentPlans: Plan[] = [
  {
    title: "600 MEGA",
    price: "R$99,90/mês",
    features: [
      "Download até 600 Mbps",
      "Upload até 300 Mbps",
      "1 ponto Wi-Fi 6 de alta performace",
      "Instalação Gratuita",
    ],
  },
  {
    title: "1 GIGA",
    price: "R$119,90/mês",
    features: [
      "Download até 1000 Mbps",
      "Upload até 500 Mbps",
      "1 ponto Wi-Fi 6 Plus de alta performace",
      "Streaming 4K sem travamentos",
      "Instalação Gratuita",
    ],
    bestValue: true,
  },
  {
    title: "1.5 GIGA",
    price: "R$249,90/mês",
    features: [
      "Download até 1500 Mbps",
      "Upload até 750 Mbps",
      "1 ponto Wi-Fi 7 de alta performace",
      "Roteador com portas 2.5GE",
      "Instalação Gratuita",
    ],
  },
];

export const housePlans: Plan[] = [
  {
    title: "House 1 GIGA",
    price: "R$250/mês",
    features: [
      "Download até 1000 Mbps",
      "Upload até 500 Mbps",
      "1 Ponto Wi-Fi 6+ (ultravelocidade)",
      "Portas Gigabit Ethernet",
      "Projeto de rede exclusivo para sua residência",
      "Garantia de velocidade contratada",
      "Instalação Gratuita",
    ],
  },
  {
    title: "House Mesh 1 GIGA",
    price: "R$280/mês",
    features: [
      "Download até 1000 Mbps",
      "Upload até 500 Mbps",
      "Cobertura Ampliada com Mesh",
      "2 Ponto Wi-Fi 6+ (ultravelocidade)",
      "Portas Gigabit Ethernet",
      "Projeto de rede exclusivo para sua residência",
      "Garantia de velocidade contratada",
      "Instalação Gratuita",
    ],
    bestValue: true,
  },
  {
    title: "House 1.5 GIGA",
    price: "R$350/mês",
    features: [
      "Download até 1500 Mbps",
      "Upload até 750 Mbps",
      "1 Ponto Wi-Fi 7 (tecnologia de ponta)",
      "Portas 2.5 Gigabit Ethernet",
      "Projeto de rede exclusivo para sua residência",
      "Garantia de velocidade contratada",
      "Instalação Gratuita",
    ],
  },
];

/**
 * Planos Mesh para Apartamentos
 * - Otimizados para espaços menores
 * - Começam com 2 pontos de acesso
 * - Coberturas de 120m² a 300m²
 */
export const apartmentMeshPlans: Plan[] = [
  {
    title: "Mesh 600 MEGA",
    price: "R$119,90/mês",
    features: [
      "Download até 600 Mbps",
      "Upload até 300 Mbps",
      "2 Pontos Mesh Wi-Fi 6", // Melhor custo-benefício
      "Instalação Gratuita",
    ],
  },
  {
    title: "Mesh 800 MEGA",
    price: "R$129,90/mês",
    features: [
      "Download até 800 Mbps",
      "Upload até 400 Mbps",
      "2 Pontos Mesh Wi-Fi 6+", // Melhor custo-benefício
      "Zero dead zones",
      "Instalação Gratuita",
    ],
    bestValue: true,
  },
  {
    title: "Mesh 1 GIGA",
    price: "R$149,90/mês",
    features: [
      "Download até 1000 Mbps",
      "Upload até 500 Mbps",
      "2 Pontos Mesh Wi-Fi 6+", // Para apartamentos grandes/cobertura
      "Zero dead zones",
      "Instalação Gratuita",
    ],
  },
];
