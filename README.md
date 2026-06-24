# 🍳 FridgeChef

Turn the ingredients you already have into delicious meals in seconds.

FridgeChef is a recipe generator web application that helps users discover recipes based on ingredients they already have at home.

The goal is simple:

Reduce food waste, save money, and make cooking easier.

Initially focused on the United Kingdom market, FridgeChef will later expand globally.

---

## 🚀 Project Vision

Many people open their fridge and ask:

> "What can I cook with what I already have?"

FridgeChef answers that question.

Users enter their available ingredients and receive recipe suggestions from a growing recipe database.

---

## ✨ Features

### Frontend

* Modern responsive design
* Dark mode premium UI
* Country selector (UK / Brazil / Global)
* Ingredient input
* Ingredient chips
* Recipe generation interface
* Popular recipes section
* UK supermarket showcase
* Mobile-first experience
* Smooth animations

### Backend (In Development)

* REST API with Express.js
* PostgreSQL database
* Prisma ORM
* Recipe search engine
* Ingredient matching algorithm
* Recipe generation history
* Validation with Zod
* Error handling

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* Prisma ORM

### Database

* PostgreSQL
* Neon Database

### Validation

* Zod

### Deployment

* Render
* Vercel

---

## 🎯 MVP Goal

The MVP focuses on simplicity.

Users will:

1. Enter ingredients they already have.
2. Generate a recipe suggestion.
3. View recipe instructions.
4. Discover related cooking products.

No AI integration is required for the MVP.

Recipes are stored and retrieved directly from PostgreSQL.

---

## 📂 Project Structure

```bash
fridgechef/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── validations/
│   │   ├── middlewares/
│   │   ├── prisma/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── prisma/
│       └── schema.prisma
│
└── README.md
```

---

## 🗄 Database Models

### Recipe

```text
id
title
description
ingredients
instructions
prepTime
difficulty
servings
imageUrl
category
country
createdAt
```

### Product

```text
id
name
category
country
affiliateUrl
imageUrl
priceLabel
isActive
createdAt
```

### RecipeGeneration

```text
id
ingredientsInput
recipeId
createdAt
```

---

## 🌍 Target Market

Phase 1:

* United Kingdom 🇬🇧

Phase 2:

* Brazil 🇧🇷

Phase 3:

* Global 🌎

---

## 💰 Monetization

Planned monetization strategies:

* Affiliate products
* Google AdSense
* Featured cooking products
* Premium features (future)

---

## 📈 Future Roadmap

* Recipe search improvements
* Better ingredient matching
* User accounts
* Favorites
* Shopping lists
* AI-assisted recipes
* Mobile application

---

## 👨‍💻 Author

Vitor Dutra Melo

Backend Developer focused on building real-world products with modern JavaScript technologies.

---

### ⭐ If you like this project, consider giving it a star.

