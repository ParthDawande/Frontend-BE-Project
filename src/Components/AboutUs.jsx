// src/components/AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // We'll define the styles in a separate CSS file
import { useNavigate } from 'react-router-dom';


const AboutUs = ({ setIsLoggedIn }) => {

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
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <button className="logo-button" onClick={() => handleNavigate('/')}>
            <img src="/photos/DevaScan-Logo.png" alt="DevaScan Logo" className="nav-logo" />
          </button>
        </div>
        <div className="nav-center">
          <button onClick={() => handleNavigate('/')} className="nav-btn">Home</button>
          <button onClick={() => handleNavigate('/about')} className="nav-btn">About Us</button>
        </div>
        <div className="nav-right">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <section className="about-us-content">
        
        <h2>About Us</h2>
        {/* <div className="team-cards">
          <div className="card">
            <img src="/photos/viraag.jpeg" alt="Team Member 1" className="team-photo" />
            <h3>Viraag Borundiya</h3>
            <p>ML Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra dui ac orci dictum, sit amet convallis augue.</p>
          </div>

          <div className="card">
            <img src="/photos/ParthDawande_Photo.jpg" alt="Team Member 2" className="team-photo" />
            <h3>Parth Dawande</h3>
            <p>Web Developer</p>
            <p>I am Parth Dawande from PICT</p>
          </div>

          <div className="card">
            <img src="/photos/darpan.jpeg" alt="Team Member 3" className="team-photo" />
            <h3>Darpan Kotagire</h3>
            <p>Web Developer</p>
            <p>Integer laoreet ex ac elit fermentum, vel facilisis arcu vehicula. Aliquam erat volutpat. Nulla fringilla orci euismod.</p>
          </div>

          <div className="card">
            <img src="/photos/Sneha.jpeg" alt="Team Member 4" className="team-photo" />
            <h3>Sneha Basu</h3>
            <p>ML Developer</p>
            <p>Donec eu erat et felis dictum volutpat a sit amet libero. Aenean suscipit dui eget tincidunt dictum. Integer non orci nisi.</p>
          </div>
        </div> */}
        <div className="team-cards">
  <div className="card">
    <img src="/photos/viraag.jpeg" alt="Viraag Borundiya" className="team-photo" />
    <h3>Viraag Borundiya</h3>
    <p className="designation">👨‍💻 <i><b>ML Developer</b></i></p>
    <p className="description">Played a key role in DevaScan’s machine learning backbone, training models and optimizing performance to ensure accurate Devanagari character recognition and understanding.</p>
  </div>
  <div className="card">
    <img src="/photos/Sneha.jpeg" alt="Sneha Basu" className="team-photo" />
    <h3>Sneha Basu</h3>
    <p className="designation">👩‍💻 <i><b>ML Developer</b></i></p>
    <p className="description">Led the machine learning work for DevaScan, building and training models that power the core features like character recognition and inaccuracy detection.</p>
  </div>

  <div className="card">
    <img src="/photos/darpan.jpeg" alt="Darpan Kotagire" className="team-photo" />
    <h3>Darpan Kotagire</h3>
    <p className="designation">💻 <i><b>Web Developer</b></i></p>
    <p className="description">Developed the backend of DevaScan, handling API integrations and deploying the ML model seamlessly.</p>
  </div>

  <div className="card">
    <img src="/photos/ParthDawande_Photo.jpg" alt="Parth Dawande" className="team-photo" />
    <h3>Parth Dawande</h3>
    <p className="designation">🎨 <i> <b>Web Developer</b></i></p>
    <p className="description"> Led the frontend development of DevaScan, focusing on building an intuitive and responsive user interface.</p>
  </div>
</div>

      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} DevaScan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
