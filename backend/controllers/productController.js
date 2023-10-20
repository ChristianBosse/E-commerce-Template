const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Resource not found");
    }
});

module.exports = { getProducts, getProductById };
