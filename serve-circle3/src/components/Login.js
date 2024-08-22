import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          handleLogin(); // Call the handleLogin function
          navigate("/branches");
        } else {
          setError(response.data.message || "Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
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
          <h2>Login</h2>

          {error && <p className="error-message">{error}</p>} {/* Display error message */}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email" // Added id for better accessibility
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password" // Added id for better accessibility
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
          <p className="outside-links">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </p>
          <p className="outside-links">
            Don't have an Account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
