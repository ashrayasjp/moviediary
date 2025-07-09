import React from "react";
import axios from "axios";


function AddToWatchlist({ movie }) {
  const HandleAddtoWatchlist = async () => {
    try {
      await axios.post('http://localhost:8080/api/diary', {
        tmdbId: movie.id,
        movieTitle: movie.title,
        overview: movie.overview,
        posterUrl: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      });
      alert("Movie Added To Watchlist");
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <button onClick={HandleAddtoWatchlist} className="btn">
      Add To Watchlist
    </button>
  );
}

export default AddToWatchlist;

