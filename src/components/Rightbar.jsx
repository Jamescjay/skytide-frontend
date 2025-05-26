import React from "react";
import "../styling/rightbar.css";

const suggestedFollowers = [
  { name: "Julie Harris", avatar: "purple-gradient", verified: true },
  { name: "Claire Bloom", avatar: "pink-gradient", verified: false },
  { name: "James Joyce", avatar: "teal-gradient", verified: true },
  { name: "Robin Allen", avatar: "purple-light-gradient", verified: false },
  { name: "Carol Kane", avatar: "pink-bright-gradient", verified: true },
  { name: "Ellie Kemper", avatar: "blue-gradient", verified: false },
];

const recentlyViewedMovies = [
  { title: "Inception", avatar: "orange-gradient" },
  { title: "The Social Network", avatar: "purple-gradient" },
  { title: "Interstellar", avatar: "beige-gradient" },
  { title: "The Matrix", avatar: "blue-gradient" },
  { title: "The Grand Budapest Hotel", avatar: "teal-gradient" },
  { title: "Whiplash", avatar: "purple-light-gradient" },
];

function Rightbar() {
  return (
    <div className="rightbar">
      {/* Premium Upgrade Section */}
      <div className="premium-section">
        <div className="premium-header">
          <span className="premium-icon">🔒</span>
          <h3>Thoughts Premium</h3>
        </div>
        <p className="premium-text">
          Premium experience, creator tools, analytics, verified badge and data
          security.
        </p>
        <button className="upgrade-btn">Upgrade to Premium</button>
      </div>

      {/* Suggested Followers Section */}
      <div className="connections-section">
        <h3>Suggested followers:</h3>
        <div className="connection-list">
          {suggestedFollowers.map((follower, index) => (
            <div className="connection-item" key={index}>
              <div className={`avatar ${follower.avatar}`}></div>
              <div className="connection-info">
                <span className="name">
                  {follower.name}{" "}
                  {follower.verified && <span className="verified">🔒</span>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Viewed Movies Section */}
      <div className="opportunities-section">
        <h3>Recently viewed Movies:</h3>
        <div className="opportunity-list">
          {recentlyViewedMovies.map((movie, index) => (
            <div className="opportunity-item" key={index}>
              <div className={`avatar ${movie.avatar}`}></div>
              <div className="opportunity-info">
                <span className="company">{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-btn">Show more</button>
      </div>
    </div>
  );
}

export default Rightbar;
