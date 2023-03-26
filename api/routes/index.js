const bodyParser = require("body-parser");
const examRoutes = require("./examRoutes");

module.exports = async (app) => {
  app?.use(bodyParser.json());

  app?.use(examRoutes);
};
