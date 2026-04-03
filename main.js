// =============================================
//   TANISH ENTERPRISES — MAIN JS
// =============================================

// Mobile nav toggle
function toggleMenu() {
  let mobileNav = document.querySelector('.mobile-nav');
  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="pricing.html">Pricing</a>
      <a href="contact.html">Contact</a>
    `;
    document.body.appendChild(mobileNav);
  }
  mobileNav.classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    nav.style.padding = '0.75rem 3rem';
    nav.style.borderBottomColor = '#2a2a2a';
  } else {
    nav.style.padding = '1.25rem 3rem';
  }
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  '.service-card, .port-card, .pf-card, .team-card, .value-card, .about-card, .price-card, .service-detail-card, .contact-item, .mv-block'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// FAQ toggle
function toggleFAQ(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-a');
  const allBtns = document.querySelectorAll('.faq-q');
  const allAnswers = document.querySelectorAll('.faq-a');

  allBtns.forEach(b => { if (b !== btn) b.classList.remove('open'); });
  allAnswers.forEach(a => { if (a !== answer) a.classList.remove('open'); });

  btn.classList.toggle('open');
  answer.classList.toggle('open');
}

// Portfolio filter
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.pf-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Contact form submit
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  if (success) {
    success.classList.add('show');
    e.target.reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  }
}

// Smooth cursor highlight on nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transition = 'color 0.15s';
  });
});

// Active nav detection
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
  else link.classList.remove('active');
});
