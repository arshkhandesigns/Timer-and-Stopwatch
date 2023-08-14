const timerDisplay = document.getElementById('timerDisplay');
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');
const resetTimerBtn = document.getElementById('resetTimer');

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatchBtn = document.getElementById('startStopwatch');
const pauseStopwatchBtn = document.getElementById('pauseStopwatch');
const resetStopwatchBtn = document.getElementById('resetStopwatch');

let timerInterval;
let stopwatchInterval;

function updateDisplay(display, time) {
  display.textContent = time;
}

function startTimer() {
  let seconds = 0;
  timerInterval = setInterval(() => {
    seconds++;
    const formattedTime = formatTime(seconds);
    updateDisplay(timerDisplay, formattedTime);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  updateDisplay(timerDisplay, '00:00:00');
}

function startStopwatch() {
  let seconds = 0;
  stopwatchInterval = setInterval(() => {
    seconds++;
    const formattedTime = formatTime(seconds);
    updateDisplay(stopwatchDisplay, formattedTime);
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  updateDisplay(stopwatchDisplay, '00:00:00');
}

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
resetTimerBtn.addEventListener('click', resetTimer);

startStopwatchBtn.addEventListener('click', startStopwatch);
pauseStopwatchBtn.addEventListener('click', pauseStopwatch);
resetStopwatchBtn.addEventListener('click', resetStopwatch);
