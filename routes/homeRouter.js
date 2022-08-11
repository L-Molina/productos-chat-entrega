const express = require("express");
const { Router } = require("express");
const Contenedor = require("../controller/controller");
const home = Router();

home.get("/", (req, res) => {  
  res.render('form'); 
});

home.post("/", (req, res) => {
  res.redirect('/')
})

module.exports = home;