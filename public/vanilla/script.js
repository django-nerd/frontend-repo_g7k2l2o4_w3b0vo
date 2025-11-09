// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Embed Spline scene in vanilla setup without React
// Uses Spline web component loader
// Docs: https://github.com/splinetool/react-spline (we'll use <iframe> fallback for simplicity)
(function mountSpline() {
  const container = document.getElementById('splineContainer');
  if (!container) return;

  // Create an iframe that hosts the Spline viewer
  const iframe = document.createElement('iframe');
  iframe.src = 'https://my.spline.design/untitled-2d2e8d2d0f0c4d86b9f6b7eeb9b5a9e1/';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';
  iframe.allow = 'autoplay; fullscreen';
  container.appendChild(iframe);
})();

// Handle smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#' || href.length === 1) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after navigation
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      }
    }
  });
});
