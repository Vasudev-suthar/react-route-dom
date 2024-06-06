import React from 'react';
import { Link } from 'react-router-dom';
import DashboardImg from '../images/dash.png';

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <div className="navbar">
          <Link to="/dashboard" className="dash"> <img src={DashboardImg} alt="Dashboard" className="dashimg" /></Link>
          <Link to="/" className="">Home</Link>
          <div className='btn-box'>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;