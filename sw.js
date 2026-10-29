const CACHE_NAME = 'virat-cache-v1';
const assets = ['/', '/index.html', '/css/style.css', '/js/script.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
