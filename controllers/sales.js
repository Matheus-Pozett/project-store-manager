const salesServices = require('../services/sales');

const getAll = async (_req, res, next) => {
  try {
    const list = await salesServices.getAllSales();

    res.status(list.status).json(list.result);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const list = await salesServices.getSaleById(id);

    if (list.message) return res.status(list.status).json(list.result);

    res.status(list.status).json(list.result);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const sales = req.body;
    const product = sales.map(({ productId }) => productId);
    await salesServices.checkIfExistsProductId(product);
    const created = await salesServices.createSales(sales);

    return res.status(created.status).json(created.result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
};