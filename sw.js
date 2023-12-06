const cacheName = "doodles";

const cacheEm = [
  "index.html",
  "sketch.js",
  "script.js",
  "styles.css",
  "/",
  "https://cdn.jsdelivr.net/npm/p5@1.8.0/lib/p5.js",
  "https://kit.fontawesome.com/df98c7d392.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheEm);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Browser is requesting", event.request);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }),
  );
});
