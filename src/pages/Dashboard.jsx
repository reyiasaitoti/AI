import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFileAudio, FaClipboardList, FaUser, FaSignOutAlt, FaChartLine, FaHistory } from "react-icons/fa";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <h2 className="logo">AudioSummarizer</h2>
        <div className="nav-links">
          <button onClick={() => navigate("/summary")} className="nav-btn">
            <FaClipboardList className="icon" /> Summary History
          </button>
          <button onClick={() => navigate("/upload")} className="nav-btn">
            <FaFileAudio className="icon" /> Upload Audio
          </button>
          <button onClick={() => navigate("/profile")} className="nav-btn">
            <FaUser className="icon" /> Profile
          </button>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt className="icon" /> Logout
          </button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <header>
          <h1>Welcome..</h1>
          <p>Track your progress, manage your files, and explore insights.</p>
        </header>

        {/* Stats Section */}
        <section className="stats-grid">
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

          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <h3>85%</h3>
            <p>Efficiency Rate</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li><FaHistory className="activity-icon" /> Transcribed "Lecture_Notes.mp3" - 5 min ago</li>
            <li><FaHistory className="activity-icon" /> Uploaded "Podcast1.mp3" - 30 min ago</li>
            <li><FaHistory className="activity-icon" /> Summarized "Meeting_Recap.mp3" - 1 hour ago</li>
          </ul>
        </section>

        {/* Graph Section (Future Expansion) */}
        <section className="analytics">
          <h2>Performance Overview</h2>
          <p>Coming soon: Detailed analytics and insights.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
