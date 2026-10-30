const CACHE='elogla-v8';
const FILES=['index.html','tahmil.html','manifest.json','khadar.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch',e=>{
  // لا تحجز api.github.com ولا tahmil.html
  if(e.request.url.includes('api.github.com') || e.request.url.includes('tahmil.html')) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
