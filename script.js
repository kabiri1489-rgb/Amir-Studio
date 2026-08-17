(() => {
  const menuBtn = document.getElementById('menuToggle');
  const menu = document.getElementById('menuOverlay');
  const backdrop = document.getElementById('backdrop');
  const closeMenu = document.getElementById('closeMenu');
  const settingsBtn = document.getElementById('settingsToggle');
  const settings = document.getElementById('settingsPanel');
  const closeSettings = document.getElementById('closeSettings');

  function setMenu(open){
    menu.classList.toggle('open', open);
    backdrop.classList.toggle('active', open);
    menuBtn.classList.toggle('active', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('lock', open);
  }
  function setSettings(open){
    settings.classList.toggle('open', open);
    settings.setAttribute('aria-hidden', String(!open));
    settingsBtn.setAttribute('aria-expanded', String(open));
  }
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  closeMenu.addEventListener('click', () => setMenu(false));
  backdrop.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  settingsBtn.addEventListener('click', () => setSettings(!settings.classList.contains('open')));
  closeSettings.addEventListener('click', () => setSettings(false));
  document.addEventListener('keydown', e => { if(e.key === 'Escape'){ setMenu(false); setSettings(false); }});

  document.querySelectorAll('.language-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.language-buttons button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if(btn.dataset.lang === 'en') alert('نسخه انگلیسی سایت در مرحله بعد فعال می‌شود.');
    });
  });

  const targets = document.querySelectorAll('.section, .work-card, .service-item, .principles>div, .contact-card');
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('reveal','visible');observer.unobserve(e.target);}}), {threshold:.12});
  targets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
})();
