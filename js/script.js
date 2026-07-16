// ---------- Mobile nav ----------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // ---------- Dark mode toggle ----------
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  function setTheme(mode){
    root.setAttribute('data-theme', mode);
    try { window.__theme = mode; } catch(e) {}
  }
  // default: respect system preference, in-memory only (no localStorage per artifact rules)
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ---------- Contact form (front-end only demo) ----------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';
    setTimeout(() => {
      status.textContent = '✓ Message sent. I\'ll get back to you within 48 hours.';
      form.reset();
    }, 700);
  });

  // ---------- Skill bar animation on scroll ----------
  const bars = document.querySelectorAll('.bar-fill');
  const revealEls = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        if (entry.target.classList.contains('bar-fill')){
          entry.target.style.width = entry.target.dataset.pct + '%';
        }
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(b => io.observe(b));
  revealEls.forEach(el => io.observe(el));