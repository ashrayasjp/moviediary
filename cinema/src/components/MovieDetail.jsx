import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '450880ff1e2f9c77a18d3c90f108eb88';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: { api_key: API_KEY }
    })
    .then(res => setMovie(res.data))
    .catch(console.error);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetail;
