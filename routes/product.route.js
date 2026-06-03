const express = require("express");
const productRouter = express.Router();

const {
  createProducts,
  allProducts,
  ProductById,
} = require("../controllers/product.controller");

productRouter.post("/", createProducts);
productRouter.get("/", allProducts);
productRouter.get("/:id", ProductById);

module.exports = productRouter;
