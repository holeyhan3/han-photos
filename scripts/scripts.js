/* =============================
   THEME TOGGLE & AUTO DARK MODE
=============================== */
(() => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const darkClass = 'dark';

  // Initialize theme based on saved or system preference
  const savedTheme = localStorage.getItem('theme');
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    body.classList.add(darkClass);
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }

  themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle(darkClass);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
  });
})();

/* =============================
   LIGHTBOX WITH ACCESSIBILITY
=============================== */
(() => {
  const gallery = document.querySelector('.gallery');
  const lightbox = document.getElementById('lightbox');
  const imgElem = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('closeBtn');
  let lastFocusedElement = null;

  if (!gallery || !lightbox || !imgElem || !closeBtn) return;

  function showLightbox(src, alt) {
    imgElem.src = src;
    imgElem.alt = alt || '';
    caption.textContent = alt || '';
    lightbox.hidden = false;
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    imgElem.src = '';
    caption.textContent = '';
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  // Trap focus inside the lightbox for accessibility
  function trapFocus(e) {
    const focusable = lightbox.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }

  // Open lightbox on image click or keyboard activation
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return;
    lastFocusedElement = document.activeElement;
    const src = e.target.dataset.lightboxSrc || e.target.src;
    showLightbox(src, e.target.alt);
  });

  gallery.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName === 'IMG') {
      e.preventDefault();
      lastFocusedElement = document.activeElement;
      const src = e.target.dataset.lightboxSrc || e.target.src;
      showLightbox(src, e.target.alt);
    }
  });

  // Close lightbox handlers
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
    if (e.key === 'Tab' && !lightbox.hidden) {
      trapFocus(e);
    }
  });
})();

/* =============================
   LAZY LOADING POLYFILL
=============================== */
(() => {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading; nothing to do
    return;
  }

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('loading');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => observer.observe(img));
  } else {
    // Fallback: load all lazy images immediately
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute('loading');
    });
  }
})();

/* =============================
   CONTACT FORM VALIDATION (basic example)
=============================== */
(() => {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');
    let valid = true;

    if (!email.value || !email.value.includes('@')) {
      alert('Please enter a valid email.');
      email.focus();
      valid = false;
    } else if (!message.value.trim()) {
      alert('Please enter your message.');
      message.focus();
      valid = false;
    }

    if (!valid) e.preventDefault();
  });
})();

/* =============================
   ERROR LOGGING (basic example)
=============================== */
window.addEventListener('error', (event) => {
  console.error('JS Error captured:', event.message, event.filename, event.lineno);
  // Optionally send errors to server here
  /*
  fetch('/log-js-error', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack || ''
    })
  });
  */
});