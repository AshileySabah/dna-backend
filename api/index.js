const express = require("express");
const routes = require("./routes");
const cors = require("./config/cors");

const app = express();
routes(app);

app?.use(cors);

const port = process.env.DATABASE_PORT;
app?.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
