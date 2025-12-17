const Product = require("../models/product.model");

// GET /products
// supports filters:
// /products
// /products?category=boys
// /products?productType=combo
// /products?category=boys&productType=combo
exports.getProducts = async (req, res) => {
  try {
    const { category, productType } = req.query;

    let filter = {};
    if (category) filter.category = category;
    if (productType) filter.productType = productType;

    const products = await Product.find(filter);
    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /products (for admin use later)
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
