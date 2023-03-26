const bodyParser = require("body-parser");
const examRoutes = require("./examRoutes");
const cors = require("../config/cors");

module.exports = (app) => {
  app?.use(bodyParser.json());
  app?.use(cors);

  app?.use(examRoutes);
};
