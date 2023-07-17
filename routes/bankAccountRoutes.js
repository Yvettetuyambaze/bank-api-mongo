// routes/bankAccountRoutes.js
const express = require('express');
const router = express.Router();
const BankAccount = require('../models/BankAccount');

// Create a new bank account
router.post('/bank-accounts', async (req, res) => {
  try {
    const { customerNumber, accountNumber, status, createdDate } = req.body;
    const bankAccount = new BankAccount({
      customerNumber,
      accountNumber,
      status,
      createdDate,
    });
    await bankAccount.save();
    res.status(201).json({ success: true, data: bankAccount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all bank accounts
router.get('/bank-accounts', async (req, res) => {
  try {
    const bankAccounts = await BankAccount.find();
    res.json({ success: true, data: bankAccounts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ... other bank account routes

module.exports = router;
