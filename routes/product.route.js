const express = require("express");
const router = express.Router();
const userModel=require('../models/product.model');
const {getProducts, getProduct , createProduct , updateProduct , deleteProduct} = require('../controllers/prodcut.controller.js');

router.get('/',getProducts);

router.get('/:id',getProduct);

router.post('/',createProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);


module.exports= router;