const express = require("express");
const { Router } = require("express");
const productListRouter = Router();

//contenedor
const Contenedor = require("../controller/controller")

productListRouter.get("/", (req, res) => {
    const productos = Contenedor.getAll()
    res.status(200).json(productos); 
});
 
module.exports = productListRouter;