const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_id: { type: String, required: true, unique: true }, // Use a string for item_id
  name: { type: String, required: true },                   // Required field
  quantity: { type: Number, required: true },               // Required field
  category: { type: String, required: true },               // Required field
  price: { type: Number, required: true },                  // Required field
  status: { type: String, required: true },                 // Required field
  godown_id: { type: String, required: true },             // Keep it as a string to match your data structure
  brand: { type: String },                                  // Optional field
  attributes: {
    wattage: { type: Number },                              // Optional field for attributes
    voltage: { type: Number },                              // Optional field for attributes
    color: { type: String }                                 // Optional field for attributes
  },
  image_url: { type: String }                               // Optional field
});

module.exports = mongoose.model('Item', itemSchema);
