const express = require('express');
const router = express.Router();
const customerCategoryController = require('../controllers/customerCategoryController');

// Create a new customer category
router.post('/customer-categories', customerCategoryController.createCustomerCategory);

// Get all customer categories
router.get('/customer-categories', customerCategoryController.getAllCustomerCategories);

// Get a customer category by ID
router.get('/customer-categories/:customerCategoryId', customerCategoryController.getCustomerCategoryById);

// Update a customer category by ID
router.put('/customer-categories/:customerCategoryId', customerCategoryController.updateCustomerCategoryById);

// Delete a customer category by ID
router.delete('/customer-categories/:customerCategoryId', customerCategoryController.deleteCustomerCategoryById);

module.exports = router;
