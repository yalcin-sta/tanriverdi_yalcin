const ONBELLEK_ADI = 'smmm-ofis-v1';
const DOSYALAR = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (olay) => {
  olay.waitUntil(
    caches.open(ONBELLEK_ADI).then((onbellek) => onbellek.addAll(DOSYALAR))
  );
});

self.addEventListener('fetch', (olay) => {
  olay.respondWith(
    caches.match(olay.request).then((yanit) => yanit || fetch(olay.request))
  );
});
