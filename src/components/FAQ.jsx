import React, { useState } from "react";
import "./FAQ.scss";

const faqData = [
  {
    question: "How does the audio summarization work?",
    answer:
      "Our AI-powered system transcribes your audio and generates a concise, accurate summary using advanced natural language processing.",
  },
  {
    question: "What audio formats do you support?",
    answer:
      "We support popular formats such as MP3, WAV, M4A, and more. Simply upload your file, and we’ll handle the rest.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize data security. Your audio files are processed securely and are not stored permanently.",
  },
  {
    question: "Can I try the service for free?",
    answer:
      "Yes, we offer a free trial with limited minutes for summarization. You can upgrade to a premium plan for additional features.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFaq(index)}>
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
