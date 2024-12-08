import React from 'react';
import './Sidebar.css'; // Import the custom CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      {/* Home Section */}
      <div className="sidebar-home">
        <div className="home-item">
          <img className="icon" src="src/Sidebar/home.png" alt="Home" />
          <p className="home-text">Home</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="sidebar-main">
        <div className="main-header">
          <div className="main-content">
            {/* Add additional content here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
