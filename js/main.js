// js/main.js

// 1. Smooth scrolling for any link with [data-scroll]
document.querySelectorAll('[data-scroll]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 2. Reveal-on-scroll with Intersection Observer
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // stop observing once revealed
    }
  });
}, {
  threshold: 0.1
});

// Observe each reveal element
revealElements.forEach(el => revealObserver.observe(el));
