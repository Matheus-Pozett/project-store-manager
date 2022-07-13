const salesModels = require('../models/sales');
const productModels = require('../models/product');
const NotFoundError = require('../errors/NotFoundError');

const getAllSales = async () => {
  const list = await salesModels.getAllSales();

  return { status: 200, result: list };
};

const getSaleById = async (id) => {
  const list = await salesModels.getSalesById(id);

  if (!list.length) return { status: 404, result: { message: 'Sale not found' } };

  return { status: 200, result: list };
};

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
  getAllSales,
  getSaleById,
  createSales,
  checkIfExistsProductId,
};