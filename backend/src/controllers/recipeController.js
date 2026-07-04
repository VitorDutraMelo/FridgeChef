const recipeService = require("../services/recipeService");

const generateRecipe = async (req, res, next) => {
  try {
    const result = await recipeService.generateRecipeByIngredients(req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeService.getRecipeHistory();

    return res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateRecipe,
  getRecipes,
};
