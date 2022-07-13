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

const createProduct = async (name) => {
  const createdProduct = await productModels.createProduct(name);

  return { status: 201, result: createdProduct };
};

const updateProduct = async (id, name) => {
  const product = await productModels.getProductsById(id);

  if (!product.length) return { status: 404, result: { message: 'Product not found' } };

  await productModels.updateProduct(id, name);

  return { status: 200, result: { id, name } };
};

const deleteProduct = async (id) => {
  const product = await productModels.getProductsById(id);

  if (!product.length) { return { status: 404, result: { message: 'Product not found' } }; }

  await productModels.deleteProduct(id);

  return { status: 204, result: 'No content' };
};
  
module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};