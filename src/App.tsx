// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="w-full min-h-screen bg-body flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}