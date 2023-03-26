const express = require("express");
const routes = require("./routes");

const app = express();
routes(app);

const port = process.env.DATABASE_PORT;
app?.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
