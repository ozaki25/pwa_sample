const CACHE_NAME = 'pwa-sample-v3';
const urlsToCache = [
  '/pwa_sample/assets/css/0.styles.css',
  '/pwa_sample/assets/js/2.js',
  '/pwa_sample/assets/js/3.js',
  '/pwa_sample/assets/js/4.js',
  '/pwa_sample/assets/js/5.js',
  '/pwa_sample/assets/js/6.js',
  '/pwa_sample/assets/js/7.js',
  '/pwa_sample/assets/js/8.js',
  '/pwa_sample/assets/js/9.js',
  '/pwa_sample/assets/js/10.js',
  '/pwa_sample/assets/js/11.js',
  '/pwa_sample/assets/js/app.js',
  '/pwa_sample/assets/js/main.js',
  '/pwa_sample/assets/images/1/hotreload.gif',
  '/pwa_sample/assets/images/1/template.png',
  '/pwa_sample/assets/images/2/hello.png',
  '/pwa_sample/assets/images/2/reactdom.png',
  '/pwa_sample/assets/images/3/hello.png',
  '/pwa_sample/assets/images/3/hello2.png',
  '/pwa_sample/assets/images/3/hello3.png',
  '/pwa_sample/assets/images/4/counter.gif',
  '/pwa_sample/assets/images/4/counter.png',
  '/pwa_sample/assets/images/4/counter2.gif',
  '/pwa_sample/assets/images/5/todo_console.png',
  '/pwa_sample/assets/images/5/todo.png',
  '/pwa_sample/assets/images/5/todo2.png',
  '/pwa_sample/assets/images/5/todo3.gif',
  '/pwa_sample/assets/images/5/todo4.png',
  '/pwa_sample/assets/images/5/todo5.gif',
  '/pwa_sample/assets/images/6/router.gif',
  '/pwa_sample/assets/images/6/router2.gif',
  '/pwa_sample/assets/images/6/router3.gif',
  '/pwa_sample/assets/img/search.83621669.svg',
  '/pwa_sample/1_setup.html',
  '/pwa_sample/2_initialfile.html',
  '/pwa_sample/3_hello.html',
  '/pwa_sample/4_counter.html',
  '/pwa_sample/5_todolist.html',
  '/pwa_sample/6_routing.html',
  '/pwa_sample/7_free.html',
  '/pwa_sample/404.html',
  '/pwa_sample/index.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(console.log)
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if ([CACHE_NAME].indexOf(cacheName) === -1) {
              console.log('delete cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        )
      )
      .catch(console.log)
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('exist in cache', response.url);
        return response;
      } else {
        console.log('not exist in cache');
        return fetch(event.request).catch(console.log);
      }
    })
  );
});
