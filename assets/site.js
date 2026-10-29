(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.progress-line');
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.mobile-panel');
  const toast = document.querySelector('.toast');
  let toastTimer;

  function setMenu(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    panel.classList.toggle('open', open);
  }
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  panel?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => { if (panel?.classList.contains('open') && !panel.contains(e.target) && !toggle?.contains(e.target)) setMenu(false); });

  function scrollUpdate() {
    header?.classList.toggle('scrolled', window.scrollY > 12);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', scrollUpdate, {passive:true});
  window.addEventListener('resize', () => { if (window.innerWidth > 800) setMenu(false); scrollUpdate(); });
  scrollUpdate();

  const spyLinks = [...document.querySelectorAll('a[data-spy]')];
  const targets = [...new Set(spyLinks.map(a => a.getAttribute('href').split('#')[1]).filter(Boolean))]
    .map(id => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window && targets.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio);
      if (visible.length) {
        const id = visible[0].target.id;
        spyLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href').endsWith('#' + id)));
      }
    }, {rootMargin:'-16% 0px -60% 0px',threshold:[0,.2,.5]});
    targets.forEach(t => observer.observe(t));
  }

  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2700);
  }
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-copy-email');
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const node = document.createElement('textarea');
          node.value = email;
          node.style.cssText = 'position:fixed;left:-9999px;top:0;';
          document.body.appendChild(node);
          node.select();
          const success = document.execCommand('copy');
          node.remove();
          if (!success) throw new Error('copy unavailable');
        }
        showToast('이메일 주소를 복사했습니다.');
      } catch (error) {
        showToast('복사가 제한되었습니다. 이메일 주소를 직접 선택해 복사해 주세요.');
      }
    });
  });
  document.querySelectorAll('[data-back-top]').forEach(btn => btn.addEventListener('click', e => {
    e.preventDefault();window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }));
})();
