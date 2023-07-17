const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customerRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const customerCategoryRoutes = require('./routes/customerCategoryRoutes');

const app = express();

// Parse JSON body
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/my-database')
  .then(() => {
    console.log('Connected to MongoDB');
    // Register routes
    app.use('/api', customerRoutes);
    app.use('/api', bankAccountRoutes);
    app.use('/api', transactionRoutes);
    app.use('/api', customerCategoryRoutes);

    // Start the server
    const port = 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
