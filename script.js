let timerInterval;
let startTime = 0;
let isRunning = false;

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  document.getElementById('timer').textContent = formatTime(elapsedTime);
}

document.getElementById('startTimer').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
  }
});

document.getElementById('stopTimer').addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
});

document.getElementById('resetTimer').addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  startTime = 0;
  document.getElementById('timer').textContent = formatTime(0);
});