/* =============================================
   CUSTOM CURSOR
   Two-layer magnetic cursor: instant dot +
   lagged ring. Expands on hover targets.
   ============================================= */
(function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0;   // mouse position
  let rx = 0, ry = 0;   // ring position (lagged)

  // Track mouse
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
  });

  // Animate ring with lerp
  (function animLoop() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animLoop);
  })();

  // Expand ring on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .dot, .project-card');
  hoverTargets.forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', function() {
      document.body.classList.remove('cursor-hover');
    });
  });
})();
