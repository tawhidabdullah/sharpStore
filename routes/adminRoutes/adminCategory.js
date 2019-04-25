const express = require("express");
const passport = require("passport");
const router = express.Router();

// IMPORT CATEGORY CONTROLLERS
const categoryControllers = require("../../controllers/category");

// GET CATEGORIES

router.get("/getCategories", categoryControllers.getCategories);

// POST CATEGORY
router.post(
  "/addCategory",
  passport.authenticate("jwt", { session: false }),
  categoryControllers.addCatagory
);

// DELETE CATEGORY
router.delete(
  "/deleteCategory/:category_id",
  passport.authenticate("jwt", { session: false }),
  categoryControllers.deleteCategory
);

module.exports = router;
