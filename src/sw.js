var CACHE_NAME = 'pwa-sample';
var urlsToCache = [
  '/assets/css/0.styles.7775a0d8.css',
  '/assets/js/2.cda51ec0.js',
  '/assets/js/2.cda51ec0.js',
  '/assets/js/3.9e80b1cb.js',
  '/assets/js/4.e8f43cf9.js',
  '/assets/js/5.9742906c.js',
  '/assets/js/6.45d077d6.js',
  '/assets/js/7.3d93238c.js',
  '/assets/js/8.04203a0c.js',
  '/assets/js/9.8c068cc8.js',
  '/assets/js/10.a7cb3a8f.js',
  '/assets/js/11.500572b9.js',
  '/assets/js/app.e796080a.js'
];

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
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});
