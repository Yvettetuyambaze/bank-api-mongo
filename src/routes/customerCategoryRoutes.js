const express = require('express');
const router = express.Router();
const customerCategoryController = require('../controllers/customerCategoryController');

// Create a new customer category
router.post('/customer-categories', customerCategoryController.createCustomerCategory);

// Get all customer categories
router.get('/customer-categories', customerCategoryController.getAllCustomerCategories);

// Get a customer category by ID
router.get('/customer-categories/:categoryId', customerCategoryController.getCustomerCategoryById);

// Update a customer category by ID
router.put('/customer-categories/:categoryId', customerCategoryController.updateCustomerCategory);

// Delete a customer category by ID
router.delete('/customer-categories/:categoryId', customerCategoryController.deleteCustomerCategory);

module.exports = router;
