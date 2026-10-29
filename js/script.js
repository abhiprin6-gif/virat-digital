const menu = document.getElementById('menu'), nav = document.getElementById('nav');
if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
        menu.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const yearEl = document.getElementById('year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

const translations = {
    hi: {
        heroH1: '<span class="saffron">भारत का</span><br><span class="mint">डिजिटल प्लेटफ़ॉर्म</span>',
        heroSub: "सोच से सच तक",
        heroDesc: "VIRAT DIGITAL ECOSYSTEM — भारत का अपना डिजिटल इकोसिस्टम, जहाँ आपकी कल्पनाएँ, काम और नए विचार एक ही प्लेटफ़ॉर्म पर जुड़ते हैं।",
        btnStart: "🚀 शुरुआत करें →",
        btnExplore: "▦ पैनल देखें"
    },
    en: {
        heroH1: '<span class="saffron">Bharat\'s Own</span><br><span class="mint">Digital Platform</span>',
        heroSub: "From Vision to Reality",
        heroDesc: "VIRAT DIGITAL ECOSYSTEM — India\'s own digital ecosystem uniting your ideas, work, and innovation on a single platform.",
        btnStart: "🚀 Get Started →",
        btnExplore: "▦ Explore Panels"
    }
};

let currentLang = 'hi';
function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    const t = translations[currentLang];
    const elH1 = document.querySelector('.hero h1'); if (elH1) elH1.innerHTML = t.heroH1;
    const elH2 = document.querySelector('.hero h2'); if (elH2) elH2.innerHTML = t.heroSub;
    const elIntro = document.querySelector('.hero .intro'); if (elIntro) elIntro.innerHTML = t.heroDesc;
    const elBtnStart = document.querySelector('.hero .btn.primary'); if (elBtnStart) elBtnStart.innerHTML = t.btnStart;
    const elBtnExplore = document.querySelector('.hero .btn:not(.primary)'); if (elBtnExplore) elBtnExplore.innerHTML = t.btnExplore;
    const btnLang = document.getElementById('lang-btn'); if (btnLang) btnLang.textContent = currentLang === 'hi' ? '🌐 English' : '🌐 हिंदी';
}

document.addEventListener('DOMContentLoaded', () => {
    const btnLang = document.getElementById('lang-btn');
    if (btnLang) btnLang.addEventListener('click', toggleLanguage);
});
