// models/Branch.js
import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    contactNo: { type: String, required: true },
    additionalContactNo: { type: String },
    email: { type: String, required: true },
    licenceGroup: { type: String, required: true },
});

const Branch = mongoose.model('Branch', branchSchema);
export default Branch;
