const recipeRepository = require("../repositories/recipeRepository");
const recipeGenerationRepository = require("../repositories/recipeGenerationRepository");
const { mapRecipeSummaryToResponse, mapRecipesToResponse } = require("../mappers/recipeMapper");

const MINIMUM_MATCH_PERCENTAGE = 30;

const generateRecipeByIngredients = async ({ ingredients, country = "Global" }) => {
  const normalizedUserIngredients = ingredients.map((ingredient) => normalizeText(ingredient));

  const recipes = await recipeRepository.findAllRecipesWithIngredients();

  const rankedRecipes = recipes.map((recipe) => {
    const requiredRecipeIngredients = recipe.recipeIngredients.filter(
      (recipeIngredient) => !recipeIngredient.isOptional
    );

    const recipeIngredientNames = requiredRecipeIngredients.map(
      (recipeIngredient) => recipeIngredient.ingredient.name
    );

    const matchedIngredients = recipeIngredientNames.filter((ingredient) =>
      normalizedUserIngredients.includes(normalizeText(ingredient))
    );

    const missingIngredients = recipeIngredientNames.filter(
      (ingredient) => !normalizedUserIngredients.includes(normalizeText(ingredient))
    );

    const matchPercentage = Math.round(
      (matchedIngredients.length / recipeIngredientNames.length) * 100
    );

    return {
      recipe,
      matchPercentage,
      matchedIngredients,
      missingIngredients,
    };
  });

  const bestMatch = rankedRecipes.sort((a, b) => b.matchPercentage - a.matchPercentage)[0];

  if (!bestMatch || bestMatch.matchPercentage < MINIMUM_MATCH_PERCENTAGE) {
    await recipeGenerationRepository.createRecipeGeneration({
      inputIngredients: normalizedUserIngredients,
      country,
      matchedRecipeId: null,
    });

    return {
      found: false,
      message:
        "We couldn't find an exact match yet. Try adding more ingredients or explore our popular recipes.",
      recipe: null,
    };
  }

  await recipeGenerationRepository.createRecipeGeneration({
    inputIngredients: normalizedUserIngredients,
    country,
    matchedRecipeId: bestMatch.recipe.id,
  });

  return {
    found: true,
    matchPercentage: bestMatch.matchPercentage,
    matchedIngredients: bestMatch.matchedIngredients,
    missingIngredients: bestMatch.missingIngredients,
    recipe: mapRecipeSummaryToResponse(bestMatch.recipe),
  };
};

const getRecipeHistory = async () => {
  const recipes = await recipeRepository.findAllRecipes();

  return mapRecipesToResponse(recipes);
};

const normalizeText = (text) => {
  return text.trim().toLowerCase();
};

module.exports = {
  generateRecipeByIngredients,
  getRecipeHistory,
};
