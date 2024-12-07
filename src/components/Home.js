import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faInfoCircle, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Importing icons
import Spline from '@splinetool/react-spline';
import '../styles/Home.css'; // Correct relative path
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

const Home = () => {
  const secondSplineRef = useRef(null);

  useEffect(() => {
    // Store the current value of the ref in a variable
    const currentSecondSpline = secondSplineRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add any action when the second spline becomes visible
          console.log('Second spline is in view!');
        }
      });
    });

    // Observe the second spline element
    if (currentSecondSpline) {
      observer.observe(currentSecondSpline);
    }

    // Cleanup observer when component is unmounted or ref changes
    return () => {
      if (currentSecondSpline) {
        observer.unobserve(currentSecondSpline);
      }
    };
  }, []);

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
      <div className="spline-background">
        <Spline scene="https://prod.spline.design/f9k5stQn2ua6L5Ul/scene.splinecode" />
      </div>

      <div className="moving-text">
        <p>Personalised diet with AI!</p>
      </div>
      <div className="moving-vertical-text">
        <p>This Wesbite is free but if want donate.     hehe don't hesitate!</p>
      </div>
      {/* Center-Bottom Button */}
      <div className="button-container">
        <Link to="/services" className="lets-go-button"><FontAwesomeIcon icon={faSearch} /> Let's Start</Link>
      </div>

      {/* Scroll Arrow on the Right */}
      <div className="scroll-arrow-right">
        <a href="#second-spline">&#8595;</a>
      </div>

      {/* Second Spline Model */}
      
    </div>
  );
};

export default Home;
