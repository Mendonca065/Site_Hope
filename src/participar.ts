import './index.css';
import { io } from 'socket.io-client';

const socket = io('https://backend-hope-cf7h.onrender.com'); 
let currentQIndex = -1;

// MÁGICA AQUI: Verifica se a URL tem "?teste" no final
const isTestMode = new URLSearchParams(window.location.search).has('teste');

const screenIdle = document.getElementById('screen-idle') as HTMLElement;
const screenVoting = document.getElementById('screen-voting') as HTMLElement;
const screenVoted = document.getElementById('screen-voted') as HTMLElement;
const questionText = document.getElementById('question-text') as HTMLElement;
const btnSim = document.getElementById('btn-sim') as HTMLButtonElement;
const btnNao = document.getElementById('btn-nao') as HTMLButtonElement;

function showScreen(name: 'idle' | 'voting' | 'voted') {
  screenIdle.classList.toggle('hidden', name !== 'idle');
  screenVoting.classList.toggle('hidden', name !== 'voting');
  screenVoted.classList.toggle('hidden', name !== 'voted');
}

socket.on('state-update', (state) => {
  // Se for você testando, ele finge que a pessoa nunca votou
  const voted = localStorage.getItem(`voted_q_${state.questionIndex}`) && !isTestMode;

  if (state.status === 'voting') {
    currentQIndex = state.questionIndex;
    
    if (voted) {
      showScreen('voted');
    } else {
      questionText.innerText = state.question;
      showScreen('voting');
    }
  } else {
    showScreen('idle');
  }
});

function sendVote(option: 'sim' | 'nao') {
  socket.emit('user:vote', option);
  
  // Só salva a trava no celular se NÃO estiver no modo teste
  if (!isTestMode) {
    localStorage.setItem(`voted_q_${currentQIndex}`, 'true');
  }
  
  showScreen('voted');
}

btnSim?.addEventListener('click', () => sendVote('sim'));
btnNao?.addEventListener('click', () => sendVote('nao'));