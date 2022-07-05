const productRoutes = require('./routes/product');

const app = require('./app');
require('dotenv').config();

app.use('/products', productRoutes.productRouter);
app.use('/products/:id', productRoutes.productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
