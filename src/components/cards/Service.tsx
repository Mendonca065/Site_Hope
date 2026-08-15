import { Paragraph } from "../shared/Paragraph";

//utilizado na secao de servicos
// Define a interface ServiceProps para tipar as propriedades (props)
// que o componente Service espera receber.
interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Componente Service: Exibe um cartão individual de serviço com ícone, título e descrição.
export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div
      className="h-full p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg
                    shadow-box-shadow relative overflow-hidden flex flex-col"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        {" "}
        {icon}{" "}
      </div>
      <div className="mt-6 space-y-4 relative flex-1 flex flex-col">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {" "}
          {title}
        </h2>
        <Paragraph className="flex-1"> {description}</Paragraph>
      </div>
    </div>
  );
};
