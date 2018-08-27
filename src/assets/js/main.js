if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa_sample/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}


let deferredPrompt;

addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-button').disabled = false;
  return false;
});

document.getElementById('install-button').addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    deferredPrompt.prompt();
    deferredPrompt = null;
  }
});