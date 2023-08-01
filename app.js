const express = require("express");
const cors = require("cors");

const ItemsController = require("./Controllers/ItemsController");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

app.use("/items", ItemsController);

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

module.exports = app;
