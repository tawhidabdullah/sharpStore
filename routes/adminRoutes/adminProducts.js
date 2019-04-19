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

    let productFields = {};

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
        new Product(profileFields)
          .save()
          .then(product => res.json(product))
          .catch(err => res.status(404).send("some thing went wrong"));
      }
    });

    newProduct.save();
  }
);

module.exports = route;

////////////////////////////////////////////

// route.post(
//   "/addProduct",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     // bringing the validations : error , isValid
//     const { errors, isValid } = validateProdctInput(req.body);

//     let image = req.file;

//     if (!image) {
//       errors.imgError = "img shoud be send buddy";
//     }

//     // if input is not valid then send and error response
//     if (!isValid) {
//       return res.status(400).json(errors);
//     }

//     let imgUrl = image.path;

//     // create a new post by Post classs / post model
//     const newProduct = new Product({
//       title: req.body.title,
//       desc: req.body.desc,
//       category: req.body.category,
//       price: req.body.price,
//       productImage: imgUrl
//     });

//     newProduct.save();
//   }
// );
