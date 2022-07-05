const productModels = require('../models/product');

const getAllProducts = async () => {
  const list = await productModels.getAllProducts();

  return { status: 200, result: list };
};

const getProductsById = async (id) => {
  const product = await productModels.getProductsById(id);

  if (!product.length) return { status: 404, result: { message: 'Product not found' } };
    
  return { status: 200, result: product[0] };
};

module.exports = {
  getAllProducts,
  getProductsById,
};