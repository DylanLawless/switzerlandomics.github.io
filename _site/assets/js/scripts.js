// var body = document.querySelector('body')
// var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
// var menuContainer = document.querySelector('#main-menu-mobile');
//
// menuTrigger.onclick = function() {
//     menuContainer.classList.toggle('open');
//     menuTrigger.classList.toggle('is-active')
//     body.classList.toggle('lock-scroll')
// }

var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger && menuContainer) {
  menuTrigger.onclick = function () {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  };
}

// countdown (only runs if #countdowntimer exists)
(function () {
  function initCountdown() {
    var el = document.getElementById('countdowntimer');
    if (!el) return;

    var countDownDate = new Date('2025-09-01T07:00:00Z').getTime();

    function updateCountdown() {
      var now = Date.now();
      var distance = countDownDate - now;

      if (distance < 0) {
        el.textContent = 'Quant II';
        return;
      }

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      el.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    }

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdown);
  } else {
    initCountdown();
  }
})();


(function(){
  document.addEventListener('click', function(e){
    const card = e.target.closest('.vault-card');
    if(!card) return;
    card.classList.add('on');
  }, { passive:true });

  document.addEventListener('keydown', function(e){
    const card = e.target.closest && e.target.closest('.vault-card');
    if(!card) return;
    if(e.key === ' ' || e.key === 'Spacebar'){
      e.preventDefault();
      card.classList.add('on');
      card.click();
    }
  });
})();



(function () {
  const overlay = document.querySelector('.vault-overlay');
  const right = overlay.querySelector('.right');
  const duration = 700;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NAV_KEY = 'vaultNavToken';

  function newToken() {
    const t = Date.now() + '-' + Math.random().toString(36).slice(2);
    try { sessionStorage.setItem(NAV_KEY, t); } catch(e) {}
    window.__vaultNavToken = t;
    return t;
  }
  function currentToken() {
    try { return sessionStorage.getItem(NAV_KEY) || window.__vaultNavToken || ''; }
    catch(e) { return window.__vaultNavToken || ''; }
  }

  function resetVaultInstant() {
    overlay.classList.remove('active');
    overlay.classList.add('vault-reset');
    requestAnimationFrame(() => { overlay.classList.remove('vault-reset'); });
  }

  window.addEventListener('pageshow', function () {
    newToken();
    resetVaultInstant();
  });

  document.addEventListener('DOMContentLoaded', function () {
    newToken();
    resetVaultInstant();
  });

  window.addEventListener('pagehide', newToken);
  window.addEventListener('beforeunload', newToken);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      newToken();
      resetVaultInstant();
    }
  });

  function navigateWithVault(url) {
    if (!url) return;
    if (reduceMotion) { window.location.href = url; return; }

    const myToken = currentToken();
    overlay.classList.remove('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('active');

        const onEnd = e => {
          if (e.propertyName !== 'transform') return;
          right.removeEventListener('transitionend', onEnd);
          newToken();
          window.location.href = url;
        };
        right.addEventListener('transitionend', onEnd, { once: true });

        const fallback = setTimeout(() => {
          if (currentToken() !== myToken) return;
          if (document.visibilityState === 'visible') {
            newToken();
            window.location.href = url;
          }
        }, duration + 150);

        window.addEventListener('pagehide', function cancel() {
          clearTimeout(fallback);
          right.removeEventListener('transitionend', onEnd);
          window.removeEventListener('pagehide', cancel);
        });
      });
    });
  }

  document.addEventListener('click', function (e) {
    const a = e.target.closest('.vault-link');
    if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
    const href = a.getAttribute('href');
    if (!href) return;
    e.preventDefault();
    navigateWithVault(href);
  }, { passive: false });
})();
