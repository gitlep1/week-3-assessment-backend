const data = require("./Data.json");

const getAllItems = () => {
  try {
    const items = data;
    return items;
  } catch (error) {
    return error;
  }
};

const getItemById = (id) => {
  try {
    const item = data.find((item) => item.id === id);
    return item;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllItems, getItemById };
