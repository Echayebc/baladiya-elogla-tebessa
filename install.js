// install.js - أيقونة حمل كتطبيق في ملف منفصل
(function(){
  // نزيد الستايل تاع الزر
  const style = document.createElement('style');
  style.textContent = `
  #installBtn{display:none;position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#0e6ba8;color:#fff;padding:14px 26px;border-radius:30px;font-weight:900;font-size:16px;box-shadow:0 6px 18px rgba(0,0,0,.35);border:2px solid #fff;z-index:9999;cursor:pointer}
  #installBtn.show{display:flex;align-items:center;gap:8px}
  `;
  document.head.appendChild(style);

  // نزيد الزر في الصفحة
  const btn = document.createElement('button');
  btn.id = 'installBtn';
  btn.innerHTML = '📥 حمّل كتطبيق';
  document.addEventListener('DOMContentLoaded', ()=>{
    document.body.appendChild(btn);
  });

  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.classList.add('show');
  });

  btn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      btn.classList.remove('show');
    }
    deferredPrompt = null;
  });

  window.addEventListener('appinstalled', () => {
    btn.classList.remove('show');
  });

  // تسجيل service worker
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
  }
})();
