const express = require('express');
const app = express();
const customerRoutes = require('./routes/customerRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const customerCategoryRoutes = require('./routes/customerCategoryRoutes');
const db = require('./db');

// Parse JSON body
app.use(express.json());

// Register routes
app.use('/api', customerRoutes);
app.use('/api', bankAccountRoutes);
app.use('/api', transactionRoutes);
app.use('/api', customerCategoryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

module.exports = app;
