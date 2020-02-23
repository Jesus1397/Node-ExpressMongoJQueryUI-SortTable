const express = require("express");
const path = require("path");
const ejs_mate = require("ejs-mate");

//Initialization (express and DB)
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejs_mate);
app.set("view engine", "ejs");

//Middlewares
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

//Routes
app.use(require("./routes/index"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Server started
app.listen(app.get("port"), () => {
  console.log("Server on http://localhost:" + app.get("port"));
});
