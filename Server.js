const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
const fileUpload = require("express-fileupload");

// relative import
// importing the router of USERS
const users = require("./routes/api/users");
const adminProducts = require("./routes/adminRoutes/adminProducts");
// initialize app
const app = express();

// express fileUplead middlewar
app.use(fileUpload());

// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

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

// Use Routes
// Go to this File for this Routes
app.use("/api/users", users); // use Router() =>middleware (const router = express.Router());
app.use("/api/admin/products", adminProducts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Tawhid Abdullah is a great programmer, server is runnig on ${port}...`
  );
});
