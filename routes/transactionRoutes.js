// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const BankAccount = require('../models/BankAccount');

// Create a transaction (deposit or withdrawal)
router.post('/transactions', async (req, res) => {
  try {
    const { accountNumber, amount, transactionType } = req.body;
    const bankAccount = await BankAccount.findOne({ accountNumber });

    if (!bankAccount) {
      return res.status(404).json({ success: false, message: 'Bank account not found' });
    }

    if (transactionType === 'deposit') {
      bankAccount.balance += amount;
    } else if (transactionType === 'withdrawal') {
      if (bankAccount.balance < amount) {
        return res.status(400).json({ success: false, message: 'Insufficient balance for withdrawal' });
      }
      bankAccount.balance -= amount;
    } else {
      return res.status(400).json({ success: false, message: 'Invalid transaction type' });
    }

    const transaction = new Transaction({
      accountNumber,
      amount,
      balance: bankAccount.balance,
      transactionType,
    });

    await transaction.save();
    bankAccount.transactions.push(transaction);
    await bankAccount.save();

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ... other transaction routes

module.exports = router;
