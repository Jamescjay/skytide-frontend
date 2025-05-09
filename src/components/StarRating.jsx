
import React from "react";
import fullStar from "../assets/icons/star.png";
import halfStar from "../assets/icons/half-rating.png";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = hasHalfStar ? fullStars + 1 : fullStars;

  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {[...Array(fullStars)].map((_, i) => (
        <img
          key={`full-${i}`}
          src={fullStar}
          alt="full star"
          style={{ width: "20px" }}
        />
      ))}
      {hasHalfStar && (
        <img src={halfStar} alt="half star" style={{ width: "20px" }} />
      )}
      {[...Array(5 - totalStars)].map((_, i) => (
        <img
          key={`empty-${i}`}
          src={fullStar}
          alt="empty star"
          style={{ width: "20px", opacity: 0.2 }}
        />
      ))}
    </div>
  );
};

export default StarRating;
