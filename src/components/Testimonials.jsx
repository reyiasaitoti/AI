import React from "react";
import "./Testimonials.scss";

const testimonialsData = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Marketing Specialist",
    image: "/src/assets/user1.jpg",
    review:
      "This tool has significantly improved my productivity. The AI-powered summaries are incredibly accurate!",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Podcast Host",
    image: "/src/assets/user2.jpg",
    review:
      "I use this service for transcribing and summarizing interviews. It saves me hours of work!",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Research Analyst",
    image: "/src/assets/user3.jpg",
    review:
      "The summarization feature is top-notch. It helps me quickly analyze reports and presentations.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What People Say About Us</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
