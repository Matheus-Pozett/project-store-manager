const connection = require('./connection');

const getAllProducts = async () => {
  const SQL = 'SELECT * FROM StoreManager.products;';
  const [result] = await connection.execute(SQL);
  return result;
};

const getProductsById = async (id) => {
  const SQL = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(SQL, [id]);

  return result;
};

const createProduct = async (name) => {
  const SQL = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [result] = await connection.execute(SQL, [name]);

  return {
    id: result.insertId,
    name,
  };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};