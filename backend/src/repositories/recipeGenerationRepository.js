const prisma = require("../prisma/client");

const createRecipeGeneration = async ({ inputIngredients, country, matchedRecipeId }) => {
  return prisma.recipeGeneration.create({
    data: {
      inputIngredients,
      country,
      matchedRecipeId,
    },
  });
};

module.exports = {
  createRecipeGeneration,
};
