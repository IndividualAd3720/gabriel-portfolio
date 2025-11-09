// -------------------------------
// 1. Theme Toggle (Dark / Light)
// -------------------------------
const toggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme');

if (stored) {
  document.documentElement.dataset.theme = stored;
} else {
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}

toggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});


// -------------------------------
// 2. Static Contact Form (mailto)
// -------------------------------
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Portfolio Inquiry from ' + data.get('name'));
  const body = encodeURIComponent(
    data.get('message') + '\n\n— ' + data.get('name') + ' (' + data.get('email') + ')'
  );
  window.location.href = `mailto:gabrielmagan10@gmail.com?subject=${subject}&body=${body}`;
});


// -------------------------------
// 3. AOS (Scroll Animations)
// -------------------------------
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out-cubic',
});


// -------------------------------
// 4. Smooth Scroll for Anchor Links
// -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// -------------------------------
// 5. Hero Parallax Movement Effect
// -------------------------------
const hero = document.querySelector('.hero-art img');
window.addEventListener('mousemove', (e) => {
  if (!hero) return;
  const x = (window.innerWidth - e.pageX) / 90;
  const y = (window.innerHeight - e.pageY) / 90;
  hero.style.transform = `translate(${x}px, ${y}px)`;
});


// -------------------------------
// 6. Floating Glow Cursor (Sexy glow effect)
// -------------------------------
const glow = document.createElement('div');
glow.className = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});


// -------------------------------
// 7. Fade-In on Page Load
// -------------------------------
document.body.classList.add('fade-ready');

setTimeout(() => {
  document.body.classList.add('fade-in');
}, 50);

const avatar = document.querySelector('.hero-art img');
window.addEventListener('mousemove', e => {
  if (!avatar) return;
  const x = (window.innerWidth - e.pageX) / 120;
  const y = (window.innerHeight - e.pageY) / 120;
  avatar.style.transform = `translate(${x}px, ${y}px)`;
});

// ---- PARTICLE BACKGROUND (Improved) ----
function createParticles() {
  const container = document.getElementById("particles");
  const count = 70; // Increase for more particles

  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    const size = Math.random() * 12 + 6;  // 6–18px glowing bubbles
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = Math.random() * window.innerHeight + "px";

    p.style.animationDuration = 10 + Math.random() * 14 + "s";
    p.style.animationDelay = Math.random() * 6 + "s";

    container.appendChild(p);
  }
}

createParticles();
