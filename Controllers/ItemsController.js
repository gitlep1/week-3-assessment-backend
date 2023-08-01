const express = require("express");
const items = express.Router();

const { getAllItems, getItemById } = require("../ItemsData/ItemsData");

items.get("/", (req, res) => {
  const allItems = getAllItems();

  if (allItems) {
    res.status(200).json({ data: allItems });
  } else {
    res.status(404).json({ error: "No items found" });
  }
});

items.get("/:id", (req, res) => {
  const { id } = req.params;

  const item = getItemById(id);

  if (item) {
    res.status(200).json({ data: item });
  } else {
    res.status(404).json({ error: "No item found" });
  }
});

module.exports = items;
