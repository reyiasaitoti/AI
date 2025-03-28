import React from "react";
import "./AboutUs.scss";
import aboutImage from "/src/assets/about-image.jpeg";

// Make sure to add an image in `src/assets/`

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="text-content">
          <h2>About AudioSummarizer</h2>
          <p>
            AudioSummarizer is an AI-powered tool that transforms lengthy audio recordings into concise and meaningful summaries. Whether you are a student, journalist, or business professional, our service helps you save time by extracting the most important information.
          </p>
          <p>
            Our cutting-edge AI ensures high accuracy, fast processing, and an intuitive user experience. Join thousands of users who rely on AudioSummarizer for quick and efficient content summarization.
          </p>
        </div>
        <div className="image-content">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
