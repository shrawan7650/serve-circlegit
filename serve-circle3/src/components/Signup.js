import React, { useState } from "react";
import "../App.css";
import "./signup.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting signup form");

    Axios.post("http://localhost:5000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        console.log("Response received:", response.data);
        if (response.data.status) {
          alert("Registration successful!");
          navigate("/login");
        } else {
          alert(response.data.message);
        }
      })
      .catch((err) => {
        console.log("Error occurred:", err);
        alert("An error occurred while signing up. Please try again.");
      });
  };

  return (
    <div className="sign-up-container">
      <div className="left-section">
        <div className="image-container">
          <img
            src="https://s3.ap-south-1.amazonaws.com/servecirclesource/img/sc-new-logo.png"
            alt="Logo"
            className="top-logo"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/servecirclesource/css/images/login-desk-fetures.png"
            alt="Login features"
            className="main-image"
          />
        </div>
        <p className="help-text">Need Help? Let us Know</p>
        <div className="contact-info">
          <span>+91 9620164576</span>
          <span>support@servecircle.com</span>
        </div>
      </div>
      
      {/* Triangle added to partition line */}
      <div className="triangle-divider"></div>

      <div className="right-section">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
          <p>
            Have an Account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
