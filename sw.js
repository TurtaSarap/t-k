self.addEventListener("install", event => {
    self.skipWaiting();
});

self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
});
const CACHE_NAME = "love-app-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/manifest.json",
    "/favicon.ico"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});