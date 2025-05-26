// NAV TOGGLE (mobile)
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// VIDEO PLAY PLACEHOLDER
const playBtn = document.querySelector('.play-button');
playBtn.addEventListener('click', () => {
  // replace with your actual video‐player logic
  alert('▶ Play video: load your embedded video here');
});
