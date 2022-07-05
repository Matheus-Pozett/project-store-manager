const express = require('express');
const productControllers = require('../controllers/product');

const productRouter = express.Router();

productRouter.get('/', productControllers.getAll);
productRouter.get('/:id', productControllers.getById);
productRouter.post('/', productControllers.create);

module.exports = { productRouter };