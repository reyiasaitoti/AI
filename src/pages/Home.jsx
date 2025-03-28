import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/About";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Faq from "../components/FAQ";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Pricing />
      <Footer />

    </div>
  );
};

export default Home;
