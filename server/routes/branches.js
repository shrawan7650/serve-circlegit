// routes/branches.js
import express from 'express';
import Branch from '../models/Branches.js';

const router = express.Router();

// Create a new branch
router.post('/create', async (req, res) => {
    try {
        const branch = new Branch(req.body);
        await branch.save();
        res.status(201).json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a branch by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const branch = await Branch.findByIdAndDelete(id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });
        res.json({ message: 'Branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single branch by ID
router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const branch = await Branch.findById(id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });
        res.json(branch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all branches
router.get('/all', async (req, res) => {
    try {
        const branches = await Branch.find();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a branch by ID
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Fetch existing branch
        const branch = await Branch.findById(id);
        if (!branch) return res.status(404).json({ message: 'Branch not found' });

        // Update only the fields that were provided in the request
        Object.keys(updates).forEach((key) => {
            if (updates[key]) {
                branch[key] = updates[key];
            }
        });

        // Save updated branch
        await branch.save();
        res.json(branch);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
