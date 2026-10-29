// Menu Navigation Toggle
const menu = document.getElementById('menu'), nav = document.getElementById('nav');
if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Year Dynamic Update
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// All 39+ Modules Directory Search & Filter Engine
function filterModules() {
    const query = document.getElementById('moduleSearch').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.panel');
    let found = 0;
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'flex';
            found++;
        } else {
            card.style.display = 'none';
        }
    });

    const noResult = document.getElementById('noResult');
    if (noResult) {
        noResult.style.display = found === 0 ? 'block' : 'none';
    }
}

// Category Filter Engine
function filterCategory(cat) {
    const cards = document.querySelectorAll('.panel');
    const btns = document.querySelectorAll('.cat-btn');
    btns.forEach(b => b.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW reg error:', err));
  });
}
