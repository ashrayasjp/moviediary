import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_KEY = '450880ff1e2f9c77a18d3c90f108eb88';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: { api_key: API_KEY, query }
    });
    setResults(res.data.results);
  };

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div>
        <h1> Cinema Zone</h1>
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="e.g. F1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style = {{fontSize: '20px'}}
      /> 

      <button onClick={handleSearch} style = {{ marginLeft: '20px'}}>Search</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
            style={{ cursor: 'pointer', width: '150px' }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%' }}
            />
            <p><strong>{movie.title}</strong> ({movie.release_date?.slice(0, 4)})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
