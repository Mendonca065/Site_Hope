import "./index.css";
import { io } from 'socket.io-client';

const socket = io('https://backend-hope-cf7h.onrender.com');

const questions = [
  "Você já pensou que não era suficiente?",
  "Você já teve medo do seu próprio futuro?",
  "Você acredita que a esperança pode mudar tudo?"
];

const list = document.getElementById('questions-list') as HTMLElement;
const btnReset = document.getElementById('btn-reset') as HTMLButtonElement;
const btnResult = document.getElementById('btn-result') as HTMLButtonElement;

// Renderiza a lista de perguntas
questions.forEach((q, idx) => {
  const card = document.createElement('div');
  card.className = "bg-neutral-800 p-4 rounded-lg flex justify-between items-center gap-4";
  card.innerHTML = `
    <span class="text-base font-medium">${idx + 1}. ${q}</span>
    <button data-index="${idx}" class="btn-launch bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded font-bold whitespace-nowrap transition">Lançar</button>
  `;
  list.appendChild(card);
});

// Adiciona eventos aos botões recém-criados
document.querySelectorAll('.btn-launch').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const target = e.target as HTMLButtonElement;
    const idx = parseInt(target.getAttribute('data-index') || '0');
    socket.emit('admin:start-question', { question: questions[idx], index: idx });
  });
});

btnResult?.addEventListener('click', () => {
  socket.emit('admin:show-result');
});

btnReset?.addEventListener('click', () => {
  socket.emit('admin:reset');
});