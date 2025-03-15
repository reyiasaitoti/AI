import React from "react";
import { useNavigate } from "react-router-dom";
import "./LearnMore.scss";

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more">
      <header>
        <h1>Learn More About Our AI Summarization System</h1>
        <p>
          Discover how our AI-powered tool transcribes and summarizes audio efficiently.
        </p>
        <button onClick={() => navigate("/")} className="back-button">
          Go Back
        </button>
      </header>

      <section className="content">
        <h2>How It Works</h2>
        <p>
          Our AI system processes audio files, transcribes speech, and generates concise summaries using advanced NLP models.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>⚡ Fast and Accurate Transcriptions</li>
          <li>🔍 AI-Powered Summaries</li>
          <li>📂 Easy File Uploads</li>
          <li>🔒 Secure and Reliable</li>
        </ul>
      </section>
    </div>
  );
};

export default LearnMore;
