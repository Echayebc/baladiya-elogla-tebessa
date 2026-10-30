const CACHE_NAME = 'baladiya-elogla-v3';
const urlsToCache = [
  'index.html',
  'manifest.json'
  // سيتم حفظ باقي الملفات تلقائيا عند زيارتها
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(res => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, res.clone());
          return res;
        });
      });
    })
  );
});
