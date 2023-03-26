const bodyParser = require("body-parser");
const examRoutes = require("./examRoutes");
const cors = require("cors");

module.exports = (app) => {
  app?.use(bodyParser.json());
  // app.use(cors());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept",
    );
    next();
  });

  app?.get("/", (req, res) =>
    res?.status(200)?.send({ message: "Welcome to DNA service" }),
  );

  app?.use(examRoutes);
};
