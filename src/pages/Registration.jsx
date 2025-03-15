import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { api } from "../utils/api"; // Import the Axios instance
import { useNavigate } from "react-router-dom"; 
import "./Registration.scss";

const Registration = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess("");

    if (validateForm()) {
      try {
        const response = await api.post("/auth/signup", formData);
        console.log("Response received:", response.data);
        setSuccess("Registration successful! Redirecting...");
        setTimeout(() => navigate("/login"), 2000);
      } catch (err) {
        console.error("API Error:", err.response);
        setServerError(err.response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="registration">
      <div className="registration-container">
        <h2>Register</h2>
        <p>Create an account to start summarizing audio easily!</p>

        {serverError && <p className="error">{serverError}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" className="register-btn">Register</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
