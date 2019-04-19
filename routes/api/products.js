const express = require("express");
const passport = require("passport");
const route = express.Router();
const Product = require("../../models/Product");

//IMPORT PRODUCTS CONSTROLLERS
const productsControllers = require("../../controllers/products");

// @route GETG /api/products/getProducts
// @decription get products from database
// @access Private

route.get("/getProduct", productsControllers.getProducts);

// @route GET /api/products/getProducts/:product_id
// @decription  Get a specific post by id
// @access Private

route.get("/:product_id", productsControllers.getAProduct);

// @route POST /api/products/review/:product_id
// @decription Add review
// @access Private

route.post(
  "/addProductReview/:product_id",
  passport.authenticate("jwt", { session: false }),
  productsControllers.addProductReview
);

module.exports = route;
