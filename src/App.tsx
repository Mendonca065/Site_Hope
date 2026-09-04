// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/elements/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/elements/Footer";

// Importações do AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  // Inicialização do AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Duração de 0.8s (tempo excelente para ficar natural)
      once: true,    // Faz a animação acontecer apenas uma vez (quando surge na tela)
      easing: "ease-in-out", // Deixa a entrada mais suave
    });
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen bg-body flex flex-col overflow-x-clip">
        <Header />
        <main className="w-full flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}