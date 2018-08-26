var CACHE_NAME = 'pwa-sample';
var urlsToCache = ['/', '/assets/css/0.styles.7775a0d8.css'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('exist in cache', response.url);
        return response;
      }
      console.log('not exist in cache');
      return fetch(event.request);
    })
  );
});
