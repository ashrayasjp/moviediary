import React from 'react';
import axios from 'axios';

function AddToDiary({movie}){
const handleAddtoDiary =  async()=> {
    try {
        const currentDate = new Date().toISOString().split('T'[0]);
        await axios.post("http://localhost:8080/api", {
tmdbId: movie.id,
movieTitle: movie.title,
overview: movie.overview,
posterUrl:`https://image.tmdb.org/t/p/w300${movie.poster_path}`,
watchedDate: new Date().toISOString().split('T')[0],
status: "diary",

        });
        alert("Movie added to diary");
    }
    catch (err){
        console.error("error", err);
    }
};
return (
    <button onClick={handleAddtoDiary} className = "btn">Add to Diary</button>
 
)
}
export default AddToDiary;