const bodyParser = require("body-parser");
const examRoutes = require("./examRoutes");
const cors = require("cors");

module.exports = async (app) => {
  app?.use(bodyParser.json());
  // app?.use(cors());

  app?.get("/", (req, res) =>
    res?.status(200)?.send({ message: "Welcome to DNA service" }),
  );

  app?.use(examRoutes);
};
