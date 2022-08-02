const express = require("express");
const router = express.Router();

const productRouter = require("./productRouter");
const productListRouter = require("./productListRouter");
const home = require("./homeRouter");

//middleware
router.use("/productos", productRouter);
router.use("/list-products", productListRouter);
router.use("/", home);

module.exports = router;