if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa_sample/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}

onload = function() {
  let deferredPrompt;
  const button = document.getElementById('install-button');

  // Chromeが出すプロンプトを抑止し退避しておく
  addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    button.disabled = false;
    return false;
  });

  // ボタンをクリックしたら退避しておいたプロンプト表示処理を実行
  button.addEventListener('click', function() {
    if(deferredPrompt !== undefined) {
      deferredPrompt.prompt();
      deferredPrompt = null;
    }
  });
}