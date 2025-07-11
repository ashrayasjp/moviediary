import React, { useEffect, useState } from "react";
import axios from "axios";

function Diary() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://localhost:8080/api/diary")
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("Error fetching diary movies:", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    <div style={{ padding: "20px" }}>
      <h2>My Diary</h2>

    

      {movies.length === 0 ? (
        <p>No movies added to diary yet.</p>
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
              <h4>
                Added: {movie.addedDate}
              </h4>
      
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Diary;
