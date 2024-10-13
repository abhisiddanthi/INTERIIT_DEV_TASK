const Godown = require('../models/Godown');

exports.getGodowns = async (req, res) => {
  try {
    const godowns = await Godown.find();
    res.json(godowns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createGodown = async (req, res) => {
  const { name, parent_id } = req.body; 
  try {
    const newGodown = new Godown({ name, parent_id });
    await newGodown.save();
    res.status(201).json(newGodown);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
