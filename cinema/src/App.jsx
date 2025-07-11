import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './pages/MovieSearch';
import MovieDetail from './pages/MovieDetail';
import Header  from './components/Header';
import  Diary from './pages/Diary';
import Watchlist from './pages/Watchlist';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      
      <Route path="/" element={<MovieSearch />} />
      <Route path = "/diary" element = {<Diary/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = "/watchlist" element = {<Watchlist/>}/>
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
    </>
  );
}

export default App;

