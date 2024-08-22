import React, { useState } from "react";
import "../App.css";
import "./signup.css"; 
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(`http://localhost:5000/auth/reset-password/${token}`, {
      password,
    })
      .then((response) => {
        if (response.data.status) {
          alert("Password has been reset. You can now log in.");
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
          <h2>Reset Password</h2>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            placeholder="**"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;