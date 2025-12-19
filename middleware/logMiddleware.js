const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next(); // Обязательно вызываем next()
};
module.exports = logMiddleware;