import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetail from './components/MovieDetail';
import Header  from './components/Header';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MovieSearch />} />

      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
    </>
  );
}

export default App;

