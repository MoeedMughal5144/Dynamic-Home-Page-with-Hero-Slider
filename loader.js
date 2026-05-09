/* =============================================
   PAGE LOADER
   Animates the intro screen and removes it
   once the page has fully loaded.
   ============================================= */
(function initLoader() {
  const loaderEl   = document.getElementById('loader');
  const loaderText = document.getElementById('loaderText');
  const WORD       = 'NEXUS';

  // Build staggered letter spans
  WORD.split('').forEach(function(ch, i) {
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = (i * 0.08) + 's';
    loaderText.appendChild(span);
  });

  // Hide loader after 1.3s (allows bar + letters to finish)
  window.addEventListener('load', function() {
    setTimeout(function() {
      loaderEl.classList.add('loaded');
    }, 1300);
  });
})();
