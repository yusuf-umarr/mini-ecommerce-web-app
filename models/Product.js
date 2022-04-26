const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },

  product: {
    type: String,
  },
  createdAt: {
    type: Date,

    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", ProductSchema);
