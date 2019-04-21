const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
const multer = require("multer");
const path = require("path");

// importing the router of USERS
const users = require("./routes/api/users");
const products = require("./routes/api/products");
const adminProducts = require("./routes/adminRoutes/adminProducts");
const adminCategory = require("./routes/adminRoutes/adminCategory");
// initialize app
const app = express();
app.use("/images", express.static("images"));

// Body parser middleware

const multersProperty = require("./validation/multer");

app.use(
  multer({
    storage: multersProperty.storage,
    fileFilter: multersProperty.fileFilter
  }).single("productImage")
);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

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
app.use("/api/products", products);
app.use("/api/admin/product", adminProducts);
app.use("/api/admin/category", adminCategory);

// if production then server statice production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log(
    `Tawhid Abdullah is a great programmer, server is runnig on ${port}...`
  );
});
