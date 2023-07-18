const Customer = require('../models/Customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, dateOfBirth, phoneNumber, address, categoryId } = req.body;
    const customer = new Customer({
      name,
      dateOfBirth,
      phoneNumber,
      address,
      categoryId,
    });
    await customer.save();
    res.status(201).json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json({ success: true, data: customers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a customer by ID
exports.updateCustomerById = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const { name, dateOfBirth, phoneNumber, address, categoryId } = req.body;

    const customer = await Customer.findByIdAndUpdate(
      customerId,
      {
        name,
        dateOfBirth,
        phoneNumber,
        address,
        categoryId,
      },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a customer by ID
exports.deleteCustomerById = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const customer = await Customer.findByIdAndDelete(customerId);
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
