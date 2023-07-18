const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Create a transaction
router.post('/transactions', transactionController.createTransaction);

// Get all transactions
router.get('/transactions', transactionController.getAllTransactions);

// Get a transaction by ID
router.get('/transactions/:transactionId', transactionController.getTransactionById);

// Update a transaction by ID
router.put('/transactions/:transactionId', transactionController.updateTransaction);

// Delete a transaction by ID
router.delete('/transactions/:transactionId', transactionController.deleteTransaction);

module.exports = router;
