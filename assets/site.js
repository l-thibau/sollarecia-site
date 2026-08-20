(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.sun-button, .sun-trigger').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      event.preventDefault();

      const burst = document.createElement('span');
      burst.className = 'sun-burst';
      burst.style.left = `${event.clientX}px`;
      burst.style.top = `${event.clientY}px`;
      document.body.appendChild(burst);

      const url = link.href;
      const target = link.target;

      setTimeout(() => burst.remove(), 700);
      setTimeout(() => {
        if (target === '_blank') {
          window.open(url, '_blank', 'noopener');
        } else {
          window.location.href = url;
        }
      }, 420);
    });
  });
})();
