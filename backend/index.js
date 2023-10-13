const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const connectDB = require("./config/db");
const products = require("./data/products");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

connectDB(); // Connect to MongoDB

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
