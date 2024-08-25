import mongoose from 'mongoose';

const InventoryNewItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  brand: { type: String, default: '' },
  model: { type: String, default: '' },
  manufacturer: { type: String, default: '' },
  variantName: { type: String, default: '' },
  variantCode: { type: String, default: '' },
  initialStock: { type: Number, default: 0 },
  reorderLevel: { type: Number, default: 0 },
  hsnCode: { type: String, default: '' },
  buyingPrice: { type: Number, default: 0 },
  sellingPrice: { type: Number, default: 0 },
  discountPrice: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
}, { timestamps: true });

const InventoryNewItem = mongoose.model('InventoryNewItem', InventoryNewItemSchema);

export default InventoryNewItem;
