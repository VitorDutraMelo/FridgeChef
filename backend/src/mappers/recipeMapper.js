const mapRecipeToResponse = (recipe) => {
  return {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    prepTime: recipe.prepTime,
    difficulty: recipe.difficulty,
    servings: recipe.servings,
    country: recipe.country,
    imageUrl: recipe.imageUrl,
    category: {
      id: recipe.category.id,
      name: recipe.category.name,
      slug: recipe.category.slug,
    },
    ingredients: recipe.recipeIngredients.map((recipeIngredient) => ({
      id: recipeIngredient.ingredient.id,
      name: recipeIngredient.ingredient.name,
      slug: recipeIngredient.ingredient.slug,
      quantity: recipeIngredient.quantity,
      unit: recipeIngredient.unit,
      isOptional: recipeIngredient.isOptional,
    })),
    instructions: recipe.instructions,
    products: recipe.products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      affiliateUrl: product.affiliateUrl,
      imageUrl: product.imageUrl,
      price: product.price,
      currency: product.currency,
    })),
  };
};

const mapRecipeSummaryToResponse = (recipe) => {
  return {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    prepTime: recipe.prepTime,
    difficulty: recipe.difficulty,
    servings: recipe.servings,
    country: recipe.country,
    imageUrl: recipe.imageUrl,
    instructions: recipe.instructions,
    category: {
      id: recipe.category.id,
      name: recipe.category.name,
      slug: recipe.category.slug,
    },
    ingredients: recipe.recipeIngredients.map((recipeIngredient) => ({
      id: recipeIngredient.ingredient.id,
      name: recipeIngredient.ingredient.name,
      slug: recipeIngredient.ingredient.slug,
      quantity: recipeIngredient.quantity,
      unit: recipeIngredient.unit,
      isOptional: recipeIngredient.isOptional,
    })),
  };
};

const mapRecipesToResponse = (recipes) => {
  return recipes.map(mapRecipeToResponse);
};

module.exports = {
  mapRecipeToResponse,
  mapRecipeSummaryToResponse,
  mapRecipesToResponse,
};