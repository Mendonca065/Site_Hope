// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/elements/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/elements/Footer";

export default function App() {
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
      </div>
    </Router>
  );
}