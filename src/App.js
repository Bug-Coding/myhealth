// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services'; // Import the Services component
import Contact from'./components/Contact';



import './styles/Home.css'; // Correct path to the styles folder
import './styles/Contact.css'; // Correct path to the styles folder
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> {/* Route for the Services page */}
        <Route path="/about" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;