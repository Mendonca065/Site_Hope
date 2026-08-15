interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

// Componente de paragrafo reutilizável

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  return <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>;
};
