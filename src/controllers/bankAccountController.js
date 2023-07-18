const BankAccount = require('../models/BankAccount');

// Create a new bank account
exports.createBankAccount = async (req, res) => {
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
};

// Get all bank accounts
exports.getAllBankAccounts = async (req, res) => {
  try {
    const bankAccounts = await BankAccount.find();
    res.json({ success: true, data: bankAccounts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a bank account by ID
exports.getBankAccountById = async (req, res) => {
  try {
    const bankAccountId = req.params.bankAccountId;
    const bankAccount = await BankAccount.findById(bankAccountId);
    if (!bankAccount) {
      return res.status(404).json({ success: false, message: 'Bank account not found' });
    }
    res.json({ success: true, data: bankAccount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a bank account by ID
exports.updateBankAccountById = async (req, res) => {
  try {
    const bankAccountId = req.params.bankAccountId;
    const { customerNumber, accountNumber, status, createdDate } = req.body;

    const bankAccount = await BankAccount.findByIdAndUpdate(
      bankAccountId,
      {
        customerNumber,
        accountNumber,
        status,
        createdDate,
      },
      { new: true }
    );

    if (!bankAccount) {
      return res.status(404).json({ success: false, message: 'Bank account not found' });
    }

    res.json({ success: true, data: bankAccount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a bank account by ID
exports.deleteBankAccountById = async (req, res) => {
  try {
    const bankAccountId = req.params.bankAccountId;
    const bankAccount = await BankAccount.findByIdAndDelete(bankAccountId);
    if (!bankAccount) {
      return res.status(404).json({ success: false, message: 'Bank account not found' });
    }
    res.json({ success: true, data: bankAccount });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
