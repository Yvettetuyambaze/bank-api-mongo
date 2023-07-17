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

// Get all transactions
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json({ success: true, data: transactions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get transactions by account number
router.get('/transactions/:accountNumber', async (req, res) => {
  try {
    const accountNumber = req.params.accountNumber;
    const transactions = await Transaction.find({ accountNumber });
    res.json({ success: true, data: transactions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// Get a transaction by ID
router.get('/transactions/:transactionId', async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const transaction = await Transaction.findById(transactionId);
    
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    
    res.json({ success: true, data: transaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update a transaction by ID
router.put('/transactions/:transactionId', async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const { accountNumber, amount, transactionType } = req.body;
    
    let transaction = await Transaction.findById(transactionId);
    
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    
    const bankAccount = await BankAccount.findOne({ accountNumber });
    
    if (!bankAccount) {
      return res.status(404).json({ success: false, message: 'Bank account not found' });
    }
    
    // Update transaction details
    transaction.accountNumber = accountNumber;
    transaction.amount = amount;
    transaction.balance = bankAccount.balance;
    transaction.transactionType = transactionType;
    
    await transaction.save();
    
    res.json({ success: true, data: transaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete a transaction by ID
router.delete('/transactions/:transactionId', async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const transaction = await Transaction.findById(transactionId);
    
    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    
    await transaction.remove();
    
    res.json({ success: true, data: transaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ... other transaction routes

module.exports = router;
