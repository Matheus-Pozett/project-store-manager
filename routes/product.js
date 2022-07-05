const express = require('express');
const productControllers = require('../controllers/product');

const productRouter = express.Router();

productRouter.get('/', productControllers.getAll);
productRouter.get('/:id', productControllers.getById);

module.exports = { productRouter };