/**
 * NFDI4Objects Core JavaScript Bundle
 * Kombiniert Navigation und Accessibility Features
 */

// ========================================
// NAVIGATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 40);
  });

  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('#primary-menu');
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('active', !expanded);
    });
  }

  const submenuLinks = document.querySelectorAll('.nav-item > a[aria-haspopup="true"]');
  submenuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const expanded = link.getAttribute('aria-expanded') === 'true';
      link.setAttribute('aria-expanded', !expanded);
      const submenu = link.closest('li').querySelector('.submenu');
      if (submenu) submenu.classList.toggle('active', !expanded);
    });
  });
});

// Search Toggle
document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.querySelector('.search-toggle');
  const searchForm = document.getElementById('search-form');
  if (!searchToggle || !searchForm) return;

  searchToggle.addEventListener('click', () => {
    const expanded = searchToggle.getAttribute('aria-expanded') === 'true';
    searchToggle.setAttribute('aria-expanded', !expanded);
    searchForm.classList.toggle('hidden', expanded);
    if (!expanded) {
      setTimeout(() => {
        const input = searchForm.querySelector('input');
        if (input) input.focus();
      }, 100);
    }
  });

  document.addEventListener('click', e => {
    if (!searchForm.contains(e.target) && !searchToggle.contains(e.target)) {
      searchToggle.setAttribute('aria-expanded', 'false');
      searchForm.classList.add('hidden');
    }
  });
});

// Automatically add target="_blank" and rel="noopener noreferrer" to all external links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Check if link is external (doesn't contain current hostname)
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

// ========================================
// ACCESSIBILITY
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // ESC-Taste schließt aktive Menüs & Suche
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.submenu.active').forEach(s => s.classList.remove('active'));
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.getElementById('search-form');
    if (searchForm && !searchForm.classList.contains('hidden')) {
      searchForm.classList.add('hidden');
      searchToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth-Scroll für interne Links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });

  // Lazy-Loading für Bilder
  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          obs.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  } else {
    lazyImages.forEach(img => (img.src = img.dataset.src));
  }

  // Zufälliges Hero-Bild setzen (Bilder aus data-Attribut lesen)
  const heroSection = document.getElementById('hero-section');
  if (heroSection) {
    try {
      const imagesData = heroSection.getAttribute('data-hero-images');
      const baseUrl = heroSection.getAttribute('data-baseurl') || '';
      if (imagesData) {
        const heroImages = JSON.parse(imagesData);
        if (heroImages && heroImages.length > 0) {
          const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
          const imagePath = randomImage.path.startsWith('/') ? baseUrl + randomImage.path : randomImage.path;
          heroSection.style.backgroundImage = `url('${imagePath}')`;
          heroSection.style.backgroundSize = 'cover';
          heroSection.style.backgroundPosition = 'center';
          heroSection.style.backgroundBlendMode = 'overlay';
          // Optional: Alt-Text für Barrierefreiheit setzen
          heroSection.setAttribute('aria-label', randomImage.alt || 'Hero-Hintergrundbild');
        }
      }
    } catch (e) {
      console.error('Fehler beim Laden der Hero-Bilder:', e);
    }
  }
});
