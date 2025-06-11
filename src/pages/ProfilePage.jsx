import React from "react";
import "../styling/profilePage.css";

function ProfilePage() {
  const posts = [
    {
      id: 1,
      type: "original",
      author: "rachel_robinson",
      caption: "Exploring the art world in Paris!",
      image: "https://via.placeholder.com/500x300",
      time: "2h ago",
    },
    {
      id: 2,
      type: "original",
      author: "rachel_robinson",
      caption: "My latest product design 🎨🚀",
      image: "https://via.placeholder.com/500x300",
      time: "5h ago",
    },
    {
      id: 3,
      type: "repost",
      repostedBy: "rachel_robinson",
      originalPost: {
        author: "alex_dev",
        caption: "Minimalism is not a trend — it's clarity.",
        image: "https://via.placeholder.com/500x300",
        time: "1d ago",
      },
      time: "8h ago",
    },
  ];

  return (
    <div className="profile-page">
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
            <span><strong>24</strong> posts</span>
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

      <div className="profile-posts">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            {post.type === "repost" && (
              <div className="post-header repost-info">
                🔁 @{post.repostedBy} reposted
              </div>
            )}
            <div className="post-header">
              @{post.type === "repost" ? post.originalPost.author : post.author} •{" "}
              <span className="time">
                {post.type === "repost" ? post.originalPost.time : post.time}
              </span>
            </div>
            <p className="caption">
              {post.type === "repost"
                ? post.originalPost.caption
                : post.caption}
            </p>
            <img
              src={post.type === "repost" ? post.originalPost.image : post.image}
              alt="Post"
              className="post-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
