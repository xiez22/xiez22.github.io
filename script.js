/* ============================================================
   Zhe Xie — Academic Homepage
   script.js: Active nav highlighting + footer year
   ============================================================ */

(function () {
  'use strict';

  // ── Footer year ──────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Active nav on scroll ─────────────────────────────────
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link[data-section]'));

  function setActive(id) {
    navLinks.forEach(function (link) {
      if (link.dataset.section === id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // IntersectionObserver: highlight the section currently in view
  if ('IntersectionObserver' in window && sections.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ── Smooth scroll for mobile nav links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
