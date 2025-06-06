// src/components/AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // We'll define the styles in a separate CSS file
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {

    const navigate = useNavigate();

    const handleNavigate = (route) => {
      navigate(route);
    };
  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <button className="logo-button">Devascan</button>
        </div>
        <div className="nav-center">
        <button onClick={() => handleNavigate('/')} className="nav-btn">Home</button>
        <button onClick={() => handleNavigate('/about')} className="nav-btn">About Us</button>
        </div>
        <div className="nav-right">
        <button onClick={() => handleNavigate('/')} className="logout-btn">Logout</button>
        </div>
      </nav>

      <section className="about-us-content">
        <h2>About Us</h2>
        <div className="team-cards">
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
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
