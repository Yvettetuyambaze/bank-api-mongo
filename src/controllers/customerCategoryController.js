const CustomerCategory = require('../models/CustomerCategory');

// Create a new customer category
exports.createCustomerCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const customerCategory = new CustomerCategory({ categoryName });
    await customerCategory.save();
    res.status(201).json({ success: true, data: customerCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all customer categories
exports.getAllCustomerCategories = async (req, res) => {
  try {
    const customerCategories = await CustomerCategory.find();
    res.json({ success: true, data: customerCategories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get customer category by ID
exports.getCustomerCategoryById = async (req, res) => {
  try {
    const customerCategoryId = req.params.customerCategoryId;
    const customerCategory = await CustomerCategory.findById(customerCategoryId);
    if (!customerCategory) {
      return res.status(404).json({ success: false, message: 'Customer category not found' });
    }
    res.json({ success: true, data: customerCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update customer category by ID
exports.updateCustomerCategoryById = async (req, res) => {
  try {
    const customerCategoryId = req.params.customerCategoryId;
    const { categoryName } = req.body;
    const updatedCustomerCategory = await CustomerCategory.findByIdAndUpdate(
      customerCategoryId,
      { categoryName },
      { new: true }
    );
    if (!updatedCustomerCategory) {
      return res.status(404).json({ success: false, message: 'Customer category not found' });
    }
    res.json({ success: true, data: updatedCustomerCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete customer category by ID
exports.deleteCustomerCategoryById = async (req, res) => {
  try {
    const customerCategoryId = req.params.customerCategoryId;
    const deletedCustomerCategory = await CustomerCategory.findByIdAndDelete(customerCategoryId);
    if (!deletedCustomerCategory) {
      return res.status(404).json({ success: false, message: 'Customer category not found' });
    }
    res.json({ success: true, data: deletedCustomerCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
