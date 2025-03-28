import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../utils/api"; 
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"; // Import spinner
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setLoading(true);

    try {
      console.log("Submitting login request with:", formData);

      const response = await api.post("/auth/login", formData);

      console.log("Login successful, response:", response.data);

      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 1500); // Simulating a short delay before redirect
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setServerError(err.response?.data?.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <p>Welcome back! Log in to access your dashboard.</p>

        {serverError && <p className="error">{serverError}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <ClipLoader color="#fff" size={20} /> : "Login"}
          </button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
