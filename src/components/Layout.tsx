import { Header } from "./elements/Header";
import { Footer } from "./elements/Footer";
import { useEffect } from "react";

interface Layoutprops {
  title: string;
  children: React.ReactNode;
}

// Componente Layout principal
// Responsável por aplicar uma estrutura padrão nas páginas (Navbar, conteúdo e Footer)

export const Layout = ({ title, children }: Layoutprops) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Header />

      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
};
