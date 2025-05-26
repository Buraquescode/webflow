// NAV TOGGLE (mobile)
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

// SIMPLE FORM HANDLER
document.getElementById('strategy-form')
  .addEventListener('submit', e => {
    e.preventDefault();
    // here you could wire up AJAX or send to your CRM
    alert('Thanks! We’ll be in touch soon.');
    e.target.reset();
  });
