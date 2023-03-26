module.exports = (req, res, next) => {
  res?.setHeader("Access-Control-Allow-Origin", req?.header("Origin"));
  res?.removeHeader("x-powered-by");
  res?.setHeader("Access-Control-Allow-Methods", req?.method);
  res?.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
};
