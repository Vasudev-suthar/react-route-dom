import React from 'react';
import './Home.css'; // Import the CSS file
import homeimg from '../img/home.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-box">
        <h1>Welcome to Our Website</h1>
        <p>This is the home page with some introductory content. Feel free to explore our website and learn more about what we have to offer.</p>
      </div>
      <div className="image-box">
        <img src={homeimg} alt="Home" className="home-image" />
        <h2 className="image-title">Awesome photo of sunrise with hills and water. A perfact nature image</h2>
      </div>
    </div>
  );
};

export default Home;
