// routes/customerCategoryRoutes.js
const express = require('express');
const router = express.Router();
const CustomerCategory = require('../models/CustomerCategory');

// Create a new customer category
router.post('/customer-categories', async (req, res) => {
  try {
    const { categoryCode, categoryName } = req.body;
    const customerCategory = new CustomerCategory({ categoryCode, categoryName });
    await customerCategory.save();
    res.status(201).json({ success: true, data: customerCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all customer categories
router.get('/customer-categories', async (req, res) => {
  try {
    const customerCategories = await CustomerCategory.find();
    res.json({ success: true, data: customerCategories });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get a customer category by ID
router.get('/customer-categories/:categoryCode', async (req, res) => {
  try {
    const categoryCode = req.params.categoryCode;
    const customerCategory = await CustomerCategory.findOne({ categoryCode });
    if (!customerCategory) {
      return res.status(404).json({ success: false, message: 'Customer category not found' });
    }
    res.json({ success: true, data: customerCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ... other customer category routes

module.exports = router;
