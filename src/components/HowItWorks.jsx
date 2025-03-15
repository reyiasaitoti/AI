import React from "react";
import { FaUpload, FaMicrophone, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-description">
          Follow these simple steps to convert your audio into a concise summary.
        </p>

        <div className="steps">
          <div className="step">
            <FaUpload className="step-icon" />
            <h3>Upload Audio</h3>
            <p>Choose an audio file from your device and upload it to our system.</p>
          </div>

          <div className="step">
            <FaMicrophone className="step-icon" />
            <h3>Automatic Transcription</h3>
            <p>Our AI transcribes your audio into text with high accuracy.</p>
          </div>

          <div className="step">
            <FaFileAlt className="step-icon" />
            <h3>Summarization</h3>
            <p>The system processes the transcription and generates a concise summary.</p>
          </div>

          <div className="step">
            <FaCheckCircle className="step-icon" />
            <h3>Download & Use</h3>
            <p>Download the summary and use it for notes, articles, or research.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
