const salesSchemas = require('../schemas/salesValidations');

const salesValidation = (req, res, next) => {
  const { error } = salesSchemas.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
};

module.exports = { salesValidation };