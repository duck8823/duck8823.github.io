/* Optional decoration only. Reading and navigation never depend on this file. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const greeted = new WeakSet();
  // A readable single-column weather spread on phones. Native details still work
  // without JavaScript; do not reset the user's choice on resize.
  if (window.matchMedia('(max-width: 767px)').matches) {
    document.querySelectorAll('.weather-detail').forEach(panel => { panel.open = false; });
  }
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting && !greeted.has(entry.target)) {
      greeted.add(entry.target);
      if (!reduced.matches) entry.target.classList.add('is-moving');
    } else if (!entry.isIntersecting && greeted.has(entry.target)) {
      entry.target.classList.remove('is-moving');
      observer.unobserve(entry.target); // no offscreen treadmill or repeat greetings
    }
  }), { threshold: 0.5 });
  document.querySelectorAll('.companion.walk').forEach(dog => observer.observe(dog));
})();
