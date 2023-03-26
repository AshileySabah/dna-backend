module.exports = async (req, res, next) => {
  res?.setHeader("Access-Control-Allow-Origin", "*");
  res?.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  res?.setHeader("Access-Control-Allow-Credentials", true);
  res?.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS, DELETE",
  );

  if (req?.method === "OPTIONS") {
    return res.status(200).json({
      body: "OK",
    });
  }
  next();
};
