import React, { useEffect, useState } from "react";
import axios from "axios";

function Diary() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://localhost:8080/api/diary/diary")
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

  const handleClearDiary = () => {
    if(window.confirm("Are you sure you want to clear all movies from diary?")) {
      axios.delete("http://localhost:8080/api/diary/diary")
        .then(() => {
          alert("Diary cleared!");
          fetchMovies(); // refresh list
        })
        .catch(error => {
          console.error("Error clearing diary:", error);
        });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Diary</h2>

      <button onClick={handleClearDiary} style={{ marginBottom: "15px" }}>
        Clear Diary
      </button>

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
              <p style={{ fontSize: "0.9rem" }}>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Diary;
