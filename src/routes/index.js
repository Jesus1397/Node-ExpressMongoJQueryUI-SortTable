const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const products = await Product.find().sort('sorting')
  res.render("index", {
    products: products
  });
  console.log("Productos de la DB:\n " + products);
});

router.post("/add-product", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();

  res.redirect("/");
});

router.post("/products/ordering", async (req, res) => {
  const ids = req.body["id[]"];
  for (let i = 0; i < ids.length; i++) {
    const product = await Product.findById(ids[i]);
    product.sorting = i;
    await product.save();
  }
  res.send("Ordered");
});

module.exports = router;
