import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { User } from "../models/Users.js";
import cookieParser from 'cookie-parser';

const router = express.Router();
router.use(cookieParser());

// Signup route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ status: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.json({ status: true, message: "User registered successfully" });
  } catch (error) {
    console.log("Error during signup:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ status: false, message: "User is not registered" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ status: false, message: "Password is incorrect" });
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });

    return res.json({ status: true, message: "Login successful" });
  } catch (error) {
    console.log("Error during login:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
});

// Forgot password route
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ status: false, message: "User not registered" });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset",
      text: `Click on the following link to reset your password: http://localhost:3000/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error sending email:", error);
        return res.json({ status: false, message: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.json({ status: true, message: "Email sent" });
      }
    });
  } catch (error) {
    console.log("Error in forgot password:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
});
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ status: true, message: "Logged out successfully" });
});

export { router as UserRouter };
