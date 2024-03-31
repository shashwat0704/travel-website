import React from 'react';
import './HeroSection.css';
import videoBackground from '../videos/video-background.mp4'; // Corrected path

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" /> {/* Updated source */}
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Explore Your Next Adventure</h1>
        <p>Discover amazing destinations around the world.</p><a href="#popular-destination">
        <button className="cta-button">Get Started</button></a>
      </div>
    </div>
  );
};

export default HeroSection;
