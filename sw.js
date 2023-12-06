const cacheName = "doodles";

const cacheEm = [
  "index.html",
  "sketch.js",
  "script.js",
  "styles.css",
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
