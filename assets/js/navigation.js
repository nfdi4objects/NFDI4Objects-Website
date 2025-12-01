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

//// Mockup
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
