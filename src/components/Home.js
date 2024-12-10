import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faInfoCircle, faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Spline from '@splinetool/react-spline';
import '../styles/Home.css'; // Ensure correct relative path

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">MyHealth</Link>
          </div>

          {/* Hamburger Icon */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
            &#9776;
          </button>

          {/* Navbar Links */}
          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" aria-label="Home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/services" aria-label="Services">
                <FontAwesomeIcon icon={faCogs} /> Services
              </Link>
            </li>
            <li>
              <Link to="/about" aria-label="About">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Link>
            </li>
            <li>
              <Link to="/contact" aria-label="Contact">
                <FontAwesomeIcon icon={faPhoneAlt} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Full-Page Spline Background */}
      <div className="spline-section">
        <Spline scene="https://prod.spline.design/f9k5stQn2ua6L5Ul/scene.splinecode" />
      </div>

      {/* Moving Text */}
      <div className="text-sections">
        <div className="moving-vertical-text">
          <p>This website is free, but if you want to donate, don’t hesitate! 😊</p>
        </div>
        <div className="moving-text">
          <p>Personalized diet with AI!</p>
        </div>
      </div>

      {/* Center-Bottom Button */}
      <div className="button-container">
        <Link to="/services" className="lets-go-button" aria-label="Start Services">
          <FontAwesomeIcon icon={faSearch} /> Let's Start
        </Link>
      </div>

      {/* Scroll Arrow */}
      <div className="scroll-arrow">
        <button
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to About Section"
        >
          &#8595;
        </button>
      </div>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <h2>About Us</h2>
        <div className="typing-section">
          <p>
            Welcome to MyHealth! Our goal is to provide personalized diet plans and empower you with health information.
          </p>
          <p>
            Using cutting-edge AI technology, we believe in making health resources accessible to everyone for free.
          </p>
          <p>
            Explore our services and join us on a journey to better health. 🩺 Together, we can create a healthier tomorrow! 😊
          </p>
        </div>

        {/* Social Media Footer */}
        <footer className="social-media-footer">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </footer>
      </section>
    </div>
  );
};

export default Home;
