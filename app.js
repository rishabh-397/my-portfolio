// Form submission response
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-status').innerText = '✅ Thank you! I’ll get back to you.';
  this.reset();
});

// Dark/Light mode toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
