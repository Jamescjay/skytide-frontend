import React from "react";
import "../styling/home.css";
import Movie from "../components/Movie";
import Navbar from "../components/Navbar";


const movieList = [
  {
    title: "The Wailing",
    percent: 70,
    ratings: 3.5,
    timePosted: "2 hrs ago",
    description:
      "A mysterious force causes a series of murders in a rural village, leaving the townspeople fearful and confused.",
    img: "https://cinemaunchained.wordpress.com/wp-content/uploads/2016/12/heropage-980x560_52.jpg?w=640",
  },
  {
    title: "Warcraft",
    percent: 60,
    ratings: 4,
    timePosted: "3 days ago",
    description:
      "Orcs and humans clash in a fantastical battle for control of their shared world in this high-stakes adventure.",
    img: "https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/bltc840ddd2d0d75f5f/673284107e4dc122ed2fcee0/orcs_vs_humans_keyart.webp",
  },
  {
    title: "The Witch",
    percent: 90,
    ratings: 4.5,
    timePosted: "1 year ago",
    description:
      "A devout family in 1600s New England is torn apart by forces of evil lurking in the woods beyond their farm.",
    img: "https://resizing.flixster.com/InrWpLnk9mUDzP0vV9KGu8agF9g=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11451256_v_h9_aq.jpg",
  },
  {
    title: "The Shallows",
    percent: 50,
    ratings: 3,
    timePosted: "5 days ago",
    description:
      "A lone surfer must outwit a great white shark circling her stranded rock just yards from the shore.",
    img: "https://m.media-amazon.com/images/S/pv-target-images/fd5af008d67e2b84a00b73b25dcbb717272afb6b57bd94c6452ba5a9e3c418f1.jpg",
  },
];


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        {movieList.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
