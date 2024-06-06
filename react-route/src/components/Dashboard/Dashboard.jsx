import React from 'react';
import './Dashboard.css'; 
import dashimg from '../img/dash.jpg'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="image-box">
        <img src={dashimg} alt="Dashboard" className="dashboard-image" />
        <h2 className="image-title">A image with full of grass and a tree side of the water looks beuatiful</h2>
      </div>
      <div className="text-box">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard. Here you can find various metrics and insights about your account and activities.</p>
      </div>
    </div>
  );
};

export default Dashboard;
