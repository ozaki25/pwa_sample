const CACHE_NAME = 'pwa-sample-1-v1';

self.addEventListener('install', event => {
  console.log('install service worker');
});

self.addEventListener('activate', event => {
  console.log('activate service worker');
});

self.addEventListener('fetch', event => {
  console.log('intercept fatch request');
});
