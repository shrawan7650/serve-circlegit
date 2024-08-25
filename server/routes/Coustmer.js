import express from 'express';
import Customer from '../models/Coustmer.js';

const router = express.Router();

// Create a new customer
router.post('/create', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ message: 'Customer created successfully', customer });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(400).json({ message: 'Error creating customer', error });
  }
});

// Get a customer by ID
router.get('/get/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ message: 'Error fetching customer', error });
  }
});
//get all
  router.get('/all', async (req, res) => {
    try {
      const customers = await Customer.find({});
      res.status(200).json(customers);
    } catch (error) {
      console.error('Error fetching customers:', error);
      res.status(500).json({ message: 'Error fetching customers', error });
    }
  });

// Update a customer by ID
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find the customer to update
    let customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

   // Update only the fields that were provided in the request
   Object.keys(updates).forEach((key) => {
    if (updates[key]) {
      customer[key] = updates[key];
    }
});

    const updatedCustomer = await customer.save();
    res.status(200).json({ message: 'Customer updated successfully', updatedCustomer });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(400).json({ message: 'Error updating customer', error });
  }
});

// Delete a customer by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ message: 'Error deleting customer', error });
  }
});

export default router;
