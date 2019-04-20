const express = require("express");
const passport = require("passport");
const router = express.Router();

//IMPORT PRODUCTS CONSTROLLERS
const productsControllers = require("../../controllers/products");

// GET CATEGORY MODEL
const Catagory = require("../../models/Catagory");

// @route POST /api/admin/products/addProducts
// @decription add products and save to database
// @access Private

router.post(
  "/addProduct",
  passport.authenticate("jwt", { session: false }),
  productsControllers.addProduct
);

// @route DELETE /api/posts/:post_id
// @decription  DELETE a specific post by id
// @access Private

router.delete(
  "/deleteProduct/:product_id",
  passport.authenticate("jwt", {
    session: false
  }),
  productsControllers.deleteProduct
);

// @route DELETE /api/products/rmreview/:post_id
// @decription remove review
// @access Private

router.delete(
  "/rmreview/:product_id/:rmreview_id",
  passport.authenticate("jwt", {
    session: false
  }),
  productsControllers.deleteProductReview
);

module.exports = router;
