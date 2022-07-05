const productServices = require('../services/product');

const getAll = async (_req, res, next) => {
  try {
    const list = await productServices.getAllProducts();

    return res.status(list.status).json(list.result);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productServices.getProductsById(id);

    if (product.message) return res.status(product.status).json(product.result);

    return res.status(product.status).json(product.result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
};