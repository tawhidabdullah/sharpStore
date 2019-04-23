const express = require("express");

const passport = require("passport");

//IMPORT USUERS CONSTROLLERS
const usersControllers = require("../../controllers/users");

// initializing router middleware
const router = express.Router();

// @route GET /api/users/register
// @decription Register user
// @access Public

router.post("/register", usersControllers.registerUser);

// @route GET /api/users/login
// @decription login user / Returns jwt Token
// @access Public

router.post("/login", usersControllers.loginUser);

// @route GET /api/users/currentUser
// @decription return current user
// @access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  usersControllers.getCurrentUser
);

// @route GET /api/users/addWish/:product_id
// @decription add wishlist
// @access Private
router.post(
  "/addWish/:product_id",
  passport.authenticate("jwt", { session: false }),
  usersControllers.addWish
);

// @route GET /api/users/wishLists
// @decription get all the wish lists
// @access Private
router.get(
  "/wishLists",
  passport.authenticate("jwt", { session: false }),
  usersControllers.getWishLists
);

// @route DELTE /api/users/deleteWishList:product_id
// @decription get all the wish lists
// @access Private
router.delete(
  "/deleteWishList/:product_id",
  passport.authenticate("jwt", { session: false }),
  usersControllers.deleteWishList
);

module.exports = router;
