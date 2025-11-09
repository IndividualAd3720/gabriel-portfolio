
// Theme toggle (dark by default)
const toggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('theme');
if(stored){ document.documentElement.dataset.theme = stored; }
toggle?.addEventListener('click', () => {
  const cur = document.documentElement.dataset.theme || (prefersDark ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});

// Static contact form -> mailto fallback
const form = document.getElementById('contact-form');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Portfolio Inquiry from ' + data.get('name'));
  const body = encodeURIComponent(data.get('message') + '\n\n— ' + data.get('name') + ' (' + data.get('email') + ')');
  window.location.href = `mailto:${'gabrielmagan10@gmail.com'}?subject=${subject}&body=${body}`;
});

AOS.init({
  duration: 800,
  once: true,
});
