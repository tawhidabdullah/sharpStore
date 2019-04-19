const express = require("express");
const passport = require("passport");
const route = express.Router();

// GET PRODUCT MODEL
const Product = require("../../models/Product");

// GET CATEGORY MODEL
const Catagory = require("../../models/Catagory");

// LOAD VALIDATAION
// load input register  validation
const validateProdctInput = require("../../validation/products");

// @route POST /api/admin/products/addProducts
// @decription add products and save to database
// @access Private

route.post(
  "/addProduct",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // bringing the validations : error , isValid
    const { errors, isValid } = validateProdctInput(req.body);

    let image = req.file;

    if (!image) {
      errors.imgError = "img shoud be send buddy";
    }

    // if input is not valid then send and error response
    if (!isValid) {
      return res.status(400).json(errors);
    }
    let imgUrl = image.path;

    const productFields = {};

    // create a new post by Post classs / post model

    (productFields.title = req.body.title),
      (productFields.desc = req.body.desc),
      (productFields.category = req.body.category),
      (productFields.price = req.body.price),
      (productFields.productImage = imgUrl);

    // search the user by loged in user id
    Product.findOne({ _id: req.body._id }).then(product => {
      // if we have a product we are gonna update it
      if (product) {
        Product.findOneAndUpdate(
          { _id: req.body._id },
          { $set: productFields },
          { new: true }
        ).then(product => {
          res.json(product);
        });
      }
      // if dont we are gonna create a product
      else {
        // if the handle is not exist then create a new profile with the given data
        new Product(productFields)
          .save()
          .then(product => res.json(product))
          .catch(err => res.status(404).send("some thing went wrong"));
      }
    });
  }
);

// @route DELETE /api/posts/:post_id
// @decription  DELETE a specific post by id
// @access Private

route.delete(
  "/deleteProduct/:product_id",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    Product.findById(req.params.product_id)
      .then(product => {
        // delete
        product
          .remove()
          .then(() => console.log("product deleted successfully"));
      })
      .catch(error => res.json(error));

    Product.find().then(product =>
      res.json({
        product: product
      })
    );
  }
);

module.exports = route;
