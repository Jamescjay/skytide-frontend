import React from "react";
import "../styling/movies.css";
import StarRating from "./StarRating";

const Movie = ({ title, percent, ratings, img, description, timePosted }) => {

  function getTimeEmoji(time) {
    if (time.includes("min")) return "⏱️";
    if (time.includes("hrs")) return "🕒";
    if (time.includes("days")) return "📅";
    if (time.includes("year")) return "🕰️";
    return "⏳";
  }
  return (
    <div className="movieCard">
      <div className="movieHeader">
        <h4 className="movieTitle">{title}</h4>
        <span className="timePosted">
          {getTimeEmoji(timePosted)} {timePosted}
        </span>
      </div>
      <p className="movieDescription">{description}</p>
      <img className="moviePoster" src={img} alt={title} />
      <div className="movieFooter">
        <div className="leftInfo">
          <span>⭐ {ratings}</span>
          <span>🎯 {percent}%</span>
          <button className="commentBtn">💬 Comment</button>
        </div>
        <div className="rightActions">
          <button className="actionBtn">💾 Save</button>
          <button className="actionBtn">📤 Share</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
