/* ══════════════════════════════════════════════
   Portfolio JavaScript — Drashti Limbasiya
   ══════════════════════════════════════════════ */

// ─── Mobile menu toggle ──────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  // Animate hamburger → X
  const spans = menuToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// ─── Active nav link on scroll ──────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links .nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href').replace('#', '');
    // Map nav link hrefs to section IDs
    if (
      (href === 'electrohub' && (current === 'electrohub' || current === 'electrohub-ui')) ||
      (href === 'parking' && (current === 'parking' || current === 'parking-ui')) ||
      (href === 'garage' && (current === 'garage' || current === 'garage-ui')) ||
      href === current
    ) {
      a.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// ─── Header shadow on scroll ────────────────────────────────
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,.08)';
  } else {
    header.style.boxShadow = '';
  }
}, { passive: true });

// ─── Footer year ────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── Lazy fade-in on scroll ─────────────────────────────────
if ('IntersectionObserver' in window) {
  const fadeEls = document.querySelectorAll(
    '.skill-card, .gallery-card, .tl-item, .contact-link-card, .feature-item'
  );

  // Set initial state
  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 60 * i);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));
}

// --- Gallery cards: equal height within each grid row ---
function equalizeGalleryRows() {
  // Equalize Garage gallery cards (3-col grid)
  var garageWraps = document.querySelectorAll('.garage-mockup-grid .port-phone-wrap');
  if (garageWraps.length) {
    var maxH = 0;
    garageWraps.forEach(function(w) { w.style.height = 'auto'; });
    garageWraps.forEach(function(w) { var h = w.offsetHeight; if (h > maxH) maxH = h; });
    garageWraps.forEach(function(w) { w.style.height = maxH + 'px'; });
  }
}
window.addEventListener('load', equalizeGalleryRows);
window.addEventListener('resize', equalizeGalleryRows);
setTimeout(equalizeGalleryRows, 300);