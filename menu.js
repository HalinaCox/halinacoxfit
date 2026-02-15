// Mobile Menu Toggle Functionality
// This script handles the hamburger menu for all pages

function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navWrapper = document.querySelector('.nav-wrapper');
  
  if (menuToggle && navWrapper) {
    // Toggle menu when clicking hamburger
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      navWrapper.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navWrapper.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        menuToggle.classList.remove('active');
        navWrapper.classList.remove('active');
      }
    });
    
    // Reset menu when screen size changes
    window.addEventListener('resize', function() {
      menuToggle.classList.remove('active');
      navWrapper.classList.remove('active');
    });
  }
}

// Initialize menu after header is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for header to load via fetch
  setTimeout(initMobileMenu, 200);
});