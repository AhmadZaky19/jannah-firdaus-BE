const express = require("express");

const Router = express.Router();

const productController = require("./productController");
const middlewareUpload = require("../middleware/uploadProduct");

Router.post("/", middlewareUpload, productController.postProduct);
Router.get("/", productController.getAllProduct);
Router.patch("/:id", middlewareUpload, productController.updateProduct);

module.exports = Router;
