import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAudio, FaClipboardList, FaUser, FaSignOutAlt } from "react-icons/fa";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/summary"); // Redirect to the summary page
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove stored token
    window.location.href = "/login";  // Redirect to login page
};


  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>AudioSummarizer</h2>
        <ul>
          <li>
          <button className="summary-btn" onClick={handleNavigate}>
      <FaClipboardList className="icon" />
      <span>Summary History</span>
    </button> 
          </li>
          <li>
          <button className="upload-btn" onClick={() => navigate("/upload")}>
            <FaFileAudio className="icon" />
            Upload Audio
          </button>
          </li>
          <li>
          <button className="profile-btn" onClick={() => navigate("/profile")}>
            <FaUser className="icon" />
            <span>Profile</span>
          </button>
          </li>
          <li className="logout" onClick={handleLogout} style={{ cursor: "pointer" }}>
    <FaSignOutAlt className="icon" />
    <span>Logout</span>
</li>

        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header>
          <h1>Dashboard</h1>
          <p>Welcome back! View your summaries and manage your files.</p>
        </header>

        {/* Dashboard Stats */}
        <section className="stats">
          <div className="stat-card">
            <FaFileAudio className="stat-icon" />
            <h3>50+</h3>
            <p>Audio Files Processed</p>
          </div>

          <div className="stat-card">
            <FaClipboardList className="stat-icon" />
            <h3>30+</h3>
            <p>Summaries Generated</p>
          </div>

          <div className="stat-card">
            <FaUser className="stat-icon" />
            <h3>120+</h3>
            <p>Active Users</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
