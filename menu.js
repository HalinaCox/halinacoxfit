// Event delegation — works regardless of when the header is injected into the DOM

document.addEventListener('click', function(e) {
  // Toggle hamburger
  const toggle = e.target.closest('.mobile-menu-toggle');
  if (toggle) {
    e.preventDefault();
    const nav = document.querySelector('.nav-wrapper');
    toggle.classList.toggle('active');
    if (nav) nav.classList.toggle('active');
    return;
  }

  // Close menu when a nav link is clicked
  if (e.target.closest('.nav-wrapper a')) {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav-wrapper');
    if (toggle) toggle.classList.remove('active');
    if (nav) nav.classList.remove('active');
  }
});

// Close menu on resize back to desktop
window.addEventListener('resize', function() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-wrapper');
  if (toggle) toggle.classList.remove('active');
  if (nav) nav.classList.remove('active');
});
