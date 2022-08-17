const express = require("express");
const { Router } = require("express");
const productRouter = Router();

//Contenedor
const Contenedor = require("../controller/controller")

productRouter.get("/", (req, res) => {
    const productos = Contenedor.getAll()
    res.render('list', {productos});  
});

productRouter.post("/", (req, res) => { 
    const {name, price, thumbnail} = req.body
    Contenedor.addProduct({name, price, thumbnail})  
    const productos = Contenedor.getAll()
    res.redirect('/');   
});
  
module.exports = productRouter;