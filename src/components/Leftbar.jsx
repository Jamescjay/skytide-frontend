// Leftbar.jsx
import React from "react";
import "../styling/leftbar.css";
import { Link } from "react-router-dom";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="logo-section">
        <div className="title">
          <h1 className="navbar-logo">🎬 SkyTide</h1>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li className="nav-item active">
            <div className="nav-icon">🏠</div>
            <span className="nav-text">Home</span>
          </li>
          <li className="nav-item">
            <div className="nav-icon">🧭</div>
            <span className="nav-text">Explore</span>
          </li>
          <li className="nav-item">
            <div className="nav-icon">💬</div>
            <span className="nav-text">Message</span>
          </li>
          <li className="nav-item">
            <div className="nav-icon">🔔</div>
            <span className="nav-text">Notifications</span>
          </li>
          <li className="nav-item">
            <div className="nav-icon">🎨</div>
            <span className="nav-text">Appearance</span>
          </li>
          <li className="nav-item">
            <div className="nav-icon">⚙️</div>
            <span className="nav-text">Settings</span>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
            <span className="nav-text">My profile</span>
            </Link>
          </li>
        </ul>

        <div className="new-post-section">
          <button className="new-post-btn">
            <div className="new-post-icon">📝</div>
            <span className="new-post-text">New Review</span>
          </button>
        </div>

        <div className="profile-section">
          <div className="profile-container">
            <div className="profile-avatar">
              <div className="avatar-gradient"></div>
            </div>
            <div className="profile-info">
              <div className="profile-name">Rachel Robinson</div>
              <div className="profile-title">
                Product Designer at Paris, France
              </div>
              <div className="profile-email">📧 rachelrobinson.com</div>
              <div className="profile-location">📍 Paris, France</div>
            </div>
          </div>
          <div className="profile-actions">
            <button className="profile-action-btn">Edit your profile</button>
            <button className="profile-action-btn">See all analytics</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Leftbar;
