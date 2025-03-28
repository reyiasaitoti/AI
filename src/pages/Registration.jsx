import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../utils/api"; 
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"; 
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
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (validateForm()) {
      setLoading(true);

      try {
        await api.post("/auth/signup", formData);
        navigate("/login");
      } catch (err) {
        console.error("Signup Error:", err.response);
        setServerError(err.response?.data?.message || "Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="registration">
      <div className="registration-container">
        <h2>Register</h2>
        <p>Create an account to start summarizing audio easily!</p>

        {serverError && <p className="error">{serverError}</p>}

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
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? <ClipLoader color="#fff" size={20} /> : "Register"}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
