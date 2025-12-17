const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    // boys | girls | unisex
    category: {
      type: String,
      enum: ["boys", "girls", "unisex"],
      required: true
    },

    // combo | tshirt | short | cap | jacket | socks
    productType: {
      type: String,
      enum: ["combo", "tshirt", "short", "cap", "jacket", "socks"],
      required: true
    },

    images: {
      type: [String],
      default: []
    },

    description: String,

    stock: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = model("product", productSchema);
