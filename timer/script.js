const input = document.getElementById('minutes');
const timerDisplay = document.getElementById('timer');
const button = document.getElementById('start-stop');
const message = document.getElementById('message');
let interval;
let isRunning = false;

function updateTimer(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  timerDisplay.textContent = `${mins}:${secs}`;
}

function resetUI() {
  clearInterval(interval);
  isRunning = false;
  button.textContent = '▶️ Старт';
  timerDisplay.textContent = '00:00';
  message.classList.add('hidden');
}

button.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(interval);
    resetUI();
  } else {
    const minutes = parseInt(input.value);
    if (isNaN(minutes) || minutes <= 0) {
      alert('Введіть коректне значення в хвилинах.');
      return;
    }

    let time = minutes * 60; // Ми  отримали кількість введених хвилин, перетворюємо їх в с секнуди.
    updateTimer(time);
    message.classList.add('hidden');
    button.textContent = '⏹ Зупинити';
    isRunning = true;

    interval = setInterval(() => {
      time--;
      updateTimer(time);

      if (time <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = '00:00';
        message.classList.remove('hidden');
        button.textContent = '▶️ Старт';
        isRunning = false;
      }
    }, 1000);
  }
}
);

