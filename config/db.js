const mongoose = require('mongoose');
const { mongoURI, options } = require('../config.json');

mongoose.connect(mongoURI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

const db = mongoose.connection;

module.exports = db;
