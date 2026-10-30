(function(){
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;});
  function init(){
    const btn=document.getElementById('installBtnTop');
    if(!btn) return;
    btn.onclick=async()=>{
      if(deferredPrompt){
        deferredPrompt.prompt();
        const r=await deferredPrompt.userChoice;
        deferredPrompt=null;
      }else{
        location.href="intent://echayebc.github.io/baladiya-elogla-tebessa/index.html?v=19#Intent;scheme=https;package=com.android.chrome;end";
      }
    };
  }
  document.addEventListener('DOMContentLoaded',init);
  setTimeout(init,800);
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
})();
