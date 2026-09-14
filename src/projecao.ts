import './index.css';
import { io } from 'socket.io-client';

const socket = io('https://backend-hope-cf7h.onrender.com');

// Mapeia os elementos
const viewIdle = document.getElementById('view-idle') as HTMLElement;
const viewActive = document.getElementById('view-active') as HTMLElement;
const screenQuestion = document.getElementById('screen-question') as HTMLElement;
const simCounter = document.getElementById('sim-counter') as HTMLElement;

// Atualiza a tela quando o admin muda a pergunta
socket.on('state-update', (state) => {
  if (state.status === 'idle') {
    viewIdle.classList.remove('hidden');
    viewActive.classList.add('hidden');
  } else {
    viewIdle.classList.add('hidden');
    viewActive.classList.remove('hidden');
    screenQuestion.innerText = state.question;
    
    // Garante que o contador mostre o número correto logo que a pergunta abrir
    if (simCounter) simCounter.innerText = state.votes.sim.toString();
  }
});

// A mágica do AO VIVO: atualiza os números cada vez que recebe um clique
socket.on('vote-update', (votes) => {
  if (simCounter) {
    simCounter.innerText = votes.sim.toString();
    
    // Efeito visual rápido quando o número muda (pisca levemente)
    simCounter.classList.add('scale-110', 'text-white');
    setTimeout(() => {
      simCounter.classList.remove('scale-110', 'text-white');
    }, 150);
  }
});