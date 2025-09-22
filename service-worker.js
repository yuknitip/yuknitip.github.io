const CACHE_NAME = "nitip-v20";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/logoapk192.png",
  "/logonitip.png",
  "/nitipapa.png",
  "/nitipmakan.png",
  "/nitipbarang.png",
  "/nitipbelanja.png",
  "/manifest.json"
];

// Cache file saat install pertama kali
self.addEventListener("install", event => {
  self.skipWaiting(); // langsung aktif
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Hapus cache lama saat activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

// Strategi Network First
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone()); // simpan versi terbaru
          return networkResponse;
        });
      })
      .catch(() => {
        return caches.match(event.request); // fallback ke cache jika offline
      })
  );
});
