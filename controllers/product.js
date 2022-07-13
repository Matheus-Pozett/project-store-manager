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

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const product = await productServices.createProduct(name);

    return res.status(product.status).json(product.result);
  } catch (e) {
    next(e);
  }
};

// const update = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name } = req.body;
//     const product = await productServices.updateProduct(id, name);

//     if (product.message) return res.status(product.status).json(product.result);

//     return res.status(product.status).json(product.result);
//   } catch (e) {
//     next(e);
//   }
// };

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { status, result } = await productServices.deleteProduct(id);

    if (result.message) return res.status(status).json(result);

    return res.status(status).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  // update,
  deleteProduct,
};