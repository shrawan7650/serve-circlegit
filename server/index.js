import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UserRouter } from './routes/user.js'; // Ensure this import matches your actual export
import jobSheetRouter from './routes/jobsheet.js'; // Correct import for jobSheetRouter

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/auth', UserRouter); // User routes
app.use('/job-sheets', jobSheetRouter); // Job Sheet routes

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/authenticate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
