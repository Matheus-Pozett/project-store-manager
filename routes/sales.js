const express = require('express');
const salesControllers = require('../controllers/sales');
const validate = require('../middlewares/sales');

const saleRouter = express.Router();

saleRouter.post('/', validate.salesValidation, salesControllers.create);

module.exports = saleRouter;
