/* =============================================
   SCROLL REVEAL
   Uses IntersectionObserver to fade-in project
   cards as they enter the viewport.
   ============================================= */
(function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        // Stagger each card slightly
        entry.target.style.transitionDelay = (i * 0.08) + 's';
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.project-card').forEach(function(card) {
    observer.observe(card);
  });
})();
