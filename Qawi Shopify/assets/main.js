/* ============================================================
   QAWI — MAIN JAVASCRIPT
   Navigation · Scroll · Reveal · Cart Drawer · Animations
   ============================================================ */

'use strict';

// ── DOM Ready ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursorGlow();
  initScrollReveal();
  initStickyHeader();
  initMobileMenu();
  initCartDrawer();
  initTicker();
  initProductCards();
  initSmoothScroll();
  initStatsCounter();
  initNewsletterForm();
  initCategoryCards();
});

// ── Page Loader ────────────────────────────────────────────
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loaded');
      document.body.classList.add('page-enter');
    }, 600);
  });
}

// ── Cursor Glow ────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animate);
  };
  animate();
}

// ── Scroll Reveal (Intersection Observer) ─────────────────
function initScrollReveal() {
  const options = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  targets.forEach((el) => observer.observe(el));
}

// ── Sticky Header ──────────────────────────────────────────
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const announcementBar = document.querySelector('.announcement-bar');
  if (!header) return;

  let lastScrollY = window.scrollY;
  const announceHeight = announcementBar ? announcementBar.offsetHeight : 0;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > announceHeight + 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight + announceHeight) {
      // Scrolling down
      document.body.classList.remove('scroll-up');
      document.body.classList.add('scroll-down');
    } else {
      // Scrolling up
      document.body.classList.remove('scroll-down');
      document.body.classList.add('scroll-up');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

// ── Mobile Menu ────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
  if (!hamburger || !mobileMenu) return;

  let isOpen = false;

  hamburger.addEventListener('click', () => {
    isOpen = !isOpen;
    hamburger.classList.toggle('open', isOpen);
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      isOpen = false;
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Cart Drawer ────────────────────────────────────────────
function initCartDrawer() {
  const overlay   = document.querySelector('.cart-overlay');
  const drawer    = document.querySelector('.cart-drawer');
  const openBtns  = document.querySelectorAll('[data-cart-open]');
  const closeBtns = document.querySelectorAll('[data-cart-close]');
  if (!drawer) return;

  const openCart = () => {
    overlay?.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeCart = () => {
    overlay?.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  openBtns.forEach((btn) => btn.addEventListener('click', openCart));
  closeBtns.forEach((btn) => btn.addEventListener('click', closeCart));
  overlay?.addEventListener('click', closeCart);

  // Quick add buttons
  document.querySelectorAll('.product-card__quick-add').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const name = card?.querySelector('.product-card__name')?.textContent || 'Item';
      const price = card?.querySelector('.price-current')?.textContent || '';
      addToCart(name, price, card);
    });
  });
}

function addToCart(name, price, cardEl) {
  const cartBody  = document.querySelector('.cart-drawer__body');
  const cartEmpty = document.querySelector('.cart-empty');
  const cartCount = document.querySelector('.cart-count');
  const cartSubtotal = document.querySelector('.cart-subtotal__value');
  const drawer    = document.querySelector('.cart-drawer');
  const overlay   = document.querySelector('.cart-overlay');

  if (!cartBody) return;

  // Remove empty state
  if (cartEmpty) cartEmpty.style.display = 'none';

  // Create cart item
  const item = document.createElement('div');
  item.className = 'cart-item';
  item.innerHTML = `
    <div class="cart-item__img shimmer"></div>
    <div class="cart-item__info">
      <div class="cart-item__name">${name}</div>
      <div class="cart-item__variant">M · Black</div>
      <div class="cart-item__price">${price}</div>
    </div>
    <button onclick="this.closest('.cart-item').remove(); updateCart();" style="color:var(--clr-muted);font-size:1.2rem;padding:var(--sp-2);">×</button>
  `;
  cartBody.appendChild(item);

  // Update count
  window._cartCount = (window._cartCount || 0) + 1;
  if (cartCount) {
    cartCount.textContent = window._cartCount;
    cartCount.style.display = 'flex';
  }

  // Open drawer
  overlay?.classList.add('open');
  drawer?.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Update subtotal
  updateCart();
}

function updateCart() {
  const items = document.querySelectorAll('.cart-item');
  const cartSubtotal = document.querySelector('.cart-subtotal__value');
  const cartEmpty = document.querySelector('.cart-empty');
  const cartCount = document.querySelector('.cart-count');

  window._cartCount = items.length;
  if (cartCount) {
    cartCount.textContent = window._cartCount || 0;
    cartCount.style.display = window._cartCount > 0 ? 'flex' : 'none';
  }
  if (cartEmpty && items.length === 0) {
    cartEmpty.style.display = 'block';
  }

  // Fake subtotal calculation
  if (cartSubtotal) {
    const prices = [...items].map(item => {
      const priceEl = item.querySelector('.cart-item__price');
      return priceEl ? parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) || 0 : 0;
    });
    const total = prices.reduce((a, b) => a + b, 0);
    cartSubtotal.textContent = '$' + total.toFixed(2);
  }
}

// ── Announcement Ticker ────────────────────────────────────
function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  // Duplicate for seamless loop
  const clone = track.cloneNode(true);
  track.parentNode.appendChild(clone);
}

// ── Product Cards ──────────────────────────────────────────
function initProductCards() {
  // Swatch color selection
  document.querySelectorAll('.product-card__swatches').forEach((swatches) => {
    swatches.querySelectorAll('.swatch').forEach((swatch) => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        swatches.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
      });
    });
  });

  // Card click navigation (demo)
  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.product-card__name')?.textContent;
      console.log(`Navigate to product: ${name}`);
    });
  });
}

// ── Smooth Scroll ──────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Stats Counter Animation ────────────────────────────────
function initStatsCounter() {
  const stats = document.querySelectorAll('[data-count]');
  if (!stats.length) return;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        animateCount(el, target, prefix, suffix);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach((stat) => countObserver.observe(stat));
}

function animateCount(el, target, prefix, suffix) {
  const duration = 1800;
  const startTime = performance.now();
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(easeOutQuart(progress) * target);
    el.textContent = prefix + value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ── Newsletter ─────────────────────────────────────────────
function initNewsletterForm() {
  document.querySelectorAll('.newsletter-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn   = form.querySelector('button[type="submit"]');

      if (!input?.value) return;

      // Simple success state
      input.value = '';
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      btn.style.background = 'var(--clr-accent)';
      btn.style.color = 'var(--clr-bg)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    });
  });
}

// ── Category Cards Tilt ────────────────────────────────────
function initCategoryCards() {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
      card.style.transition = 'transform 0.5s ease';
    });
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

// ── Expose updateCart globally ─────────────────────────────
window.updateCart = updateCart;
