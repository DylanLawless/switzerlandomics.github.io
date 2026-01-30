---
title: Switzerland Omics
layout: home
description: Auditable genomic infrastructure for precision medicine, statistical genomics, epidemiology, and bioinformatic interpretation across clinical, research, and industrial settings.
intro_image: "images/2025_E_L_Laurent_etherial_precision/1EBA3CDE-7455-49FD-8686-017F290965E3_wide.jpeg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: false
---

<!-- # Quantified genomics -->
<!-- ## We build the algorithms and data systems that enable rigorous genomic interpretation at scale. Our tools power clinical confidence, pharmacogenomic inference, and genome-scale engineering in real-world settings. -->


# Genomic infrastructure
## We build algorithms and data systems that make genomic interpretation measurable, auditable, and reusable across clinical, research, and industrial settings.


<style>
:root {
  /* core vault */
  --vault-bg: #0b0c0e;
  --vault-text: #f2f3f5;
  --vault-hover: #2f2f41;
  --vault-panel: #0b0c0e;
  --vault-seam: #ffffff14;

  /* card and typography */
  --card-bg: #1a1b1e;
  --card-fg: #e1e3e6;

  /* card gradients */
  --card-grad-top: #ffffff8c;        /* 55% */
  --card-grad-top-fade: #00000000;   /* 0%  */
  --card-grad-bottom-light: #00000008; /* 3% */
  --card-grad-bottom-dark: #0000000f;  /* 6% */

  /* card shadows */
  --card-inset-top: #ffffffb3;     /* 70% */
  --card-inset-bottom: #00000014;  /* 8%  */
  --card-outer: #0000000f;         /* 6%  */

  /* toggle track and knob */
  --toggle-track-bg: #2a2b2f;
  --knob-icon: #000000;          /* 8% */
  --knob-bg: #343436;

  /* knob shadows */
  --knob-shadow-outer: #00000026;  /* 15% */
  --knob-shadow-top: #ffffffcc;    /* 80% */
  --knob-shadow-bottom: #00000014; /* 8%  */

  /* knob text shadow */
  --knob-text-shadow-top: #ffffffb3;       /* 70% */
  --knob-text-shadow-outline: #0000004d;   /* 30% */

  /* icons and states */
  --icon-base: #ffffff;
  --icon-locked: #c8c9cb;
  --icon-unlocked: #950900;
  --toggle-on: #e0312d;

  /* track subtle highlights */
  --track-top-highlight: #ffffff66;  /* 40% */
  --track-inner-top: #0000001a;      /* 10% */
  --track-inner-bottom: #ffffff59;   /* 35% */
}


/* button */
.button-link {
  display: inline-block;
  padding: 12px 20px;
  background-color: var(--vault-bg);
  color: var(--vault-text);
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.button-link:hover {
  background-color: var(--vault-hover);
}

/* overlay */
.vault-overlay {
  position: fixed; inset: 0; pointer-events: none;
  z-index: 9999; display: grid; grid-template-columns: 1fr 1fr;
}
.vault-panel {
  background: var(--vault-panel);
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
}
.vault-panel.right { transform-origin: right center; }
.vault-overlay.active { pointer-events: all; }
.vault-overlay.active .vault-panel { transform: scaleX(1); }

.vault-seam {
  position: fixed; top: 0; bottom: 0; left: 50%;
  width: 0; border-left: 1px solid var(--vault-seam);
  z-index: 10000; opacity: 0;
  transition: opacity 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
}
.vault-overlay.active ~ .vault-seam { opacity: 1; }
.vault-reset .vault-panel { transition: none !important; transform: scaleX(0) !important; }

/* inline layout: toggle then text */
.vault-card{
  display:inline-flex;
  align-items:center;
  gap:14px;
  text-decoration:none;
  background:var(--card-bg);
  color:var(--card-fg);
  border-radius:60px;
  padding:10px 14px;

  /* subtle bevel shading */
  background-image:
    linear-gradient(to bottom, var(--card-grad-top), var(--card-grad-top-fade) 42%),
    linear-gradient(to bottom, var(--card-grad-bottom-light), var(--card-grad-bottom-dark));
  box-shadow:
    inset 0 1px 0 var(--card-inset-top),    /* inner top highlight */
    inset 0 -1px 0 var(--card-inset-bottom),/* inner bottom shade */
    0 1px 2px var(--card-outer);            /* soft outer seat */
}

/* text */
.vault-card .label{ 
  font-weight:600;
  font-size:16px;
  letter-spacing:.2px;
}

.vault-card .label::after {
  content: '';
  display: inline-block;
  width: 1.5ch;
}

/* toggle track */
.vault-card .toggle{
  pointer-events:none;
  position:relative;
  width:152px;
  height:76px;
  background:var(--toggle-track-bg);
  border-radius:60px;
  overflow:hidden;
  transition:background-color .25s linear;
}

/* knob: soft drop plus inner highlight and tiny inner bottom shadow */
.vault-card .slide{
  color:var(--knob-icon);
  background:var(--knob-bg);
  border-radius:50%;
  font-size:30px;
  line-height:68px;
  text-align:center;
  height:66px;
  width:66px;
  position:absolute;
  top:5px;
  left:5px;
  transition:all .3s cubic-bezier(0.43,1.3,0.86,1);
  box-shadow:
    0 1px 2px var(--knob-shadow-outer),     /* soft outer */
    inset 0 1px 1px var(--knob-shadow-top), /* inner top sheen */
    inset 0 -1px 0 var(--knob-shadow-bottom);/* inner bottom shade */
}

/* keep the icon glow on the knob */
.vault-card .slide span{
  text-shadow: 0 1px 1px var(--knob-text-shadow-top), 0 0 1px var(--knob-text-shadow-outline);
}
.vault-card .slide:before,
.vault-card .slide:after{
  color:var(--icon-base);
  content:"\f023"; /* lock */
  font-family:FontAwesome;
  font-size:34px;
  font-weight:400;
  -webkit-font-smoothing:antialiased;
  position:absolute;
  top:50%;
  transform:translateY(-50%);
}
.vault-card .slide:before{ right:-50px; color:var(--icon-locked); opacity:.8; }
.vault-card .slide:after{ content:"\f09c"; left:-50px; color:var(--icon-unlocked); }

/* click animation only */
.vault-card.on .toggle{ background:var(--toggle-on); }
.vault-card.on .slide{ left:80px; color:var(--toggle-on); }

/* track: subtle highlight top, soft inner shadows */
.vault-card .toggle{
  pointer-events:none;
  position:relative;
  width:152px;
  height:76px;
  background:var(--toggle-track-bg);
  border-radius:60px;
  overflow:hidden;
  transition:background-color .25s linear;
  box-shadow:
    0 1px 1px var(--track-top-highlight), /* top highlight */
    inset 0 1px 0 var(--track-inner-top), /* inner top shadow */
    inset 0 -1px 0 var(--track-inner-bottom);/* inner bottom highlight */
}

/* mobile */
@media (max-width:520px){
  .vault-card{ padding:16px 18px 14px; }
  .vault-card .toggle{ width:120px; height:60px; }
  .vault-card .slide{ height:52px; width:52px; line-height:54px; }
}
</style>








<script>
  var countDownDate = new Date("Sept 01, 2025 07:00:00").getTime();
  function updateCountdown() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var output = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    document.getElementById("countdowntimer").innerHTML = distance < 0 ? "Quant II" : output;
  }
  updateCountdown();
  var x = setInterval(updateCountdown, 1000);
</script>



<div class="submission-message">

</div>

<!-- vault overlay -->
<div class="vault-overlay" aria-hidden="true">
  <div class="vault-panel left"></div>
  <div class="vault-panel right"></div>
</div>
<div class="vault-seam" aria-hidden="true"></div>

<!-- Vault lock -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<a href="https://genomicvault.switzerlandomics.ch"
   class="vault-card vault-link"
   aria-label="Open Genomic Vault">
  <span class="toggle" aria-hidden="true">
    <span class="slide">
      <span class="fa fa-circle-o" aria-hidden="true"></span>
    </span>
  </span>
  <span class="label">Genomic Vault</span>
</a>









<script>
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
</script>

<script>
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
</script>

