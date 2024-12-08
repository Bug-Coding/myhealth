import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faInfoCircle, faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Spline from '@splinetool/react-spline';
import '../styles/Home.css'; // Correct relative path

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to="/services"><FontAwesomeIcon icon={faCogs} /> Services</Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faPhoneAlt} /> Contact</Link></li>
        </ul>
      </nav>

      {/* Full-Page Spline Background */}
      <div className="home-container">
  {/* Full-Page Spline Background */}
  <div className="spline-background">
    <Spline scene="https://prod.spline.design/f9k5stQn2ua6L5Ul/scene.splinecode" />
  </div>
  <div className="moving-vertical-text">
  <p>This website is free, but if you want to donate, don’t hesitate! 😊</p>
</div>

  {/* Moving Text */}
  <div className="moving-text">
    <p>Personalised diet with AI!</p>
  </div>

  {/* Center-Bottom Button */}
  <div className="button-container">
    <Link to="/services" className="lets-go-button">
      <FontAwesomeIcon icon={faSearch} /> Let's Start
    </Link>
  </div>

  {/* Scroll Arrow */}
  <div className="scroll-arrow-right">
    <a
      href="#about-section"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
      }}
    >
      &#8595;
    </a>
  </div>
</div>


     {/* About Section */}
     <section id="about-section" className="about-section">
  <h2>About Us</h2>
  
  <section className="typing-section">
    <p className="typing-effect">
      Welcome to MyHealth! Our goal is to provide personalized diet plans and empower you with health information.
    </p>
    <p className="typing-effect">
      Using cutting-edge AI technology, we believe in making health resources accessible to everyone for free.
    </p>
  </section>

  <section className="typing-section">
    <p className="typing-effect">
      Explore our services and join us on a journey to better health.  🩺
    </p>
    <p className="typing-effect">
      Together, we can create a healthier tomorrow! 😊
    </p>
  </section>

  
  <footer className="social-media-footer">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-square"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter-square"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram-square"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
  </footer>
</section>

    </div>
  );
};

export default Home;