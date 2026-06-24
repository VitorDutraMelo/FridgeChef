(function() {
  'use strict';

  const input = document.getElementById('ingredientsInput');
  const chipsContainer = document.getElementById('chips');
  const generateBtn = document.getElementById('generateBtn');
  const recipeCard = document.getElementById('recipeCard');
  const hint = document.getElementById('hint');
  const loading = document.getElementById('loading');

  const countryTrigger = document.getElementById('countryTrigger');
  const countryMenu = document.getElementById('countryMenu');
  const countryLabel = document.getElementById('countryLabel');

  const navToggle = document.getElementById('navToggle');

  // ===== Helpers =====
  function getIngredientsArray() {
    return input.value.split(',').map(function(s){return s.trim();}).filter(function(s){return s.length>0;});
  }
  function showHint(message) {
    hint.textContent = message; hint.hidden = false;
    clearTimeout(showHint._t);
    showHint._t = setTimeout(function(){ hint.hidden = true; }, 4000);
  }
  function hideHint() { hint.hidden = true; }

  // ===== Chips =====
  chipsContainer.addEventListener('click', function(e) {
    const target = e.target.closest('.chip');
    if (!target) return;
    const ing = target.getAttribute('data-ing');
    if (!ing) return;
    const current = getIngredientsArray().map(function(i){return i.toLowerCase();});
    if (current.indexOf(ing.toLowerCase()) !== -1) {
      target.animate([{transform:'translateX(0)'},{transform:'translateX(-3px)'},{transform:'translateX(3px)'},{transform:'translateX(0)'}],{duration:220});
      return;
    }
    const existing = input.value.trim();
    if (existing.length === 0) input.value = ing;
    else if (existing.endsWith(',')) input.value = existing + ' ' + ing;
    else input.value = existing + ', ' + ing;
    input.focus();
    hideHint();
  });

  // ===== Generate =====
  function generateRecipe() {
    const ingredients = getIngredientsArray();
    if (ingredients.length === 0) {
      showHint('Please enter at least one ingredient.');
      input.focus();
      return;
    }
    hideHint();
    recipeCard.hidden = true;
    loading.hidden = false;
    generateBtn.disabled = true;
    const labelEl = generateBtn.querySelector('.btn-label');
    const originalLabel = labelEl ? labelEl.textContent : '';
    if (labelEl) labelEl.textContent = 'Creating\u2026';

    setTimeout(function() {
      loading.hidden = true;
      generateBtn.disabled = false;
      if (labelEl) labelEl.textContent = originalLabel;
      recipeCard.hidden = false;
      setTimeout(function(){ recipeCard.scrollIntoView({behavior:'smooth', block:'start'}); }, 60);
    }, 1400);
  }

  generateBtn.addEventListener('click', generateRecipe);
  input.addEventListener('keydown', function(e){ if (e.key === 'Enter'){ e.preventDefault(); generateRecipe(); } });
  input.addEventListener('input', function(){ if (input.value.trim().length > 0) hideHint(); });

  // ===== Country selector =====
  function closeCountryMenu(){ countryMenu.hidden = true; countryTrigger.setAttribute('aria-expanded','false'); }
  function openCountryMenu(){ countryMenu.hidden = false; countryTrigger.setAttribute('aria-expanded','true'); }
  countryTrigger.addEventListener('click', function(e){ e.stopPropagation(); if (countryMenu.hidden) openCountryMenu(); else closeCountryMenu(); });
  countryMenu.addEventListener('click', function(e) {
    const option = e.target.closest('li[role="option"]');
    if (!option) return;
    const shortName = option.getAttribute('data-short');
    countryLabel.textContent = shortName;
    Array.prototype.forEach.call(countryMenu.querySelectorAll('li'), function(li){ li.classList.remove('active'); });
    option.classList.add('active');
    closeCountryMenu();
    const symbols = { 'UK':'\u00a3', 'BR':'R$ ', 'Global':'$' };
    const sym = symbols[shortName] || '\u00a3';
    Array.prototype.forEach.call(document.querySelectorAll('.product-price'), function(el){
      const base = el.getAttribute('data-base');
      el.textContent = sym + base;
    });
  });
  document.addEventListener('click', function(e){
    if (!countryMenu.hidden && !countryMenu.contains(e.target) && e.target !== countryTrigger) closeCountryMenu();
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeCountryMenu(); });
  const firstOption = countryMenu.querySelector('li[data-short="UK"]');
  if (firstOption) firstOption.classList.add('active');

  // ===== Product buttons =====
  Array.prototype.forEach.call(document.querySelectorAll('.product-btn'), function(btn){
    btn.addEventListener('click', function(){
      const original = btn.textContent;
      btn.textContent = 'Opening\u2026';
      setTimeout(function(){ btn.textContent = original; }, 900);
    });
  });

  // ===== Mini recipe cards click -> populate & generate =====
  Array.prototype.forEach.call(document.querySelectorAll('.recipe-card-mini'), function(card){
    card.addEventListener('click', function(){
      const title = card.querySelector('.rc-title');
      if (title) {
        const t = title.textContent.toLowerCase();
        // suggest based on title (very basic)
        const seed = {
          'chicken fried rice': 'Chicken, Rice, Eggs, Onion, Garlic',
          'pasta carbonara': 'Pasta, Eggs, Cheese, Bacon',
          'air fryer chicken wings': 'Chicken Wings, Garlic, Soy Sauce',
          'vegetable curry': 'Potato, Onion, Tomato, Garlic'
        };
        input.value = seed[t] || input.value;
      }
      generateRecipe();
    });
  });

  // ===== Mobile nav toggle (basic) =====
  if (navToggle) {
    navToggle.addEventListener('click', function(){
      const nav = document.querySelector('.main-nav');
      if (!nav) return;
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        nav.style.display = 'flex';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.flexDirection = 'column';
        nav.style.padding = '16px 24px';
        nav.style.background = '#0f1517';
        nav.style.borderBottom = '1px solid #1f2428';
        nav.style.gap = '14px';
      } else {
        nav.removeAttribute('style');
      }
    });
  }

  // ===== Reveal on scroll =====
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function(el){ observer.observe(el); });
})();
