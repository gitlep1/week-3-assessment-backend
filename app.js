const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

module.exports = app;
