const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.getProducts);
router.post("/", controller.createProduct);

module.exports = router;
