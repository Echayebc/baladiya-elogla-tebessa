// install.js - زر بتدرج ألوان جميل
(function(){
  const style=document.createElement('style');
  style.textContent=`
  #installBox{position:fixed;bottom:70px;left:12px;right:12px;background:#fff;padding:10px 12px;border-radius:20px;display:flex;align-items:center;justify-content:space-between;z-index:999999;box-shadow:0 8px 25px rgba(0,0,0,.25);border:2px solid #eef6ff}
  #installBox .txt{color:#0e6ba8;font-weight:900;font-size:14px}
  #installBox .txt span{font-size:11px;color:#666;font-weight:400}
  #installBtn{
    background: linear-gradient(135deg, #0e6ba8 0%, #6a5cff 45%, #00d4ff 100%);
    color:#fff;border:none;padding:12px 22px;border-radius:30px;font-weight:900;font-size:15px;
    cursor:pointer;box-shadow:0 4px 15px rgba(14,107,168,.4);
    animation: shine 2.5s infinite;
  }
  @keyframes shine{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
  `;
  document.head.appendChild(style);

  let deferredPrompt;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;});

  function create(){
    if(document.getElementById('installBox')) return;
    const box=document.createElement('div');
    box.id='installBox';
    box.innerHTML=`<div class="txt">📲 بلدية العقلة<br><span>تطبيق رسمي 150 مصلحة</span></div><button id="installBtn">📥 حمّل</button>`;
    document.body.appendChild(box);

    box.querySelector('#installBtn').onclick=async()=>{
      if(deferredPrompt){
        deferredPrompt.prompt();
        const {outcome}=await deferredPrompt.userChoice;
        if(outcome==='accepted') box.remove();
        deferredPrompt=null;
      }else{
        location.href="intent://echayebc.github.io/baladiya-elogla-tebessa/index.html?v=12#Intent;scheme=https;package=com.android.chrome;end";
      }
    };
  }
  document.addEventListener('DOMContentLoaded',create);
  setTimeout(create,800);
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
})();
