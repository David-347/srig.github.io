const CACHE_NAME = "srig-cache-v2";

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/main.js",
  "./js/i18n.js",
  "./img/logo-srig.png",
  "./img/logo-srig-192.png",
  "./img/logo-srig-512.png",
  "./img/screenshot-desktop.png",
  "./img/screenshot-mobile.png",
  "./img/arquitectura.png",
  "./img/arquitectura_es.png",
  "./img/arquitectura_en.png",
  "./img/arquitectura-funcional.jpg",
  "./img/arquitectura-funcional_en.jpg",
  "./img/arquitectura-funcional_es.jpg",
  "./img/instalacion-real.jpg",
  "./img/flujo-operacion.png",
  "./img/flujo-operacion_en.png",
  "./img/flujo-operacion_es.png",
  "./img/jardin-hj.jpg"
];

/* ───────── Install ───────── */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* ───────── Activate ───────── */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

/* ───────── Fetch ───────── */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
