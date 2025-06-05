// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };
  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <button className="logo-button">Devascan</button>
        </div>
        <div className="nav-center">
          <button onClick={() => handleNavigate('/')} className="nav-btn">Home</button>
          <button onClick={() => handleNavigate('/about')} className="nav-btn">About Us</button>
        </div>
        <div className="nav-right">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* <div className="home-container">
        <h1>Welcome to the Home Page!</h1>
        <p>You are logged in and can now access this page.</p>
      </div> */}

      <section className="about-devascan">
        <h2>Revolutionize Your Devanagari Learning with DevaScan</h2>
        <p>
          DevaScan is an AI-powered educational tool designed to help students master the Devanagari script. Whether you're checking spellings, recognizing handwritten characters,
          or identifying inaccuracies, DevaScan is your all-in-one solution.
        </p>
      </section>

      <section className="feature-cards">
        
        <div className="card">
          <h3>Character Recognition</h3>
          <p>Verify if you're writing Devanagari characters correctly by comparing against standard forms.</p>
          <button onClick={() => window.location.href = "https://devanagiri.streamlit.app/"}>Learn More</button>
        </div>
        <div className="card">
          <h3>Inaccuracy Detector
          </h3>
          <p>Find potential mistakes in Devanagari text by comparing OCR results with model predictions.</p>
          <button onClick={() => window.location.href = "https://devanagiri.streamlit.app/"}>Learn More</button>
        </div>
        <div className="card">
          <h3>Devanagari Spell Checker</h3>
          <p>Check spelling of Hindi words in Devanagari script.</p>
          <button onClick={() => window.location.href = "https://devanagiri.streamlit.app/"}>Learn More</button>
        </div>
      </section>
      <section className="devnagri-section">
        <h2>What Makes Devanagari Unique?</h2>
        
        <p>🧠 <b>Used in Many Indian Languages:</b> Devanagari is the script behind Hindi, Marathi, Sanskrit, and more!</p>

        <p>✍️ <b>Looks Different:</b> It has a unique top line (called 'Shirorekha') that joins letters, unlike English.</p>

        <p>🌀 Curvy and Complex Letters: The shapes can be tricky to read, especially in handwriting.</p>

        <p>🤖 That’s Where DevaScan Helps! Our tool uses AI to recognize, correct, and guide your Devanagari writing, making learning super easy and fun!</p>


        
      </section>
      <section className="tutorial-section">
        <h2>Tutorial</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/fHuwydryeKI"
            title="Tutorial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
