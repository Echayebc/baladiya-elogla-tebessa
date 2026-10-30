const CACHE='elogla-v5';
const FILES=['index.html','manifest.json','khadar.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('tahmil.html')) return; // لا تحجز صفحة التحميل
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
