const express = require('express');
const productControllers = require('../controllers/product');
const validate = require('../middlewares/product');

const productRouter = express.Router();

productRouter.get('/', productControllers.getAll);
productRouter.get('/:id', productControllers.getById);
productRouter.post('/', validate.productValidation, productControllers.create);
productRouter.put('/:id', productControllers.update);
productRouter.delete('/:id', productControllers.deleteProduct);

module.exports = productRouter;