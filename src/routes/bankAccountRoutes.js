const express = require('express');
const router = express.Router();
const bankAccountController = require('../controllers/bankAccountController');

// Create a new bank account
router.post('/bank-accounts', bankAccountController.createBankAccount);

// Get all bank accounts
router.get('/bank-accounts', bankAccountController.getAllBankAccounts);

// Get a bank account by ID
router.get('/bank-accounts/:bankAccountId', bankAccountController.getBankAccountById);

// Update a bank account by ID
router.put('/bank-accounts/:bankAccountId', bankAccountController.updateBankAccount);

// Delete a bank account by ID
router.delete('/bank-accounts/:bankAccountId', bankAccountController.deleteBankAccount);

module.exports = router;
