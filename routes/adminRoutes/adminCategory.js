const express = require("express");
const passport = require("passport");
const router = express.Router();

const Category = require("../../models/catagory");

router.post(
  "/addCategory",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // bringing the validations : error , isValid
    const { errors, isValid } = validateProdctInput(req.body);

    // if input is not valid then send and error response
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const title = req.body.title;

    // create a new post by Post classs / post model

    Category.find({ title: title }).then(category => {
      if (!category) {
        const newCategory = new Category({
          title: title
        });

        newCategory.save();
      }
      res.json({ msg: "Category name is already exist" });
    });
  }
);

module.exports = router;
