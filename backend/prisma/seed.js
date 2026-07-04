const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const categories = [
  {
    name: "Budget Meals",
    slug: "budget-meals",
    description: "Affordable recipes using simple everyday ingredients.",
  },
  {
    name: "Quick Meals",
    slug: "quick-meals",
    description: "Fast recipes for busy days.",
  },
  {
    name: "Air Fryer Recipes",
    slug: "air-fryer-recipes",
    description: "Simple recipes designed for air fryer cooking.",
  },
  {
    name: "Healthy Recipes",
    slug: "healthy-recipes",
    description: "Balanced meals with healthier ingredients.",
  },
  {
    name: "Brazilian Recipes",
    slug: "brazilian-recipes",
    description: "Popular Brazilian-style recipes for future expansion.",
  },
  {
    name: "World Recipes",
    slug: "world-recipes",
    description: "Global recipes inspired by different cuisines.",
  },
];

const recipes = [
  {
    title: "Chicken Fried Rice",
    description: "A quick and filling rice dish made with chicken, egg and vegetables.",
    prepTime: "20 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "quick-meals",
    instructions: [
      "Cook the rice if it is not already cooked.",
      "Dice the chicken and cook it in a pan until golden.",
      "Add onion, peas and carrot to the pan.",
      "Push everything to one side and scramble the egg.",
      "Add the rice and soy sauce.",
      "Mix well and serve hot.",
    ],
    ingredients: ["chicken", "rice", "egg", "onion", "peas", "carrot", "soy sauce"],
  },
  {
    title: "Beans on Toast",
    description: "A classic British budget meal using baked beans and toasted bread.",
    prepTime: "10 min",
    difficulty: "Easy",
    servings: 1,
    country: "UK",
    categorySlug: "budget-meals",
    instructions: [
      "Toast the bread slices.",
      "Heat the baked beans in a small pan.",
      "Spread butter on the toast if desired.",
      "Pour the beans over the toast.",
      "Serve immediately.",
    ],
    ingredients: ["bread", "baked beans", "butter"],
  },
  {
    title: "Tuna Pasta",
    description: "Simple pasta with tuna, tomato and onion.",
    prepTime: "18 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "quick-meals",
    instructions: [
      "Cook the pasta according to package instructions.",
      "Fry onion in a pan until soft.",
      "Add tomato sauce and tuna.",
      "Mix with cooked pasta.",
      "Season and serve.",
    ],
    ingredients: ["pasta", "tuna", "tomato sauce", "onion"],
  },
  {
    title: "Cheese Omelette",
    description: "A simple omelette made with eggs and cheese.",
    prepTime: "10 min",
    difficulty: "Easy",
    servings: 1,
    country: "UK",
    categorySlug: "quick-meals",
    instructions: [
      "Beat the eggs in a bowl.",
      "Heat a pan with a little butter.",
      "Pour in the eggs.",
      "Add grated cheese.",
      "Fold the omelette and cook until set.",
    ],
    ingredients: ["egg", "cheese", "butter"],
  },
  {
    title: "Jacket Potato with Tuna",
    description: "Baked potato filled with tuna and sweetcorn.",
    prepTime: "45 min",
    difficulty: "Easy",
    servings: 1,
    country: "UK",
    categorySlug: "budget-meals",
    instructions: [
      "Bake the potato until soft.",
      "Mix tuna with sweetcorn and mayonnaise.",
      "Cut the potato open.",
      "Add the tuna filling.",
      "Serve warm.",
    ],
    ingredients: ["potato", "tuna", "sweetcorn", "mayonnaise"],
  },
  {
    title: "Air Fryer Chicken Thighs",
    description: "Crispy chicken thighs cooked quickly in the air fryer.",
    prepTime: "25 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "air-fryer-recipes",
    instructions: [
      "Season the chicken thighs with salt, pepper and paprika.",
      "Preheat the air fryer.",
      "Cook the chicken thighs until golden and cooked through.",
      "Rest for a few minutes before serving.",
    ],
    ingredients: ["chicken thighs", "paprika", "salt", "pepper", "olive oil"],
  },
  {
    title: "Air Fryer Chips",
    description: "Homemade chips cooked with less oil.",
    prepTime: "25 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "air-fryer-recipes",
    instructions: [
      "Cut the potatoes into chips.",
      "Toss with olive oil and salt.",
      "Cook in the air fryer until crispy.",
      "Shake halfway through cooking.",
    ],
    ingredients: ["potato", "olive oil", "salt"],
  },
  {
    title: "Chicken Salad Bowl",
    description: "A healthy bowl with chicken, lettuce, tomato and cucumber.",
    prepTime: "15 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "healthy-recipes",
    instructions: [
      "Cook and slice the chicken.",
      "Chop lettuce, tomato and cucumber.",
      "Add everything to a bowl.",
      "Drizzle with olive oil.",
      "Serve fresh.",
    ],
    ingredients: ["chicken", "lettuce", "tomato", "cucumber", "olive oil"],
  },
  {
    title: "Vegetable Stir Fry",
    description: "Quick vegetable stir fry with soy sauce.",
    prepTime: "15 min",
    difficulty: "Easy",
    servings: 2,
    country: "Global",
    categorySlug: "healthy-recipes",
    instructions: [
      "Slice the vegetables.",
      "Heat oil in a pan.",
      "Add vegetables and stir fry for a few minutes.",
      "Add soy sauce.",
      "Serve with rice or noodles.",
    ],
    ingredients: ["broccoli", "carrot", "pepper", "soy sauce", "rice"],
  },
  {
    title: "Spaghetti Bolognese",
    description: "A simple version of the classic pasta dish.",
    prepTime: "35 min",
    difficulty: "Medium",
    servings: 3,
    country: "Global",
    categorySlug: "world-recipes",
    instructions: [
      "Cook the pasta.",
      "Fry onion and minced beef.",
      "Add tomato sauce.",
      "Simmer until thick.",
      "Serve sauce over spaghetti.",
    ],
    ingredients: ["spaghetti", "minced beef", "onion", "tomato sauce"],
  },
  {
    title: "Tomato Pasta",
    description: "Affordable pasta with tomato sauce and garlic.",
    prepTime: "15 min",
    difficulty: "Easy",
    servings: 2,
    country: "Global",
    categorySlug: "budget-meals",
    instructions: [
      "Cook the pasta.",
      "Fry garlic in olive oil.",
      "Add tomato sauce.",
      "Mix with pasta.",
      "Serve hot.",
    ],
    ingredients: ["pasta", "tomato sauce", "garlic", "olive oil"],
  },
  {
    title: "Egg Fried Noodles",
    description: "Fast noodles with egg and vegetables.",
    prepTime: "15 min",
    difficulty: "Easy",
    servings: 2,
    country: "Global",
    categorySlug: "quick-meals",
    instructions: [
      "Cook the noodles.",
      "Scramble the egg in a pan.",
      "Add vegetables.",
      "Add noodles and soy sauce.",
      "Mix and serve.",
    ],
    ingredients: ["noodles", "egg", "carrot", "pepper", "soy sauce"],
  },
  {
    title: "Chicken Wrap",
    description: "Simple chicken wrap with lettuce and tomato.",
    prepTime: "15 min",
    difficulty: "Easy",
    servings: 1,
    country: "UK",
    categorySlug: "quick-meals",
    instructions: [
      "Cook and slice the chicken.",
      "Warm the tortilla wrap.",
      "Add lettuce, tomato and chicken.",
      "Add mayonnaise if desired.",
      "Wrap and serve.",
    ],
    ingredients: ["chicken", "tortilla wrap", "lettuce", "tomato", "mayonnaise"],
  },
  {
    title: "Rice and Beans",
    description: "A simple Brazilian-style rice and beans meal.",
    prepTime: "30 min",
    difficulty: "Easy",
    servings: 2,
    country: "Brazil",
    categorySlug: "brazilian-recipes",
    instructions: [
      "Cook the rice with garlic and salt.",
      "Heat the beans in a pan.",
      "Season with onion and garlic.",
      "Serve rice and beans together.",
    ],
    ingredients: ["rice", "beans", "garlic", "onion", "salt"],
  },
  {
    title: "Brazilian Chicken Stroganoff",
    description: "Brazilian-style chicken stroganoff with cream and tomato sauce.",
    prepTime: "30 min",
    difficulty: "Easy",
    servings: 3,
    country: "Brazil",
    categorySlug: "brazilian-recipes",
    instructions: [
      "Dice and cook the chicken.",
      "Add onion and garlic.",
      "Add tomato sauce and cream.",
      "Simmer until creamy.",
      "Serve with rice.",
    ],
    ingredients: ["chicken", "rice", "cream", "tomato sauce", "onion", "garlic"],
  },
  {
    title: "Banana Pancakes",
    description: "Simple pancakes made with banana and egg.",
    prepTime: "12 min",
    difficulty: "Easy",
    servings: 1,
    country: "Global",
    categorySlug: "healthy-recipes",
    instructions: [
      "Mash the banana in a bowl.",
      "Mix with eggs.",
      "Cook small pancakes in a pan.",
      "Flip carefully and serve warm.",
    ],
    ingredients: ["banana", "egg"],
  },
  {
    title: "Chicken Soup",
    description: "Comforting chicken soup with vegetables.",
    prepTime: "40 min",
    difficulty: "Easy",
    servings: 3,
    country: "UK",
    categorySlug: "healthy-recipes",
    instructions: [
      "Cook chicken in a pot with water.",
      "Add chopped vegetables.",
      "Simmer until everything is tender.",
      "Season and serve warm.",
    ],
    ingredients: ["chicken", "carrot", "potato", "onion", "salt"],
  },
  {
    title: "Potato and Egg Hash",
    description: "Budget-friendly potato and egg pan meal.",
    prepTime: "20 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "budget-meals",
    instructions: [
      "Dice the potatoes.",
      "Fry potatoes until soft and golden.",
      "Add onion.",
      "Crack eggs into the pan.",
      "Cook until eggs are set.",
    ],
    ingredients: ["potato", "egg", "onion", "oil"],
  },
  {
    title: "Chickpea Curry",
    description: "Simple vegetarian curry using chickpeas and tomato.",
    prepTime: "25 min",
    difficulty: "Easy",
    servings: 2,
    country: "Global",
    categorySlug: "world-recipes",
    instructions: [
      "Fry onion and garlic.",
      "Add curry powder.",
      "Add chickpeas and tomato sauce.",
      "Simmer until thick.",
      "Serve with rice.",
    ],
    ingredients: ["chickpeas", "rice", "onion", "garlic", "tomato sauce", "curry powder"],
  },
  {
    title: "Chicken Quesadilla",
    description: "Cheesy chicken tortilla meal.",
    prepTime: "18 min",
    difficulty: "Easy",
    servings: 2,
    country: "Global",
    categorySlug: "world-recipes",
    instructions: [
      "Cook and shred the chicken.",
      "Place cheese and chicken inside a tortilla.",
      "Cook in a pan until golden.",
      "Slice and serve.",
    ],
    ingredients: ["chicken", "cheese", "tortilla wrap"],
  },
  {
    title: "Avocado Toast with Egg",
    description: "Quick breakfast with avocado, toast and egg.",
    prepTime: "12 min",
    difficulty: "Easy",
    servings: 1,
    country: "UK",
    categorySlug: "healthy-recipes",
    instructions: [
      "Toast the bread.",
      "Mash the avocado.",
      "Cook the egg.",
      "Spread avocado on toast and top with egg.",
    ],
    ingredients: ["bread", "avocado", "egg"],
  },
  {
    title: "Pesto Pasta",
    description: "Simple pasta with pesto and cheese.",
    prepTime: "15 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "quick-meals",
    instructions: [
      "Cook the pasta.",
      "Drain and mix with pesto.",
      "Add cheese on top.",
      "Serve warm.",
    ],
    ingredients: ["pasta", "pesto", "cheese"],
  },
  {
    title: "Sausage and Mash",
    description: "Classic British meal with sausages and mashed potatoes.",
    prepTime: "30 min",
    difficulty: "Easy",
    servings: 2,
    country: "UK",
    categorySlug: "budget-meals",
    instructions: [
      "Cook the sausages.",
      "Boil and mash the potatoes.",
      "Prepare gravy if available.",
      "Serve sausages with mash.",
    ],
    ingredients: ["sausage", "potato", "butter", "milk", "gravy"],
  },
  {
    title: "Chicken and Rice Bake",
    description: "Oven-baked chicken and rice meal.",
    prepTime: "45 min",
    difficulty: "Medium",
    servings: 3,
    country: "UK",
    categorySlug: "budget-meals",
    instructions: [
      "Add rice, chicken and stock to a baking dish.",
      "Season well.",
      "Bake until chicken is cooked and rice is tender.",
      "Serve hot.",
    ],
    ingredients: ["chicken", "rice", "stock", "onion"],
  },
  {
    title: "Brazilian Carrot Rice",
    description: "Simple Brazilian-style rice with carrot.",
    prepTime: "20 min",
    difficulty: "Easy",
    servings: 2,
    country: "Brazil",
    categorySlug: "brazilian-recipes",
    instructions: [
      "Fry garlic and carrot.",
      "Add rice and water.",
      "Cook until rice is soft.",
      "Serve hot.",
    ],
    ingredients: ["rice", "carrot", "garlic", "salt"],
  },
  {
  title: "Healthy Egg Spread",
  description: "A high-protein creamy egg spread made with Greek yogurt, mustard and fresh herbs.",
  imageUrl: "./assets/images/recipes/healthy-egg-spread.png",
  prepTime: "20 min",
  difficulty: "Easy",
  servings: 4,
  country: "UK",
  categorySlug: "healthy-recipes",
  instructions: [
    "Boil the eggs until firm.",
    "Cool and peel the eggs.",
    "Mix with yogurt, mustard and olive oil.",
    "Add seasonings and herbs.",
    "Mash until creamy.",
    "Refrigerate before serving."
  ],
  ingredients: [
    "egg",
    "greek yogurt",
    "mustard",
    "olive oil",
    "garlic",
    "lemon juice",
    "salt",
    "black pepper",
    "parsley",
    "chives"
  ],
},

{
  title: "Shrimp Risotto with Salmon",
  description: "Creamy shrimp risotto served with oven baked salmon.",
  imageUrl: "./assets/images/recipes/shrimp-risotto-with-salmon.png",
  prepTime: "45 min",
  difficulty: "Easy",
  servings: 3,
  country: "Brazil",
  categorySlug: "world-recipes",
  instructions: [
    "Bake the salmon.",
    "Cook the shrimp.",
    "Prepare the risotto slowly adding stock.",
    "Add shrimp and parmesan.",
    "Serve with salmon."
  ],
  ingredients: [
    "shrimp",
    "salmon",
    "arborio rice",
    "leek",
    "onion",
    "white wine",
    "vegetable stock",
    "parmesan",
    "lemon"
  ],
},

{
  title: "Peruvian Causa",
  description: "Traditional Peruvian layered potato dish with shrimp and avocado.",
  imageUrl: "./assets/images/recipes/peruvian-causa.png",
  prepTime: "60 min",
  difficulty: "Medium",
  servings: 6,
  country: "Peru",
  categorySlug: "world-recipes",
  instructions: [
    "Cook and mash the potatoes.",
    "Season the potato mixture.",
    "Prepare the shrimp filling.",
    "Layer potatoes, shrimp and avocado.",
    "Decorate and serve."
  ],
  ingredients: [
    "potato",
    "shrimp",
    "avocado",
    "quail egg",
    "red onion",
    "yellow pepper",
    "lime",
    "olive",
    "coriander"
  ],
},

{
  title: "Greek Stuffed Cabbage Rolls",
  description: "Rice and minced beef wrapped in cabbage and kale leaves.",
  imageUrl: "./assets/images/recipes/greek-stuffed-cabbage-rolls.png",
  prepTime: "50 min",
  difficulty: "Easy",
  servings: 20,
  country: "Greece",
  categorySlug: "world-recipes",
  instructions: [
    "Mix rice, beef and vegetables.",
    "Fill cabbage leaves.",
    "Roll tightly.",
    "Cook slowly until tender."
  ],
  ingredients: [
    "rice",
    "minced beef",
    "bacon",
    "onion",
    "carrot",
    "cabbage",
    "kale"
  ],
},

{
  title: "Argentinian Empanadas",
  description: "Traditional baked pastries filled with seasoned beef.",
  imageUrl: "./assets/images/recipes/argentinian-empanadas.png",
  prepTime: "80 min",
  difficulty: "Easy",
  servings: 50,
  country: "Argentina",
  categorySlug: "world-recipes",
  instructions: [
    "Prepare the dough.",
    "Cook the beef filling.",
    "Fill the pastry discs.",
    "Seal the edges.",
    "Bake until golden."
  ],
  ingredients: [
    "flour",
    "minced beef",
    "onion",
    "garlic",
    "tomato",
    "cumin",
    "egg"
  ],
},

{
  title: "Spanish Seafood Paella",
  description: "Classic Spanish rice dish with seafood and saffron.",
  imageUrl: "./assets/images/recipes/spanish-seafood-paella.png",
  prepTime: "90 min",
  difficulty: "Easy",
  servings: 6,
  country: "Spain",
  categorySlug: "world-recipes",
  instructions: [
    "Cook seafood and vegetables.",
    "Add rice and saffron.",
    "Add stock and simmer.",
    "Return seafood to the pan.",
    "Serve with parsley."
  ],
  ingredients: [
    "rice",
    "shrimp",
    "squid",
    "fish",
    "mussels",
    "clams",
    "peas",
    "carrot",
    "red pepper",
    "saffron"
  ],
},

{
  title: "German Pork Knuckle with Potatoes",
  description: "Traditional German crispy pork knuckle served with potatoes.",
  imageUrl: "./assets/images/recipes/german-pork-knuckle-with-potatoes.png",
  prepTime: "120 min",
  difficulty: "Medium",
  servings: 4,
  country: "Germany",
  categorySlug: "world-recipes",
  instructions: [
    "Season the pork knuckle.",
    "Pressure cook until tender.",
    "Fry until crispy.",
    "Prepare the potatoes.",
    "Serve together."
  ],
  ingredients: [
    "pork knuckle",
    "potato",
    "garlic",
    "onion",
    "bay leaf",
    "vinegar"
  ],
},

{
  title: "BBQ Pork Ribs with Rustic Potatoes",
  description: "Slow cooked pork ribs glazed with barbecue sauce and served with crispy potatoes.",
  imageUrl: "./assets/images/recipes/bbq-pork-ribs-with-potatoes.png",
  prepTime: "120 min",
  difficulty: "Easy",
  servings: 8,
  country: "USA",
  categorySlug: "world-recipes",
  instructions: [
    "Prepare the barbecue sauce.",
    "Season and bake the ribs.",
    "Prepare the potatoes with rosemary.",
    "Glaze the ribs with sauce.",
    "Bake until caramelised."
  ],
  ingredients: [
    "pork ribs",
    "potato",
    "ketchup",
    "brown sugar",
    "mustard",
    "garlic",
    "rosemary"
  ],
},
];

async function main() {
  console.log("🌱 Starting database seed...");

  await prisma.recipeGeneration.deleteMany();
  await prisma.product.deleteMany();
  await prisma.recipeIngredient.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.ingredient.deleteMany();
  await prisma.category.deleteMany();

  const categoryMap = {};

  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: category,
    });

    categoryMap[category.slug] = createdCategory;
  }

  const ingredientMap = {};

  const uniqueIngredients = [
    ...new Set(
      recipes.flatMap((recipe) => recipe.ingredients.map((ingredient) => ingredient.toLowerCase()))
    ),
  ];

  for (const ingredient of uniqueIngredients) {
    const createdIngredient = await prisma.ingredient.create({
      data: {
        name: ingredient,
        slug: ingredient.replaceAll(" ", "-"),
      },
    });

    ingredientMap[ingredient] = createdIngredient;
  }

  for (const recipe of recipes) {
  const createdRecipe = await prisma.recipe.create({
    data: {
      title: recipe.title,
      description: recipe.description,
      imageUrl: recipe.imageUrl || null,
      prepTime: recipe.prepTime,
      difficulty: recipe.difficulty,
      servings: recipe.servings,
      country: recipe.country,
      instructions: recipe.instructions,
      categoryId: categoryMap[recipe.categorySlug].id,
    },
  });

  for (const ingredient of recipe.ingredients) {
    await prisma.recipeIngredient.create({
      data: {
        recipeId: createdRecipe.id,
        ingredientId: ingredientMap[ingredient.toLowerCase()].id,
      },
    });
  }
} 

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
