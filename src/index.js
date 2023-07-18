const express = require('express');
const connectDB = require('../config/db');
const customerRoutes = require('./routes/customerRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const customerCategoryRoutes = require('./routes/customerCategoryRoutes');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', customerRoutes);
app.use('/api', bankAccountRoutes);
app.use('/api', transactionRoutes);
app.use('/api', customerCategoryRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
