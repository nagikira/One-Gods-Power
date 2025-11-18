// Basic JS: language toggle and simple helpers
const langToggle = document.getElementById('langToggle');
const yearSpan = document.getElementById('year');
const authorNameSpan = document.getElementById('authorName');

let lang = localStorage.getItem('siteLang') || 'pt';
const texts = document.querySelectorAll('[data-pt]');

function applyLang() {
  texts.forEach(el => {
    const pt = el.getAttribute('data-pt');
    const en = el.getAttribute('data-en');
    if(lang === 'en' && en) el.textContent = en;
    else if(lang === 'pt' && pt) el.textContent = pt;
  });
  // Update toggle label
  langToggle.textContent = lang === 'pt' ? 'PT / EN' : 'EN / PT';
  localStorage.setItem('siteLang', lang);
}

// init
yearSpan.textContent = new Date().getFullYear();
authorNameSpan.textContent = 'Nagi Kira';
applyLang();

langToggle.addEventListener('click', () => {
  lang = (lang === 'pt') ? 'en' : 'pt';
  applyLang();
});

function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth'});
}
