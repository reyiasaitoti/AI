import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { api } from "../utils/api"; // Import Axios instance
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess("");

    try {
      const response = await api.post("/auth/login", formData);
      console.log("Login Response:", response.data);

      localStorage.setItem("token", response.data.token); // Store token
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      console.error("API Error:", err.response);
      setServerError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <p>Welcome back! Log in to access your dashboard.</p>

        {serverError && <p className="error">{serverError}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
