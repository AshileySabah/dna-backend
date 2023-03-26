const express = require("express");
const routes = require("./routes");

const app = express();
routes(app);

const port = 4000;
app?.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
