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
 const initialize = (scope = document) => scope.querySelectorAll('[data-country-carousel]').forEach(section => {
  if (section.dataset.ready) return;
  section.dataset.ready = 'true';
  const track = section.querySelector('.zip-country-track');
  const prev = section.querySelector('[data-country-prev]');
  const next = section.querySelector('[data-country-next]');
  const update = () => { prev.disabled = track.scrollLeft < 2; next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2; };
  const move = direction => track.scrollBy({left: direction * Math.max(180, track.clientWidth * .75), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  prev.addEventListener('click', () => move(-1)); next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, {passive:true});
  new ResizeObserver(update).observe(track); new MutationObserver(update).observe(track, {childList:true}); update();
 });
 if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initialize()); else initialize();
 document.addEventListener('shopify:section:load', event => initialize(event.target));
})();

(() => {
 const initialize = (scope=document) => scope.querySelectorAll('[data-announcements]').forEach(el => {
  if(el.dataset.ready)return;el.dataset.ready='true';
  const items=[...el.querySelectorAll('.zip-announcement')], button=el.querySelector('[data-announcement-pause]');
  const media=matchMedia('(prefers-reduced-motion: reduce)');let index=0,paused=false,timer;
  const start=()=>{clearInterval(timer);if(paused||media.matches||document.hidden)return;timer=setInterval(()=>{if(!el.isConnected){clearInterval(timer);return;}items[index].hidden=true;index=(index+1)%items.length;items[index].hidden=false;},4200);};
  button.addEventListener('click',()=>{paused=!paused;button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'Retomar mensagens':'Pausar mensagens');button.textContent=paused?'▶':'Ⅱ';start();});
  el.addEventListener('mouseenter',()=>clearInterval(timer));el.addEventListener('mouseleave',start);el.addEventListener('focusin',()=>clearInterval(timer));el.addEventListener('focusout',start);document.addEventListener('visibilitychange',start);media.addEventListener('change',start);start();
 });
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>initialize());else initialize();document.addEventListener('shopify:section:load',e=>initialize(e.target));
})();
