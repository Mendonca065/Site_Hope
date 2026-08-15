interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

// Componente de título reutilizável

export const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h1
      className={`text-black font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`}
    >
      {children}
    </h1>
  );
};
