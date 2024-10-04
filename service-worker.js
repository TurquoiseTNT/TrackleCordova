const CACHE_NAME = 'trackle-cache-v1';
const urlsToCache = [
  '/',
  '/home.html',
  '/path/to/your/css/file.css',
  '/path/to/your/js/file.js',
  'https://jamiehaywood.com/loadingroundel/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
