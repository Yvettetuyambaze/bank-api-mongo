// models/CustomerCategory.js
const mongoose = require('mongoose');

const customerCategorySchema = new mongoose.Schema({
  categoryCode: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('CustomerCategory', customerCategorySchema);
