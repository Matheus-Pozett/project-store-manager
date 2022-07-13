const connection = require('./connection');

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
  createSales,
};