// File: Home.jsx
import React, { useState } from "react";
import "../styling/home.css";
import Movies from "../components/Movies";
import StarRating from "../components/StarRating";

const bannerMovies = [
  {
    title: "AVENGERS - AGE OF ULTRON",
    genres: "Action | Animation | Family",
    duration: "2hr 23min",
    ratings: 4,
    image:
      "https://ftw.usatoday.com/gcdn/authoring/images/smg/2025/03/03/SFTW/81236888007-90-1005123.jpeg?crop=1199,674,x0,y0&width=660&height=371&format=pjpg&auto=webp",
  },
  {
    title: "WRONG SIDE OF TOWN",
    genres: "Action | Adventure",
    duration: "2hr 10min",
    ratings: 4.5,
    image: "https://i.ytimg.com/vi/h3LrvFGIp5o/maxresdefault.jpg",
  },
  {
    title: "PIRATES OF CARIBBEAN",
    genres: "Action | Fantasy",
    duration: "2hr 25min",
    ratings: 5,
    image:
      "https://www.lifewire.com/thmb/D7p_u9SG-040Lv9Th1oG2IOEGT0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Piratesofthecarribean-0fc72c9f13da4b29a527546ed83edce3.jpg",
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerMovies.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + bannerMovies.length) % bannerMovies.length
    );
  };

  const getSideMovies = () => {
    const side1 = (currentIndex + 1) % bannerMovies.length;
    const side2 = (currentIndex + 2) % bannerMovies.length;
    return [bannerMovies[side1], bannerMovies[side2]];
  };

  const mainMovie = bannerMovies[currentIndex];
  const [side1, side2] = getSideMovies();

  return (
    <div className="home">
      <div className="banner">
        <button className="nav-arrow left" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="main-movie">
          <div className="main-movie::before" />
          <img src={mainMovie.image} alt={mainMovie.title} />
          <div className="movie-info">
            <h2>{mainMovie.title}</h2>
            <p>
              {mainMovie.genres} | Duration: {mainMovie.duration}
            </p>
            {mainMovie.ratings && <StarRating rating={mainMovie.ratings} />}
          </div>
        </div>

        <div className="side-movies">
          {[side1, side2].map((movie, idx) => (
            <div key={idx} className="side-movie">
              <img src={movie.image} alt={movie.title} />
              <div className="side-info">
                <h4>{movie.title}</h4>
                <p>{movie.genres}</p>
                <p>Duration: {movie.duration}</p>
                {movie.ratings && <StarRating rating={movie.ratings} />}
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <h2 className="featured-title">FEATURED MOVIES</h2>
      <Movies />
    </div>
  );
}

export default Home;
