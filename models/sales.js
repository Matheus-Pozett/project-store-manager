const connection = require('./connection');

const getAllSales = async () => {
  const SQL = `
  SELECT
    sales.id AS saleId,
    sales.date,
    sales_products.product_id AS productId,
    sales_products.quantity
  FROM
    StoreManager.sales
  INNER JOIN 
    StoreManager.sales_products
  ON 
    sales.id = sales_products.sale_id
  `;
  const [result] = await connection.execute(SQL);

  return result;
};

const getSalesById = async (id) => {
  const SQL = `
  SELECT 
    sales.date,
    sales_products.product_id AS productId,
    sales_products.quantity
  FROM
    StoreManager.sales
  INNER JOIN
    StoreManager.sales_products
  ON 
    sales.id = sales_products.sale_id
  WHERE 
    sales.id = ?;
  `;
  const [result] = await connection.execute(SQL, [id]);

  return result;
};

const createSales = async (sales) => {
  const SQL_ID = 'INSERT INTO StoreManager.sales (date) VALUES  (now());';
  const [result] = await connection.execute(SQL_ID);
  const id = result.insertId;

  const itemsSold = await Promise.all(sales.map(async ({ productId, quantity }) => {
    const SQL = `
    INSERT INTO 
      StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES 
      (?, ?, ?)
    `;
    await connection.execute(SQL, [id, productId, quantity]);

    return { productId, quantity };
  }));
  
  return { 
    id, 
    itemsSold,
  };
};

module.exports = {
  getSalesById,
  getAllSales,
  createSales,
};