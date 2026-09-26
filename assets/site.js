/* ---- Tabs chương trình: click + phím mũi tên ---- */
(function(){
  const tabs = Array.from(document.querySelectorAll('.tab'));
  if(!tabs.length) return;
  function select(tab){
    tabs.forEach(t=>{
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click', ()=>select(tab));
    tab.addEventListener('keydown', e=>{
      if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length-1)) % tabs.length];
      select(next); next.focus(); e.preventDefault();
    });
  });
  select(tabs[0]);
})();

/* ---- Hero: tải được ảnh mới bật lớp phủ và tắt dãy núi SVG ---- */
(function(){
  const photo = document.querySelector('.hero-photo');
  if(!photo) return;
  const on = ()=> photo.closest('.hero').classList.add('has-photo');
  if(photo.complete && photo.naturalWidth) on();
  else photo.addEventListener('load', on);
})();

/* ---- Bản đồ: đổi điểm xuất phát ---- */
(function(){
  const btns = document.querySelectorAll('.route-btn');
  const frame = document.querySelector('.route-map iframe');
  const open = document.querySelector('.route-open');
  if(!frame) return;
  btns.forEach(b=>b.addEventListener('click', ()=>{
    btns.forEach(x=>x.setAttribute('aria-pressed', x===b ? 'true' : 'false'));
    frame.src = b.dataset.embed;
    frame.title = 'Driving directions from ' + b.textContent.trim().toLowerCase() + ' to Tam Dao';
    open.href = b.dataset.link;
  }));
})();

/* ---- Logo/ảnh chưa có file thì hiện khung nét đứt thay vì icon vỡ ---- */
document.querySelectorAll('.logo img, .portrait img, .hero-photo').forEach(img=>{
  const onFail = ()=>{
    const host = img.parentElement;
    // chưa có file trong assets/ thì thử link dự phòng một lần
    if(img.dataset.fallback){
      const url = img.dataset.fallback;
      delete img.dataset.fallback;
      img.src = url;
      return;
    }
    // hero: bỏ ảnh đi, để lộ nền gradient + núi SVG
    if(img.classList.contains('hero-photo')){ img.remove(); return; }
    if(host.classList.contains('portrait')){
      img.remove();
      host.textContent = 'Photo to come';
    }else{
      const box = document.createElement('span');
      box.className = 'logo-slot';
      box.textContent = host.dataset.name || 'Logo';
      img.replaceWith(box);
    }
  };
  img.addEventListener('error', onFail);
  // script nằm cuối <body>: ảnh có thể đã lỗi trước khi listener được gắn
  if(img.complete && img.naturalWidth === 0) onFail();
});
