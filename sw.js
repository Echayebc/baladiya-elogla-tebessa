self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('baladiya-v1').then(cache => {
      return cache.addAll(['index.html','masalih-data.js','manifest.json','khadar.jpg']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
