const prisma = require("../prisma/client");

const findAllRecipesWithIngredients = async () => {
  return prisma.recipe.findMany({
    include: {
      category: true,
      recipeIngredients: {
        include: {
          ingredient: true,
        },
      },
      products: true,
    },
  });
};

const findAllRecipes = async () => {
  return prisma.recipe.findMany({
    include: {
      category: true,
      recipeIngredients: {
        include: {
          ingredient: true,
        },
      },
      products: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

module.exports = {
  findAllRecipesWithIngredients,
  findAllRecipes,
};
