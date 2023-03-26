const express = require("express");
const routes = require("./routes");
const cors = require("./config/cors");

const app = express();
app?.use(cors);
routes(app);

const port = process.env.DATABASE_PORT;
app?.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
