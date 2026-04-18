const CACHE = 'proa-pocket-v6';
const ASSETS = [
  '/',
  '/index.html',
  '/renderer.js',
  '/styles.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/flowcharts/iia.js',
  '/flowcharts/ppb.js',
  '/flowcharts/pa.js',
  '/flowcharts/pie.js',
  '/flowcharts/nac.js',
  '/flowcharts/nih.js',
  '/flowcharts/artritis.js',
  '/flowcharts/osteo_f.js',
  '/flowcharts/osteo_v.js',
  '/flowcharts/nav.js',
  '/flowcharts/itu.js',
  '/flowcharts/meas.js',
  '/flowcharts/endo.js',
  '/flowcharts/dcei.js',
  '/flowcharts/cvc.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isAsset = ASSETS.some(a => url.pathname === a || url.pathname.endsWith(a));

  if (isAsset) {
    // Stale-while-revalidate: sirve cache inmediatamente y actualiza en fondo
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const fetchPromise = fetch(e.request).then(response => {
            if (response.ok) cache.put(e.request, response.clone());
            return response;
          }).catch(() => cached);
          return cached || fetchPromise;
        })
      )
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
