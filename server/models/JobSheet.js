import mongoose from 'mongoose';

const JobSheetSchema = new mongoose.Schema({
  serviceType: String,
  jobSheetNumberSequence: String,
  jobSheetNumber: String,
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  alternateMobileNumber: String,
  address: String,
  gstin: String,
  productType: String,
  brand: String,
  modelName: String,
  modelNumber: String,
  color: String,
  productConfig: String,
  password: String,
  problem: String,
  imei1: String,
  imei2: String,
  warrantyReference: String,
  condition: String,
  status: String,
  estimatedCost: String,
  advancePaid: String,
  receivedItems: [String],
  expectedDeliveryDate: Date,
  expectedDeliveryTime: String,
  remarks: String,
  technician: String,
  sendAlerts: Boolean,
});

const JobSheet = mongoose.model('JobSheet', JobSheetSchema);

export default JobSheet;
