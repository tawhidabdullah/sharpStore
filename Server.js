const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
const expressValidator = require("express-validator");
const path = require("path");
const fileUploader = require("express-fileupload");

// relative import
// importing the router of USERS
const users = require("./routes/api/users");
const adminProducts = require("./routes/adminRoutes/adminProducts");
// initialize app
const app = express();


// Body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(fileUploader());

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

app.use(
  expressValidator({
    customValidators: {
      isImage: function(value, filename) {
        var extension = path.extname(filename).toLowerCase();
        switch (extension) {
          case ".jpg":
            return ".jpg";
            break;
          case ".jpeg":
            return ".jpeg";
            break;
          case ".PNG":
            return ".png";
            break;
          case "":
            return ".jpg";
            break;

          default:
            return false;
        }
      }
    }
  })
);

app.use("/api/users", users); // use Router() =>middleware (const router = express.Router());
app.use("/api/admin/products", adminProducts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Tawhid Abdullah is a great programmer, server is runnig on ${port}...`
  );
});
