import React from "react";
import "./Pricing.scss";

const pricingPlans = [
  {
    title: "Free Plan",
    price: "$0",
    features: [
      "10 minutes per month",
      "Basic transcription",
      "AI summarization",
      "Limited support",
    ],
    buttonText: "Get Started",
    buttonClass: "btn-primary",
  },
  {
    title: "Pro Plan",
    price: "$15/month",
    features: [
      "500 minutes per month",
      "Advanced transcription",
      "AI-powered summaries",
      "Priority support",
    ],
    buttonText: "Subscribe Now",
    buttonClass: "btn-secondary",
  },
  {
    title: "Enterprise Plan",
    price: "Custom",
    features: [
      "Unlimited usage",
      "API access",
      "Custom AI models",
      "24/7 dedicated support",
    ],
    buttonText: "Contact Us",
    buttonClass: "btn-outline",
  },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Choose Your Plan</h2>
      <p className="subtitle">Affordable pricing for individuals and businesses.</p>
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={plan.buttonClass}>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
