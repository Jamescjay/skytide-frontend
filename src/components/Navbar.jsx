import React from "react";
import "../styling/navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="search-container">
          <button className="search-left-button">🔍</button>
          <input className="search-bar" placeholder="search movie..." />
        </div>
        <div className="nav-buttons">
          <button>Movies</button>
          <button>TV shows</button>
          <button>News</button>
          <button>About</button>
        </div>
      </div>
      <div className="extra-buttons">
        <button>Following</button>
        <button>For you</button>
        <button>Trending</button>
      </div>
    </div>
  );
}

export default Navbar;
