import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ['Mr', 'Mrs', 'Ms'],
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  alternateMobileNumber: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  secondAddress: {
    type: String,
    default: ''
  },
  gstin: {
    type: String,
    default: ''
  }
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;
