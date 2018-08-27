const CACHE_NAME = 'pwa-sample';
const urlsToCache = [
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
  '/assets/js/app.e796080a.js',
  '/assets/images/1/hotreload.gif',
  '/assets/images/1/template.png',
  '/assets/images/2/hello.png',
  '/assets/images/2/reactdom.png',
  '/assets/images/3/hello.png',
  '/assets/images/3/hello2.png',
  '/assets/images/3/hello3.png',
  '/assets/images/4/counter.gif',
  '/assets/images/4/counter.png',
  '/assets/images/4/counter2.gif',
  '/assets/images/5/todo_console.png',
  '/assets/images/5/todo.png',
  '/assets/images/5/todo2.png',
  '/assets/images/5/todo3.gif',
  '/assets/images/5/todo4.png',
  '/assets/images/5/todo5.gif',
  '/assets/images/6/router.gif',
  '/assets/images/6/router2.gif',
  '/assets/images/6/router3.gif',
  '1_setup.html',
  '2_initialfile.html',
  '3_hello.html',
  '4_counter.html',
  '5_todolist.html',
  '6_routing.html',
  '7_free.html',
  '404.html',
  'index.html',
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
  console.log(event);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('exist in cache', response.url);
        return response;
      }
      console.log('not exist in cache');
      return fetch(event.request)
        .then(function(response) {
          console.log(response.url);
          return response;
        })
        .catch(console.log);
    })
  );
});
