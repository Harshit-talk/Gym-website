import React, { useEffect, useState } from 'react';
import './Home.css';
import Services from './Services';
const images = [
  '/images/builder1.jpg',
  '/images/builder2.jpg',
  '/images/builder3.jpg',
  '/images/builder4.jpg',
  '/images/builder5.jpg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section with Image Slider */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="hero-content">
          <h2>Welcome to FitGym</h2>
          <p>Your Fitness Journey Starts Here</p>
          <a href='Services' className="cta-btn" onClick={Services}>Explore Our Services</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to helping you achieve your fitness goals with personalized training, state-of-the-art equipment, and a motivating community.</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 FitGym. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
