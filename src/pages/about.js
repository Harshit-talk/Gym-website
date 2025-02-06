import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="header">
        <h1>Welcome to Our Gym</h1>
        <p className="owner-message">
          “We believe in fitness for everyone. Our mission is to help you achieve
          your fitness goals with dedication and consistency.”
        </p>
      </div>

      <div className="builder-photo">
        <h2>Meet the Builder</h2>
        <img
          src="/images/builder1.jpg"
          alt="Builder"
          className="builder-img"
        />
      </div>

      <div className="testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>“The best gym in the area. The trainers are so supportive!”</p>
            <h3>John Doe</h3>
            <span>Member</span>
          </div>
          <div className="testimonial-card">
            <p>“I’ve achieved my fitness goals faster than I ever thought!”</p>
            <h3>Jane Smith</h3>
            <span>Member</span>
          </div>
          <div className="testimonial-card">
            <p>“A welcoming community that helps you push yourself every day!”</p>
            <h3>Mark Wilson</h3>
            <span>Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
