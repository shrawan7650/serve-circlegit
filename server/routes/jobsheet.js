import express from "express";
import JobSheet from "../models/JobSheet.js";

const router = express.Router();

// POST route to create a new job sheet
router.post("/create", async (req, res) => {
  try {
    // Fetch the last job sheet created
    const lastJobSheet = await JobSheet.findOne().sort({ createdAt: -1 });

    let newJobSheetNumber = "1J"; // Start with "1J"
    
    if (lastJobSheet) {
      // Extract the numeric part from the last job sheet number
      const lastJobSheetNumber = lastJobSheet.jobSheetNumber;
      
      // Check if the last job sheet number starts with "1J" and has additional numbers
      if (lastJobSheetNumber.startsWith("1J")) {
        const lastNumber = parseInt(lastJobSheetNumber.slice(2), 10);
        if (!isNaN(lastNumber)) {
          // Increment the last number to generate the new job sheet number
          newJobSheetNumber += lastNumber + 1;
        } else {
          // If parsing fails, start from "1J0"
          newJobSheetNumber += "1";
        }
      }
    } else {
      // If no job sheets exist, start from "1J0"
      newJobSheetNumber += "1";
    }

    // Assign the generated job sheet number to the new job sheet
    const newJobSheet = new JobSheet({
      ...req.body,
      jobSheetNumber: newJobSheetNumber,
    });

    // Save the new job sheet
    await newJobSheet.save();
    console.log("Job sheet saved:", newJobSheet);

    // Respond with success
    res.status(201).json({
      message: "Job sheet created successfully",
      data: newJobSheet,
    });
  } catch (error) {
    console.error("Error creating job sheet:", error);
    res.status(400).json({ message: "Error creating job sheet", error });
  }
});


// GET route to fetch all job sheets
router.get("/all-job-sheet", async (req, res) => {
  try {
    const jobSheets = await JobSheet.find();
    res.status(200).json(jobSheets);
  } catch (error) {
    console.error("Error fetching job sheets:", error);
    res.status(500).json({ message: "Error fetching job sheets", error });
  }
});

// GET route to fetch a single job sheet by ID
router.get("/single-job-sheet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const jobSheet = await JobSheet.findById(id);
    if (!jobSheet) {
      return res.status(404).json({ message: "Job sheet not found" });
    }
    res.status(200).json(jobSheet);
  } catch (error) {
    console.error("Error fetching job sheet:", error);
    res.status(500).json({ message: "Error fetching job sheet", error });
  }
});

// PUT route to update a job sheet by ID

// PUT route to update a job sheet by ID
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Fetch the existing job sheet
    const existingJobSheet = await JobSheet.findById(id);
    if (!existingJobSheet) {
      return res.status(404).json({ message: "Job sheet not found" });
    }

    // Update only the fields that are provided in the request
    Object.keys(updates).forEach((key) => {
      if (updates[key] !== undefined && updates[key] !== "") {
        existingJobSheet[key] = updates[key];
      }
    });

    // Save the updated job sheet
    const updatedJobSheet = await existingJobSheet.save();

    res
      .status(200)
      .json({
        message: "Job sheet updated successfully",
        data: updatedJobSheet,
      });
  } catch (error) {
    console.error("Error updating job sheet:", error);
    res.status(400).json({ message: "Error updating job sheet", error });
  }
});

// DELETE route to delete a job sheet by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJobSheet = await JobSheet.findByIdAndDelete(id);
    if (!deletedJobSheet) {
      return res.status(404).json({ message: "Job sheet not found" });
    }
    res.status(200).json({ message: "Job sheet deleted successfully" });
  } catch (error) {
    console.error("Error deleting job sheet:", error);
    res.status(500).json({ message: "Error deleting job sheet", error });
  }
});

export default router;
