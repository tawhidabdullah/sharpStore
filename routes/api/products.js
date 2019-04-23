const express = require("express");
const passport = require("passport");
const router = express.Router();
// const Product = require("../../models/Product");

//IMPORT PRODUCTS CONSTROLLERS
const productsControllers = require("../../controllers/products");

// @route GETG /api/products/getProducts
// @decription get products from database
// @access Private

router.get("/getProduct", productsControllers.getProducts);

// @router GET /api/products/getProducts/:product_id
// @decription  Get a specific post by id
// @access Private

router.get("/getAProduct/:product_id", productsControllers.getAProduct);

// @router POST /api/products/review/:product_id
// @decription Add review
// @access Private

router.post(
  "/addProductReview/:product_id",
  passport.authenticate("jwt", { session: false }),
  productsControllers.addProductReview
);

module.exports = router;
