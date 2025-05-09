/* File: Movies.jsx */
import React from "react";
import "../styling/movies.css";
import StarRating from "./StarRating";

function Movies() {
  const movieList = [
    {
      title: "The Wailing",
      percent: 70,
      ratings: 3.5,
      img: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3bbbe424-008b-4e02-973b-4e43217d0611_1382x2048.jpeg",
    },
    {
      title: "Warcraft",
      percent: 60,
      ratings: 4,
      img: "https://resizing.flixster.com/4GUi7v4pMSjB01u47yL2idYPN00=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11882721_v_v9_ac.jpg",
    },
    {
      title: "The Witch",
      percent: 90,
      ratings: 4.5,
      img: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png",
    },
    {
      title: "The Shallows",
      percent: 50,
      ratings: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnYspKow32-YTunx1SYgJP8srawx6dxQg1Q&s",
    },
  ];

  return (
    <div className="movies">
      <h3>FEATURE MOVIES</h3>
      <div className="movie-grid">
        {movieList.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="badge">{movie.percent}%</div>
            <img src={movie.img} alt={movie.title} />
            <p>{movie.title}</p>
            <div className="movie-stars">
              <StarRating rating={movie.ratings} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
