import React, { useState } from "react";
import "../styling/profilePage.css";

function ProfilePage() {
  const reposts = [
    {
      id: 1,
      repostedBy: "rachel_robinson",
      originalPost: {
        author: "admin",
        caption: "Avengers: Endgame – A masterpiece of modern cinema.",
        image: "https://wallpapersok.com/images/hd/bane-dark-knight-movie-rofd92dl1bcgkucx.jpg",
        time: "1d ago",
      },
      time: "2h ago",
    },
    {
      id: 2,
      repostedBy: "rachel_robinson",
      originalPost: {
        author: "admin",
        caption: "The Godfather – A timeless classic of film history.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZXHsp4jEKeLXTiD_yTT749cfo-QN3vwlaQhmcvWOfMcU5fHn4LrzqZFNFyNcD55VDrM&usqp=CAU",
        time: "2d ago",
      },
      time: "5h ago",
    },
    {
      id: 3,
      repostedBy: "rachel_robinson",
      originalPost: {
        author: "admin",
        caption: "Interstellar – A journey beyond space and time.",
        image: "https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com_640.jpg",
        time: "3d ago",
      },
      time: "8h ago",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1 < reposts.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const selectedPost = selectedIndex !== null ? reposts[selectedIndex] : null;

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Profile"
            className="avatar"
          />
        </div>
        <div className="profile-details">
          <div className="username-section">
            <h2 className="username">rachel_robinson</h2>
            <button className="edit-btn">Edit Profile</button>
          </div>
          <div className="stats">
            <span><strong>{reposts.length}</strong> reposts</span>
            <span><strong>2.1k</strong> followers</span>
            <span><strong>500</strong> following</span>
          </div>
          <div className="bio">
            <p><strong>Rachel Robinson</strong></p>
            <p>🎨 Product Designer | Movie Buff</p>
            <p>🌍 Paris, France</p>
          </div>
        </div>
      </div>

      {/* Grid of Reposted Images */}
      <h3 className="grid-title">Reposted Movies</h3>
      <div className="repost-grid">
        {reposts.map((post, index) => (
          <div key={post.id} className="grid-item" onClick={() => handleImageClick(index)}>
            <img src={post.originalPost.image} alt="Grid" />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedPost && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>×</button>
            <button className="nav-btn prev" onClick={handlePrev}>↑</button>
            <button className="nav-btn next" onClick={handleNext}>↓</button>

            <img src={selectedPost.originalPost.image} alt="Modal" className="modal-image" />
            <div className="modal-details">
              <p className="caption">{selectedPost.originalPost.caption}</p>
              <p className="time">Posted by @{selectedPost.originalPost.author} • {selectedPost.originalPost.time}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
