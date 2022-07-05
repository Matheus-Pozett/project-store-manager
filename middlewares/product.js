const productSchemas = require('../schemas/productValidations');

const productValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = productSchemas.validate({ name });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
};

module.exports = { productValidation };