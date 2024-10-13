const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createItem = async (req, res) => {
  const { name, quantity, category, price, status, godown_id, brand, attributes, image_url } = req.body;
  try {
    const newItem = new Item({ name, quantity, category, price, status, godown_id, brand, attributes, image_url });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
