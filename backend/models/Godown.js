const mongoose = require('mongoose');

const godownSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Use a string for ID, and ensure it's unique
  name: { type: String, required: true },             // Required field
  parent_godown: { type: String, default: null }      // Keep it as a string to match your data structure
});

module.exports = mongoose.model('Godown', godownSchema);
