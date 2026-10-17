/*!
 * pro-animations.js  —  drop-in animation pack for Rizwan Ahmad's portfolio
 * No libraries. Works with React / Vite / plain HTML. Respects reduced-motion.
 *
 * Install: add ONE line before </body> in index.html
 *   <script src="/pro-animations.js" defer></script>
 * (React/Vite: put this file in the /public folder.)
 */
(function () {
  'use strict';
  if (window.__proAnim) return;
  window.__proAnim = true;

  /* ---------- central motion config (change values here) ---------- */
  var CFG = {
    revealDistance: 28,      // px
    revealDuration: 700,     // ms
    stagger: 80,             // ms between siblings
    maxStagger: 5,           // max steps
    tilt: 5,                 // deg, card 3D tilt
    magnet: 0.25,            // button magnetic strength
    counterDuration: 1400,   // ms
    glow: true,              // cursor glow
    orbs: true,              // floating background glow
    routeFade: true          // page transition when menu changes
  };

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return; // keep site fully static for people who ask for less motion
  var finePointer = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- CSS ---------- */
  var css = '' +
  ':root{--pa-ease:cubic-bezier(.22,1,.36,1)}' +

  /* scroll reveal (uses individual transform props so it never fights hover/tilt) */
  '.pa-reveal{opacity:0;translate:0 ' + CFG.revealDistance + 'px;filter:blur(6px);' +
  'transition:opacity ' + CFG.revealDuration + 'ms var(--pa-ease),translate ' + CFG.revealDuration + 'ms var(--pa-ease),filter ' + CFG.revealDuration + 'ms var(--pa-ease);' +
  'transition-delay:var(--pa-d,0ms);will-change:opacity,translate}' +
  '.pa-reveal.pa-in{opacity:1;translate:0 0;filter:none}' +
  '.pa-reveal.pa-done{will-change:auto}' +

  /* hero heading entrance */
  '@keyframes paHero{from{opacity:0;translate:0 24px;filter:blur(10px)}to{opacity:1;translate:0 0;filter:none}}' +
  '.pa-hero{animation:paHero 900ms var(--pa-ease) both;animation-delay:var(--pa-d,0ms)}' +

  /* navbar entrance */
  '@keyframes paNav{from{opacity:0;translate:0 -16px}to{opacity:1;translate:0 0}}' +
  '.pa-nav{animation:paNav 700ms var(--pa-ease) both;animation-delay:var(--pa-d,0ms)}' +

  /* page / route transition */
  '@keyframes paRoute{from{opacity:0;translate:0 18px;filter:blur(8px)}to{opacity:1;translate:0 0;filter:none}}' +
  '.pa-route{animation:paRoute 550ms var(--pa-ease) both}' +

  /* card hover (lift + glow + tilt through CSS vars) */
  '.pa-card{transition:transform 260ms var(--pa-ease),box-shadow 260ms var(--pa-ease),border-color 260ms ease;' +
  'transform:perspective(900px) rotateX(var(--pa-rx,0deg)) rotateY(var(--pa-ry,0deg)) translateY(var(--pa-ty,0px));transform-style:preserve-3d}' +
  '.pa-card.pa-hover{--pa-ty:-6px;box-shadow:0 18px 40px -12px rgba(99,102,241,.45),0 0 0 1px rgba(129,140,248,.35)}' +
  '.pa-no-card{box-shadow:none!important;border:none!important;outline:none!important;transform:none!important}' +

  /* buttons */
  '.pa-btn{transition:transform 220ms var(--pa-ease),box-shadow 220ms ease;will-change:transform}' +
  '.pa-btn:active{scale:.96}' +
  '.pa-ripple{position:absolute;border-radius:50%;pointer-events:none;background:rgba(255,255,255,.35);transform:scale(0);animation:paRip 600ms ease-out forwards}' +
  '@keyframes paRip{to{transform:scale(1);opacity:0}}' +

  /* floating background glow */
  '.pa-orbs{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;mix-blend-mode:screen}' +
  '.pa-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:.16;will-change:transform}' +
  '.pa-o1{width:46vmax;height:46vmax;left:-12vmax;top:-10vmax;background:#4f46e5;animation:paF1 24s ease-in-out infinite alternate}' +
  '.pa-o2{width:38vmax;height:38vmax;right:-10vmax;top:30vh;background:#a855f7;animation:paF2 28s ease-in-out infinite alternate}' +
  '.pa-o3{width:32vmax;height:32vmax;left:25vw;bottom:-14vmax;background:#06b6d4;animation:paF3 32s ease-in-out infinite alternate}' +
  '@keyframes paF1{to{transform:translate(12vmax,10vmax) scale(1.15)}}' +
  '@keyframes paF2{to{transform:translate(-10vmax,-8vmax) scale(1.2)}}' +
  '@keyframes paF3{to{transform:translate(8vmax,-10vmax) scale(.9)}}' +

  /* cursor glow */
  '.pa-glow{position:fixed;left:0;top:0;width:420px;height:420px;margin:-210px 0 0 -210px;border-radius:50%;pointer-events:none;z-index:0;' +
  'background:radial-gradient(circle,rgba(99,102,241,.16),transparent 65%);mix-blend-mode:screen;will-change:transform;opacity:0;transition:opacity .4s}' +
  '.pa-glow.pa-on{opacity:1}' +

  /* gentle float for the green WhatsApp / call button */
  '@keyframes paPulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.55)}70%{box-shadow:0 0 0 18px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}' +
  '.pa-pulse{animation:paPulse 2.4s ease-out infinite;border-radius:50%}' +

  '@media (max-width:768px){.pa-orb{filter:blur(60px);opacity:.12}.pa-reveal{filter:none}}' +
  '@media (prefers-reduced-motion:reduce){.pa-reveal{opacity:1;translate:none;filter:none;transition:none}}';

  var style = document.createElement('style');
  style.id = 'pro-animations-css';
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------- helpers ---------- */
  var raf = window.requestAnimationFrame.bind(window);
  var io, countIO;

  function inViewportNow(el) {
    var r = el.getBoundingClientRect();
    return r.top < innerHeight * 0.95 && r.bottom > 0;
  }
  function isFixedArea(el) {
    return !!el.closest('header,nav,[role="dialog"],[class*="modal"],[class*="Modal"],[aria-modal="true"]');
  }
  function hasAnimatedAncestor(el) {
    var p = el.parentElement;
    while (p) { if (p.classList && p.classList.contains('pa-reveal')) return true; p = p.parentElement; }
    return false;
  }

  /* ---------- 1. scroll reveal ---------- */
  var REVEAL_SEL = [
    'main h1', 'main h2', 'main h3', 'section h1', 'section h2', 'section h3',
    'section p', 'main p',
    '[class*="card"]', '[class*="Card"]',
    '[class*="grid"] > *', '[class*="Grid"] > *',
    'section form', 'section img', 'footer > *'
  ].join(',');

  function setupReveal() {
    var list = document.querySelectorAll(REVEAL_SEL);
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__paR || isFixedArea(el) || hasAnimatedAncestor(el)) continue;
      if (el.offsetHeight > innerHeight * 1.6 || el.offsetHeight === 0) continue;
      el.__paR = true;
      var idx = Array.prototype.indexOf.call(el.parentElement ? el.parentElement.children : [], el);
      el.style.setProperty('--pa-d', Math.min(Math.max(idx, 0), CFG.maxStagger) * CFG.stagger + 'ms');
      el.classList.add('pa-reveal');
      io.observe(el);
    }
  }

  /* ---------- 2. animated counters (handled natively by React) ---------- */
  function setupCounters() {
    // Disabled to let React's AnimatedCounter manage counters without DOM corruption
    return;
  }
  function runCounter(el) {
    return;
  }

  /* ---------- 3. cards: tilt + lift ---------- */
  function cardEligible(el) {
    if (el.classList.contains('pa-no-card') || el.closest('.pa-no-card')) return false;
    if (el.closest('#home') || el.matches('[class*="col-span"]') || el.closest('[class*="col-span"]')) return false;
    if (el.querySelector('h1, h2, form, [class*="col-span"]')) return false;
    var r = el.getBoundingClientRect();
    return r.width > 180 && r.width < 720 && r.height > 80 && r.height < 650;
  }
  function onCardMove(e) {
    var t = e.target.closest ? e.target.closest('.pa-card') : null;
    if (!t || t.classList.contains('pa-no-card') || t.closest('.pa-no-card')) return;
    var r = t.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width - 0.5;
    var py = (e.clientY - r.top) / r.height - 0.5;
    t.style.setProperty('--pa-ry', (px * CFG.tilt * 2).toFixed(2) + 'deg');
    t.style.setProperty('--pa-rx', (-py * CFG.tilt * 2).toFixed(2) + 'deg');
    t.classList.add('pa-hover');
  }
  function onCardLeave(e) {
    var t = e.target.closest ? e.target.closest('.pa-card') : null;
    if (!t || t.contains(e.relatedTarget)) return;
    t.style.setProperty('--pa-rx', '0deg');
    t.style.setProperty('--pa-ry', '0deg');
    t.classList.remove('pa-hover');
  }
  function markCards() {
    var list = document.querySelectorAll('[class*="card"]:not(.pa-no-card),[class*="Card"]:not(.pa-no-card)');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__paK || el.classList.contains('pa-no-card') || el.closest('.pa-no-card')) continue;
      if (isFixedArea(el) || el.closest('form') || !cardEligible(el)) continue;
      el.__paK = true;
      el.classList.add('pa-card');
    }
  }

  /* ---------- 4. buttons: magnetic + ripple ---------- */
  function markButtons() {
    var list = document.querySelectorAll('a,button');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__paB) continue;
      var r = el.getBoundingClientRect();
      var cls = (el.className && el.className.toString()) || '';
      var looksLikeBtn = /btn|button|cta/i.test(cls) || /let.?s talk|whatsapp|submit|visit|live preview|view/i.test(el.textContent || '');
      if (!looksLikeBtn || r.width < 40 || r.width > 320 || r.height > 80) continue;
      el.__paB = true;
      el.classList.add('pa-btn');
    }
  }
  function onBtnMove(e) {
    var b = e.target.closest ? e.target.closest('.pa-btn') : null;
    if (!b) return;
    var r = b.getBoundingClientRect();
    var dx = (e.clientX - (r.left + r.width / 2)) * CFG.magnet;
    var dy = (e.clientY - (r.top + r.height / 2)) * CFG.magnet;
    b.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
  }
  function onBtnLeave(e) {
    var b = e.target.closest ? e.target.closest('.pa-btn') : null;
    if (b && !b.contains(e.relatedTarget)) b.style.transform = '';
  }
  function onBtnClick(e) {
    var b = e.target.closest ? e.target.closest('.pa-btn') : null;
    if (!b) return;
    var cs = getComputedStyle(b);
    if (cs.position === 'static') b.style.position = 'relative';
    b.style.overflow = b.style.overflow || 'hidden';
    var r = b.getBoundingClientRect();
    var size = Math.max(r.width, r.height) * 2;
    var s = document.createElement('span');
    s.className = 'pa-ripple';
    s.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (e.clientX - r.left - size / 2) + 'px;top:' + (e.clientY - r.top - size / 2) + 'px';
    b.appendChild(s);
    setTimeout(function () { s.remove(); }, 650);
  }

  /* ---------- 5. entrance for navbar + hero ---------- */
  function intro() {
    var nav = document.querySelector('header, nav');
    if (nav && !nav.__paN) {
      nav.__paN = true;
      var items = nav.querySelectorAll('a,button,img,svg');
      var n = 0;
      for (var i = 0; i < items.length && n < 14; i++) {
        if (items[i].closest('svg') && items[i].tagName.toLowerCase() !== 'svg') continue;
        items[i].classList.add('pa-nav');
        items[i].style.setProperty('--pa-d', n * 60 + 'ms');
        n++;
      }
    }
    var h1 = document.querySelector('main h1, section h1, h1');
    if (h1 && !h1.__paH && !isFixedArea(h1)) {
      h1.__paH = true;
      h1.classList.add('pa-hero');
      h1.style.setProperty('--pa-d', '250ms');
      var sib = h1.parentElement ? h1.parentElement.children : [];
      var k = 0;
      for (var j = 0; j < sib.length; j++) {
        if (sib[j] === h1 || sib[j].__paR) continue;
        sib[j].classList.add('pa-hero');
        sib[j].style.setProperty('--pa-d', 450 + k * 120 + 'ms');
        k++;
        if (k > 4) break;
      }
    }
  }

  /* ---------- 6. route transition (SPA menu clicks) ---------- */
  function routeFade() {
    var target = document.querySelector('main') || document.querySelector('#root > div') || document.body;
    if (!target) return;
    target.classList.remove('pa-route');
    void target.offsetWidth;
    target.classList.add('pa-route');
    setTimeout(function () { target.classList.remove('pa-route'); }, 700);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  function hookRouter() {
    if (!CFG.routeFade) return;
    var last = location.pathname;
    function check() {
      if (location.pathname !== last) { last = location.pathname; routeFade(); scan(); }
    }
    ['pushState', 'replaceState'].forEach(function (fn) {
      var orig = history[fn];
      history[fn] = function () { var r = orig.apply(this, arguments); setTimeout(check, 0); return r; };
    });
    window.addEventListener('popstate', function () { setTimeout(check, 0); });
  }

  /* ---------- 7. ambient: orbs + cursor glow + pulse ---------- */
  function ambient() {
    if (CFG.orbs) {
      var o = document.createElement('div');
      o.className = 'pa-orbs';
      o.setAttribute('aria-hidden', 'true');
      o.innerHTML = '<i class="pa-orb pa-o1"></i><i class="pa-orb pa-o2"></i><i class="pa-orb pa-o3"></i>';
      document.body.appendChild(o);
    }
    if (CFG.glow && finePointer) {
      var g = document.createElement('div');
      g.className = 'pa-glow';
      g.setAttribute('aria-hidden', 'true');
      document.body.appendChild(g);
      var tx = 0, ty = 0, cx = 0, cy = 0;
      window.addEventListener('pointermove', function (e) { tx = e.clientX; ty = e.clientY; g.classList.add('pa-on'); }, { passive: true });
      document.addEventListener('pointerleave', function () { g.classList.remove('pa-on'); });
      (function loop() {
        cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
        g.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
        raf(loop);
      })();
    }
  }
  function pulseFloatingButton() {
    var list = document.querySelectorAll('a,button');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (el.__paP) continue;
      var cs = getComputedStyle(el);
      var r = el.getBoundingClientRect();
      if (cs.position === 'fixed' && r.width < 90 && r.height < 90 && r.width > 30 && innerWidth - r.right < 80 && innerHeight - r.bottom < 120) {
        el.__paP = true;
        el.classList.add('pa-pulse');
      }
    }
  }

  /* ---------- scan + observe ---------- */
  var scheduled = false;
  function scan() {
    if (scheduled) return;
    scheduled = true;
    raf(function () {
      scheduled = false;
      setupReveal();
      setupCounters();
      if (finePointer) markCards();
      markButtons();
      pulseFloatingButton();
    });
  }

  function init() {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('pa-in');
          io.unobserve(en.target);
          setTimeout(function (t) { t.classList.add('pa-done'); }, CFG.revealDuration + 700, en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countIO.unobserve(en.target); runCounter(en.target); }
      });
    }, { threshold: 0.6 });

    intro();
    ambient();
    hookRouter();
    scan();

    if (finePointer) {
      document.addEventListener('pointermove', onCardMove, { passive: true });
      document.addEventListener('pointerout', onCardLeave, { passive: true });
      document.addEventListener('pointermove', onBtnMove, { passive: true });
      document.addEventListener('pointerout', onBtnLeave, { passive: true });
    }
    document.addEventListener('click', onBtnClick, { passive: true });

    // React re-renders / route changes add new nodes: keep scanning
    new MutationObserver(function () { intro(); scan(); })
      .observe(document.body, { childList: true, subtree: true });

    // safety net: never leave content hidden if something goes wrong
    setTimeout(function () {
      var hidden = document.querySelectorAll('.pa-reveal:not(.pa-in)');
      for (var i = 0; i < hidden.length; i++) if (inViewportNow(hidden[i])) hidden[i].classList.add('pa-in');
    }, 2500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
