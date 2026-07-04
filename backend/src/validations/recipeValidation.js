const { z } = require("zod");

const generateRecipeSchema = z.object({
  ingredients: z
    .array(z.string().min(2, "Ingredient must have at least 2 characters"))
    .min(1, "At least one ingredient is required"),

  country: z.string().optional().default("Global"),
});

module.exports = {
  generateRecipeSchema,
};
