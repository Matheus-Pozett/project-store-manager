const salesServices = require('../services/sales');

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
  create,
};