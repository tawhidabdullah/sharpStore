const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
const expressValidator = require("express-validator");
const multer = require("multer");
const path = require("path");

// relative import
// importing the router of USERS
const users = require("./routes/api/users");
const adminProducts = require("./routes/adminRoutes/adminProducts");
// initialize app
const app = express();
const fileStorage = multer.

({
  destination: function(req, file, cb) {

    
    cb(null, "images"); multer.memoryStorage
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  }
});

// Body parser middleware
app.use(multer({ storage: fileStorage }).single("productImage"));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//file parsing a configuring ////////////////////////////////////////////
// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, new Date().toISOString() + "-" + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

app.use("/images", express.static(path.join(__dirname, "images")));
// Db config
const db = require("./config/keys").mongoURI;

// connect to mongoDB...
mongoose
  .connect(db)
  .then(() => console.log("mongoDB Connected !"))
  .catch(err => console.log(err));

// PASSPORT middleware
app.use(passport.initialize());

// PASSPORT CONFIG

require("./config/passport")(passport);

app.use("/api/users", users); // use Router() =>middleware (const router = express.Router());
app.use("/api/admin/product", adminProducts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Tawhid Abdullah is a great programmer, server is runnig on ${port}...`
  );
});
