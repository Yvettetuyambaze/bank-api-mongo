const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
  customerNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

module.exports = BankAccount;
