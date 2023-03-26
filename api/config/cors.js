module.exports = (req, res, next) => {
  res?.setHeader("Access-Control-Allow-Origin", "*");
  res?.removeHeader("x-powered-by");
  res?.setHeader("Access-Control-Allow-Methods", ["GET", "POST"]);
  res?.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
};
