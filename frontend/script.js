(function () {
  'use strict';

  const API_URL = 'http://localhost:3000';

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

  let selectedCountry = 'UK';

  function getIngredientsArray() {
    return input.value
      .split(',')
      .map(function (ingredient) {
        return ingredient.trim();
      })
      .filter(function (ingredient) {
        return ingredient.length > 0;
      });
  }

  function showHint(message) {
    hint.textContent = message;
    hint.hidden = false;

    clearTimeout(showHint._t);

    showHint._t = setTimeout(function () {
      hint.hidden = true;
    }, 5000);
  }

  function hideHint() {
    hint.hidden = true;
  }

  function setLoading(isLoading) {
    const labelEl = generateBtn.querySelector('.btn-label');

    loading.hidden = !isLoading;
    generateBtn.disabled = isLoading;

    if (labelEl) {
      labelEl.textContent = isLoading ? 'Creating…' : 'Generate My Recipe';
    }
  }

  function updateRecipeImage(recipe) {
    const recipeImage = recipeCard.querySelector('.recipe-image img');

    if (!recipeImage) return;

    if (recipe && recipe.imageUrl) {
      recipeImage.src = recipe.imageUrl;
      recipeImage.alt = recipe.title || 'Generated recipe';
    }
  }

  function renderRecipe(data) {
    if (!data || data.found === false || !data.recipe) {
      recipeCard.hidden = true;
      showHint(
        data && data.message
          ? data.message
          : "We couldn't find an exact match yet. Try adding more ingredients or explore our popular recipes."
      );
      return;
    }

    const recipe = data.recipe;

    const recipeName = recipeCard.querySelector('.recipe-name');
    const recipeDesc = recipeCard.querySelector('.recipe-desc');
    const metaItems = recipeCard.querySelectorAll('.meta-list li span');
    const ingredientsList = recipeCard.querySelector('.ingredients-list');
    const instructionsList = recipeCard.querySelector('.instructions-list');

    if (recipeName) {
      recipeName.textContent = recipe.title || 'Recipe found';
    }

    if (recipeDesc) {
      recipeDesc.textContent = recipe.description || 'A delicious recipe based on your ingredients.';
    }

    if (metaItems[0]) {
      metaItems[0].textContent = recipe.prepTime || 'N/A';
    }

    if (metaItems[1]) {
      metaItems[1].textContent = recipe.difficulty || 'N/A';
    }

    if (metaItems[2]) {
      metaItems[2].textContent = recipe.servings
        ? recipe.servings + ' servings'
        : 'N/A servings';
    }

    updateRecipeImage(recipe);

    if (ingredientsList) {
      ingredientsList.innerHTML = '';

      const matchItem = document.createElement('li');
      matchItem.textContent = 'Match: ' + (data.matchPercentage || 0) + '%';
      ingredientsList.appendChild(matchItem);

      if (Array.isArray(data.matchedIngredients) && data.matchedIngredients.length > 0) {
        const matchedItem = document.createElement('li');
        matchedItem.textContent = 'You have: ' + data.matchedIngredients.join(', ');
        ingredientsList.appendChild(matchedItem);
      }

      if (Array.isArray(data.missingIngredients) && data.missingIngredients.length > 0) {
        const missingItem = document.createElement('li');
        missingItem.textContent = 'Missing: ' + data.missingIngredients.join(', ');
        ingredientsList.appendChild(missingItem);
      } else {
        const noMissingItem = document.createElement('li');
        noMissingItem.textContent = 'You have all ingredients for this recipe.';
        ingredientsList.appendChild(noMissingItem);
      }
    }

    if (instructionsList) {
      instructionsList.innerHTML = '';

      if (Array.isArray(recipe.instructions) && recipe.instructions.length > 0) {
        recipe.instructions.forEach(function (instruction, index) {
          const li = document.createElement('li');

          const number = document.createElement('span');
          number.className = 'num';
          number.textContent = index + 1;

          const text = document.createElement('span');
          text.textContent = instruction;

          li.appendChild(number);
          li.appendChild(text);
          instructionsList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');

        const number = document.createElement('span');
        number.className = 'num';
        number.textContent = '1';

        const text = document.createElement('span');
        text.textContent = 'Instructions are not available for this recipe yet.';

        li.appendChild(number);
        li.appendChild(text);
        instructionsList.appendChild(li);
      }
    }

    recipeCard.hidden = false;

    setTimeout(function () {
      recipeCard.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 60);
  }

  async function generateRecipe() {
    const ingredients = getIngredientsArray();

    if (ingredients.length === 0) {
      showHint('Please enter at least one ingredient.');
      input.focus();
      return;
    }

    hideHint();
    recipeCard.hidden = true;
    setLoading(true);

    try {
      const response = await fetch(API_URL + '/generate-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: ingredients,
          country: selectedCountry
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      if (data.found === false) {
        recipeCard.hidden = true;
        showHint(
          data.message ||
            "We couldn't find an exact match yet. Try adding more ingredients or explore our popular recipes."
        );
        return;
      }

      renderRecipe(data);
    } catch (error) {
      recipeCard.hidden = true;
      showHint(error.message || 'Unable to connect to the server.');
    } finally {
      setLoading(false);
    }
  }

  chipsContainer.addEventListener('click', function (e) {
    const target = e.target.closest('.chip');

    if (!target) return;

    const ing = target.getAttribute('data-ing');

    if (!ing) return;

    const current = getIngredientsArray().map(function (item) {
      return item.toLowerCase();
    });

    if (current.indexOf(ing.toLowerCase()) !== -1) {
      target.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-3px)' },
          { transform: 'translateX(3px)' },
          { transform: 'translateX(0)' }
        ],
        { duration: 220 }
      );
      return;
    }

    const existing = input.value.trim();

    if (existing.length === 0) {
      input.value = ing;
    } else if (existing.endsWith(',')) {
      input.value = existing + ' ' + ing;
    } else {
      input.value = existing + ', ' + ing;
    }

    input.focus();
    hideHint();
  });

  generateBtn.addEventListener('click', generateRecipe);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      generateRecipe();
    }
  });

  input.addEventListener('input', function () {
    if (input.value.trim().length > 0) {
      hideHint();
    }
  });

  function closeCountryMenu() {
    countryMenu.hidden = true;
    countryTrigger.setAttribute('aria-expanded', 'false');
  }

  function openCountryMenu() {
    countryMenu.hidden = false;
    countryTrigger.setAttribute('aria-expanded', 'true');
  }

  countryTrigger.addEventListener('click', function (e) {
    e.stopPropagation();

    if (countryMenu.hidden) {
      openCountryMenu();
    } else {
      closeCountryMenu();
    }
  });

  countryMenu.addEventListener('click', function (e) {
    const option = e.target.closest('li[role="option"]');

    if (!option) return;

    const shortName = option.getAttribute('data-short');

    countryLabel.textContent = shortName;

    if (shortName === 'UK') selectedCountry = 'UK';
    if (shortName === 'BR') selectedCountry = 'Brazil';
    if (shortName === 'Global') selectedCountry = 'Global';

    Array.prototype.forEach.call(countryMenu.querySelectorAll('li'), function (li) {
      li.classList.remove('active');
    });

    option.classList.add('active');
    closeCountryMenu();

    const symbols = {
      UK: '£',
      BR: 'R$ ',
      Global: '$'
    };

    const sym = symbols[shortName] || '£';

    Array.prototype.forEach.call(document.querySelectorAll('.product-price'), function (el) {
      const base = el.getAttribute('data-base');
      el.textContent = sym + base;
    });
  });

  document.addEventListener('click', function (e) {
    if (!countryMenu.hidden && !countryMenu.contains(e.target) && e.target !== countryTrigger) {
      closeCountryMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeCountryMenu();
    }
  });

  const firstOption = countryMenu.querySelector('li[data-short="UK"]');

  if (firstOption) {
    firstOption.classList.add('active');
  }

  Array.prototype.forEach.call(document.querySelectorAll('.product-btn'), function (btn) {
    btn.addEventListener('click', function () {
      const original = btn.textContent;

      btn.textContent = 'Opening…';

      setTimeout(function () {
        btn.textContent = original;
      }, 900);
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('.recipe-card-mini'), function (card) {
    card.addEventListener('click', function () {
      const title = card.querySelector('.rc-title');

      if (title) {
        const t = title.textContent.toLowerCase();

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

  if (navToggle) {
    navToggle.addEventListener('click', function () {
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

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) {
    observer.observe(el);
  });
})();