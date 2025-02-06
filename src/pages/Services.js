import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$19.99/month",
    image: "/images/builder1.jpg",
    benefits: [
      "Access to gym equipment",
      "Locker facility",
      "Free WiFi",
      "Basic support",
    ],
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "$39.99/month",
    image: "/images/builder2.jpg",
    benefits: [
      "All Basic Plan features",
      "Personal trainer (2 sessions/month)",
      "Group classes access",
      "Nutritional guidance",
    ],
  },
  {
    id: 3,
    name: "Advanced Plan",
    price: "$59.99/month",
    image: "/images/builder3.jpg",
    benefits: [
      "All Pro Plan features",
      "Unlimited personal training",
      "VIP locker room",
      "24/7 gym access",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  // Function to handle "Get Started" click
  const handleGetStarted = (plan) => {
    navigate("/payment", { state: { selectedPlan: plan } });
  };

  return (
    <div className="services-container">
      <h2 className="services-heading">Choose Your Plan</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-img" />
            <h3>{service.name}</h3>
            <p className="price">{service.price}</p>
            <ul className="benefits-list">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <button className="get-started-btn" onClick={() => handleGetStarted(service)}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
