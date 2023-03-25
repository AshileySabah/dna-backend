const bodyParser = require("body-parser");
const examRoutes = require("./examRoutes");

module.exports = (app) => {
  app?.use(bodyParser.json());
  app?.use(examRoutes);
};
