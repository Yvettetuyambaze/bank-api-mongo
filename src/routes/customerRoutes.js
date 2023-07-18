const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Create a new customer
router.post('/customers', customerController.createCustomer);

// Get all customers
router.get('/customers', customerController.getAllCustomers);

// Get a customer by ID
router.get('/customers/:customerId', customerController.getCustomerById);

// Update a customer by ID
router.put('/customers/:customerId', customerController.updateCustomer);

// Delete a customer by ID
router.delete('/customers/:customerId', customerController.deleteCustomer);

module.exports = router;
