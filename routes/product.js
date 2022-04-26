const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.post("/product", async (req, res) => {
  try {
    const { name, address, phone, product } = req.body;

    const newProduct = await new Product({
      name,
      address,
      phone,
      product,
    });

    const prodduct = await newProduct.save();
    res.status(200).json(prodduct);
  } catch (error) {
    res.status(500).json(error + "error saving data");
  }
});

module.exports = router;
