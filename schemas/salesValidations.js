const Joi = require('joi');

const itemsSold = Joi.object({
  productId: Joi.number().integer().positive().required()
.messages({
  'any.required': '400|"productId" is required',
  }),
  quantity: Joi.number().integer().positive().required()
.messages({
  'any.required': '400|"quantity" is required',
  'number.positive': '422|"quantity" must be greater than or equal to 1',
  }),
});

const sales = Joi.array().items(itemsSold);

module.exports = sales;
