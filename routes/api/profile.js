const express = require("express");
const router = express.Router();
const passport = require("passport");

// load PROFILE model
const Profile = require("../../models/Profile");

// load USER model
const User = require("../../models/user");

// @route GET /api/profile/test
// @decription Test profile routes
// @access Public

router.get("/test", (req, res) => {
  res.json({
    msg: "profile are here babe !"
  });
});

// @route GET /api/profile
// @decription  profile routes
// @access Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(current_user => {
        if (!current_user) {
          errors.noProfile = "There is no profile for the user";
          res.status(404).json(errors);
        }
        res.json(current_user); // send current_user to the client
      })
      .catch(error => {
        res.status(404).json(err);
      });
  }
);

// @route GET /api/profile/all
// @decription  Get all the profile by ____
// @access public

router.get("/all", (req, res) => {
  const errors = {};
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.noProfile = "we have no profile created yet";
        res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch(error => res.status(400).json(error));
});

// @route GET /api/profile/handle/:handle
// @decription  Get profile by handle
// @access public

router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(error => res.status(404).json(error));
});

// @route GET /api/profile/user/:user_id
// @decription  Get profile by id
// @access public

router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(error =>
      res.status(404).json({ profile: "There is not profile for this user" })
    );
});

module.exports = router;
