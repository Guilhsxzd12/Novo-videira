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
