(() => {
  const initialize = (scope = document) => {
    scope.querySelectorAll('[data-banner-slider]').forEach(slider => {
      if (slider.dataset.ready) return;
      slider.dataset.ready = 'true';
      const slides = [...slider.querySelectorAll('[data-banner-slide]')];
      const dots = [...slider.querySelectorAll('[data-banner-dot]')];
      const pause = slider.querySelector('[data-banner-pause]');
      if (slides.length < 2) return;
      let index = 0, timer, paused = false;
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (pause && (reduced || slider.dataset.autoplay !== 'true')) pause.hidden = true;
      const show = number => {
        index = (number + slides.length) % slides.length;
        slides.forEach((slide, i) => { slide.hidden = i !== index; });
        dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === index)));
      };
      const stop = () => clearInterval(timer);
      const start = () => {
        stop();
        if (slider.dataset.autoplay === 'true' && !paused && !reduced && !document.hidden) timer = setInterval(() => {
          if (!slider.isConnected) { stop(); return; }
          show(index + 1);
        }, 6000);
      };
      slider.querySelector('[data-banner-next]')?.addEventListener('click', () => { show(index + 1); start(); });
      slider.querySelector('[data-banner-previous]')?.addEventListener('click', () => { show(index - 1); start(); });
      dots.forEach(dot => dot.addEventListener('click', () => { show(Number(dot.dataset.bannerDot)); start(); }));
      pause?.addEventListener('click', () => {
        paused = !paused;
        pause.setAttribute('aria-pressed', String(paused));
        pause.setAttribute('aria-label', paused ? 'Retomar banners' : 'Pausar banners');
        pause.textContent = paused ? '▶' : 'Ⅱ';
        start();
      });
      slider.addEventListener('mouseenter', stop);
      slider.addEventListener('mouseleave', start);
      slider.addEventListener('focusin', stop);
      slider.addEventListener('focusout', event => { if (!slider.contains(event.relatedTarget)) start(); });
      document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
      show(0); start();
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initialize()); else initialize();
  document.addEventListener('shopify:section:load', event => initialize(event.target));
})();
// Favoritos locais: sem depender dos serviços da loja de referência.
(() => {
  const key = 'videira-favorites-v1';
  let favorites = [];
  try { const saved = JSON.parse(localStorage.getItem(key) || '[]'); if(Array.isArray(saved)) favorites=saved.filter(p=>p&&typeof p.id==='string'&&typeof p.title==='string'&&typeof p.url==='string'&&p.url.startsWith('/products/')).slice(0,100); } catch {}
  const update = () => document.querySelectorAll('[data-favorite]').forEach(button => button.setAttribute('aria-pressed',String(favorites.some(p=>p.id===button.dataset.productKey))));
  const persist = () => { try { localStorage.setItem(key,JSON.stringify(favorites)); } catch {} update(); };
  const render = () => {
    const target=document.querySelector('[data-wishlist-items]');if(!target)return;
    target.replaceChildren();
    if(!favorites.length){const p=document.createElement('p');p.textContent='Toque no coração dos produtos para salvar seus vinhos favoritos.';target.append(p);return;}
    favorites.forEach(item=>{const row=document.createElement('div'),a=document.createElement('a'),remove=document.createElement('button');a.href=item.url;a.textContent=item.title;remove.type='button';remove.textContent='Remover';remove.setAttribute('aria-label','Remover '+item.title);remove.addEventListener('click',()=>{favorites=favorites.filter(p=>p.id!==item.id);persist();render();});row.append(a,remove);target.append(row);});
  };
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-favorite]');
    if(button){const id=button.dataset.productKey;favorites=favorites.some(p=>p.id===id)?favorites.filter(p=>p.id!==id):[...favorites,{id,title:button.dataset.favoriteTitle,url:button.dataset.favoriteUrl}].slice(-100);persist();}
    if(event.target.closest('[data-wishlist-open]')){const dialog=document.querySelector('[data-wishlist-dialog]');if(dialog&&!dialog.open){render();dialog.showModal();}}
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update);else update();
  document.addEventListener('shopify:section:load',update);
})();
(() => {
 const media=matchMedia('(max-width:760px)');
 const setFooter=()=>document.querySelectorAll('.zip-footer-group').forEach(group=>group.open=!media.matches);
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setFooter);else setFooter();
 media.addEventListener('change',setFooter);
 document.addEventListener('shopify:section:load',setFooter);
})();
