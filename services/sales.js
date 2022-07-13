const salesModels = require('../models/sales');
const productModels = require('../models/product');
const NotFoundError = require('../errors/NotFoundError');

const createSales = async (sales) => {
  const createdSales = await salesModels.createSales(sales);

  return { status: 201, result: createdSales };
};

const checkIfExistsProductId = async (arrayOfId) => {
  const items = await productModels.getAllProducts();
  const allIds = items.map(({ id }) => id);

  arrayOfId.forEach((item) => {
    if (!allIds.includes(item)) {
      throw new NotFoundError('Product not found');
    }
  });
};

module.exports = {
  createSales,
  checkIfExistsProductId,
};