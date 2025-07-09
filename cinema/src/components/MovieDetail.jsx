import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

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
    <div 
    style={{ 
      display: 'flex', 
      gap: '20px', 

      marginLeft: '100px', 
      padding: '20px' 
    }}
  >
       <div style={{ flex: 1.2 }}>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} height= '300' width=  '300'    alt={movie.title} />
     
    
  <p style={{ maxWidth: '600px',  marginRight: '400px' , textAlign:'justify' }}>{movie.overview}</p>


      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      </div>
      <div style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
        <h3>Reviews</h3>
        <p>No reviews yet.</p>
        </div>
        </div>
 

  );
}

export default MovieDetail;
