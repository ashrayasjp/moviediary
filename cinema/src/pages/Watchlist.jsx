import React, { useEffect, useState } from "react";
import axios from "axios";

function Watchlist() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://localhost:8080/api/watchlist")
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("Error fetching  movies:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleClearWatchlist = () => {
    if (window.confirm("Are you sure you want to clear all movies from watchlist?")) {
      axios.delete("http://localhost:8080/api/watchlist")
        .then(() => {
          alert("Watchlist cleared!");
          fetchMovies(); 
        })
        .catch(error => {
          console.error("Error clearing watchlist:", error);
        });
    }
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>Watchlist</h2>

      <button onClick={handleClearWatchlist} style={{ marginBottom: "15px" }}>
      Clear Watchlist
      </button>

      {movies.length === 0 ? (
        <p>No movies added to watchlist.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {movies.map((movie) => (
            <div key={movie.id} style={{ width: "200px" }}>
              <img
                src={movie.posterUrl}
                alt={movie.movieTitle}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{movie.movieTitle}</h3>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
