/* =============================================
   HERO SLIDER
   Handles: auto-play, prev/next, dot nav,
   keyboard nav, progress bar, pause-on-hover.
   ============================================= */
(function initSlider() {
  const slides      = document.querySelectorAll('.slide');
  const dots        = document.querySelectorAll('.dot');
  const prevBtn     = document.getElementById('prevBtn');
  const nextBtn     = document.getElementById('nextBtn');
  const counterEl   = document.getElementById('counterCurrent');
  const progressBar = document.getElementById('progressBar');
  const heroEl      = document.querySelector('.hero');

  const TOTAL    = slides.length;
  const INTERVAL = 4800; // ms between auto-advances
  let current  = 0;
  let timer    = null;
  let startTime = null;
  let rafId     = null;

  /* Zero-pad slide number */
  function pad(n) {
    return String(n + 1).padStart(2, '0');
  }

  /* Go to a specific slide index */
  function goTo(idx) {
    // Deactivate current
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');
    dots[current].setAttribute('tabindex', '-1');

    // Wrap index
    current = (idx + TOTAL) % TOTAL;

    // Activate new
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');
    dots[current].setAttribute('tabindex', '0');
    counterEl.textContent = pad(current);

    resetProgress();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  /* Button click handlers */
  nextBtn.addEventListener('click', function() { next(); resetAutoplay(); });
  prevBtn.addEventListener('click', function() { prev(); resetAutoplay(); });

  /* Dot click handlers */
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { goTo(i); resetAutoplay(); });
  });

  /* Keyboard navigation */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') { next(); resetAutoplay(); }
    if (e.key === 'ArrowLeft')  { prev(); resetAutoplay(); }
  });

  /* Keyboard on dots */
  dots.forEach(function(dot, i) {
    dot.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goTo(i);
        resetAutoplay();
      }
    });
  });

  /* Progress bar animation */
  function resetProgress() {
    cancelAnimationFrame(rafId);
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    startTime = null;
    requestAnimationFrame(animProgress);
  }

  function animProgress(ts) {
    if (!startTime) startTime = ts;
    var elapsed = ts - startTime;
    var pct = Math.min((elapsed / INTERVAL) * 100, 100);
    progressBar.style.width = pct + '%';
    if (pct < 100) {
      rafId = requestAnimationFrame(animProgress);
    }
  }

  /* Auto-play controls */
  function startAutoplay() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  function resetAutoplay() {
    clearInterval(timer);
    startAutoplay();
  }

  /* Pause on hover */
  heroEl.addEventListener('mouseenter', function() { clearInterval(timer); });
  heroEl.addEventListener('mouseleave', function() { startAutoplay(); });

  /* Initialise */
  startAutoplay();
  resetProgress();
})();
