const mongoose = require('mongoose');

const customerCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

const CustomerCategory = mongoose.model('CustomerCategory', customerCategorySchema);

module.exports = CustomerCategory;
