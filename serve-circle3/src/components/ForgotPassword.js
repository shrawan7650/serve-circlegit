import React, { useState } from "react";
import "../App.css";
import "./signup.css"; // Reuse the signup CSS
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/auth/forgot-password", { email })
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for the reset password link.");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
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

      <div className="triangle-divider"></div>

      <div className="right-section">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send</button>
          <p>
            Have an Account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;