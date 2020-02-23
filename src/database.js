const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/tablajquery", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => {
    console.log("DB connect");
  })
  .catch(error => {
    console.log("DB error: " + error);
  });
