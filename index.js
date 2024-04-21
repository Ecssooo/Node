const express = require("express");
const routes = require("./routes/start");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
