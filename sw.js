const cacheName = 'v1-nazare';
const assets = [
  './',
  './index.html',
    './inicio.html',
  './sumario.html',
  './manifest.json',
  './1.html', './2.html', './3.html', './4.html', './5.html',
  './6.html', './7.html', './8.html', './9.html', './10.html',
  './11.html', './12.html', './13.html', './14.html', './15.html',
  './16.html', './17.html', './18.html', './19.html', './20.html',
  './capa.png', './2-img.png', './3-img.png', './4-img.png', './5-img.png',
  './6-img.png', './7-img.png', './8-img.png', './9-img.png', './10-img.png',
  './11-img.png', './12-img.png', './13-img.png', './14-img.png', './15-img.png',
  './16-img.png', './17-img.png', './18-img.png', './19-img.png', './20-img.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});