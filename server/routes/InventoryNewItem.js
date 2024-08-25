import express from 'express';
import InventoryNewItem from '../models/InventoryNewItem.js';
const router = express.Router();

router.post('/inventoryCreate', async (req, res) => {
  try {
    const newItem = new InventoryNewItem(req.body);
    await newItem.save();
    res.status(201).json({ message: 'Inventory item created successfully', data: newItem });
  } catch (error) {
    res.status(400).json({ message: 'Error creating inventory item', error });
  }
});
router.get('/inventory', async (req, res) => {
  try {
    const items = await InventoryNewItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory items', error });
  }
});

router.put('/inventory/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find the existing item first
    const existingItem = await InventoryNewItem.findById(id);
    if (!existingItem) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }

    // Update only the fields that are provided in the request body
    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined && updates[key] !== null) {
        existingItem[key] = updates[key];
      }
    });

    // Save the updated item
    const updatedItem = await existingItem.save();

    res.status(200).json({ message: 'Inventory item updated successfully', data: updatedItem });
  } catch (error) {
    res.status(400).json({ message: 'Error updating inventory item', error });
  }
});

router.delete('/inventory/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await InventoryNewItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Inventory item not found' });
    }
    res.status(200).json({ message: 'Inventory item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting inventory item', error });
  }
});

export default router;



