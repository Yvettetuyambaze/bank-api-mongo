const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Create a new transaction
router.post('/transactions', transactionController.createTransaction);

// Get all transactions
router.get('/transactions', transactionController.getAllTransactions);

// Get transactions by account number
router.get('/transactions/account/:accountNumber', transactionController.getTransactionsByAccountNumber);

// Get a transaction by ID
router.get('/transactions/:transactionId', transactionController.getTransactionById);

// Update a transaction by ID
router.put('/transactions/:transactionId', transactionController.updateTransactionById);

// Delete a transaction by ID
router.delete('/transactions/:transactionId', transactionController.deleteTransactionById);

module.exports = router;
