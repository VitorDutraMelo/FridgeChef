const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const recipeRoutes = require("./routes/recipeRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "FridgeChef API is running 🚀",
    status: "healthy",
  });
});

app.use(recipeRoutes);

app.use(errorHandler);

module.exports = app;
