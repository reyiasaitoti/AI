import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";
import heroImage from "/src/assets/hero-image.jpeg"; // Ensure you add an image in src/assets/

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transform Audio into Clear, Concise Summaries</h1>
          <p>
            AI-powered audio summarization that helps you save time and focus on what truly matters. Upload, transcribe, and summarize with ease.
          </p>
          <button className="cta-button" onClick={() => navigate("/learn-more")}>LearnMore...</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="AI-powered audio summarization" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
