const express = require("express");
const passport = require("passport");
const route = express.Router();
const mkdirp = require("mkdirp");
const fs = require("fs-extra");
const resizeImg = require("resize-img");

// GET PRODUCT MODEL
const Product = require("../../models/Product");

// GET CATEGORY MODEL
const Catagory = require("../../models/Catagory");

// LOAD VALIDATAION
// load input register  validation
const validateProdctInput = require("../../validation/products");

route.get("/addProduct", (req, res) => {
  Product.find()
    .then(product => {
      res.json({
        product: product
      });
    })
    .catch(err => console.log(err));
});

// @route POST /api/admin/products/addProducts
// @decription add products and save to database
// @access Private

route.post("/addProduct", (req, res) => {
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

  // create a new post by Post classs / post model
  const newProduct = new Product({
    title: req.body.title,
    desc: req.body.desc,
    category: req.body.category,
    price: req.body.price,
    productImage: imgUrl
  });

  newProduct.save();
});

module.exports = route;
