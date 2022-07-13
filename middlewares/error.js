module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    default:
      console.warn(err);
      res.sendStatus(500);
  }
};