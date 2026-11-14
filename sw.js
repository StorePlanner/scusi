const CACHE_NAME = 'scusi-conad-v3.2';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css?v=3.2',
    './script.js?v=3.2',
    './manifest.json',
    './conad-symbol.svg',
    './conad-hero.png',
    './icon.svg',
    './icon-192.png',
    './icon-512.png',
    './qr-scusi.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request, { ignoreSearch: false }).then((cached) => {
            if (cached) return cached;
            return fetch(event.request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request, { ignoreSearch: true }) || caches.match('./index.html'));
        })
    );
});
