const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.id === 'clear') {
      current = '';
    } else if (btn.textContent === '=') {
      try {
        current = eval(current).toString();
      } catch {
        current = 'Fehler';
      }
    } else {
      current += btn.textContent;
    }
    display.value = current;
  });
});

// PWA Service Worker registrieren
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registriert'))
    .catch(err => console.error('SW Fehler:', err));
}
