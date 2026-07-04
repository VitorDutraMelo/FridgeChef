const express = require("express");

const recipeController = require("../controllers/recipeController");
const validate = require("../middlewares/validate");
const { generateRecipeSchema } = require("../validations/recipeValidation");

const router = express.Router();

router.post("/generate-recipe", validate(generateRecipeSchema), recipeController.generateRecipe);

router.get("/recipes", recipeController.getRecipes);

module.exports = router;
