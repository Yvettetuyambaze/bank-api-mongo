const Transaction = require('../models/Transaction');
const BankAccount = require('../models/BankAccount');

// Create a transaction (deposit or withdrawal)
exports.createTransaction = async (req, res) => {
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
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json({ success: true, data: transactions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get transactions by account number
exports.getTransactionsByAccountNumber = async (req, res) => {
  try {
    const accountNumber = req.params.accountNumber;
    const transactions = await Transaction.find({ accountNumber });
    if (transactions.length === 0) {
      return res.status(404).json({ success: false, message: 'No transactions found for the account' });
    }
    res.json({ success: true, data: transactions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get transaction by ID
exports.getTransactionById = async (req, res) => {
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
};

// Update transaction by ID
exports.updateTransactionById = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const { accountNumber, amount, balance, transactionType } = req.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      transactionId,
      { accountNumber, amount, balance, transactionType },
      { new: true }
    );
    if (!updatedTransaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.json({ success: true, data: updatedTransaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete transaction by ID
exports.deleteTransactionById = async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
    if (!deletedTransaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }
    res.json({ success: true, data: deletedTransaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
