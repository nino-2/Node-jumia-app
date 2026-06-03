const mongoose = require("mongoose");
const productModel = require("../models/product.model");
const products = require("../products");

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const createProducts = (req, res) => {
  productModel
    .deleteMany({})
    .then(() => {
      return productModel.insertMany(products);
    })
    .then(() => {
      res.status(201).json({ message: "Products added sucessfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding products", err });
    });
};

const allProducts = (req, res) => {
  const search = req.query.search?.trim();
  const searchRegex = search ? escapeRegex(search) : "";
  const filter = search
    ? {
        $or: [
          { name: { $regex: searchRegex, $options: "i" } },
          { brand: { $regex: searchRegex, $options: "i" } },
          { smbrand: { $regex: searchRegex, $options: "i" } },
          { sellerinfo: { $regex: searchRegex, $options: "i" } },
          { keyfeature: { $regex: searchRegex, $options: "i" } },
          { direction: { $regex: searchRegex, $options: "i" } },
        ],
      }
    : {};

  productModel
    .find(filter)
    .then((products) => {
      // console.log("Fetched Products", products);
      res.json(products);
    })
    .catch((error) => {
      res.status(500).json({ message: "Something went wrong", error });
    });
};
const ProductById = (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid product ID" });
  }

  productModel
    .findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res
          .status(404)
          .json({ status: false, message: "product not found" });
      }
      res.json(product);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ status: false, message: "something went wrong ", err });
    });
};
module.exports = { createProducts, allProducts, ProductById };
