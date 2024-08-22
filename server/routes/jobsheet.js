import express from 'express';
import JobSheet from '../models/JobSheet.js';

const router = express.Router();

// POST route to create a new job sheet
router.post('/create', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const newJobSheet = new JobSheet(req.body);
    await newJobSheet.save();
    console.log('Job sheet saved:', newJobSheet);
    res.status(201).json({ message: 'Job sheet created successfully', data: newJobSheet });
  } catch (error) {
    console.error('Error creating job sheet:', error);
    res.status(400).json({ message: 'Error creating job sheet', error });
  }
});
router.get('/', async (req, res) => {
  try {
    const jobSheets = await JobSheet.find(); // Fetch all job sheets
    res.status(200).json(jobSheets);
  } catch (error) {
    console.error('Error fetching job sheets:', error);
    res.status(500).json({ message: 'Error fetching job sheets', error });
  }
});

export default router; // Ensure this is the default export
