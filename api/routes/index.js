const bodyParser = require("body-parser");
const examRoutes = require("./examRoutes");
const cors = require("cors");

module.exports = async (app) => {
  app?.use(bodyParser.json());
  app?.use(cors());

  app?.use(examRoutes);
};
