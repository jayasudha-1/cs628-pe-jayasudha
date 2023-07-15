import React, { useState } from 'react';

const MovieList = () => {
  const movies = [
    {
      title: 'Mersal',
      genre: 'Action',
      releaseYear: 2022
    },
    {
      title: 'Sachin',
      genre: 'Comedy',
      releaseYear: 2020
    },
    {
      title: 'Friends',
      genre: 'Drama',
      releaseYear: 2015
    },

    {
        title: 'Ghilli',
        genre: 'Action',
        releaseYear: 2010
      },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`You clicked on '${title}'`);
  };

  const genres = ['All Genres', ...new Set(movies.map(movie => movie.genre))];

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <label htmlFor="genre">Filter by Genre:</label>
      <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
<div className="movie-category">
        <h2>Movies</h2>
        
          {movies.map((movie, index) => {
            if (selectedGenre === 'All Genres' || movie.genre === selectedGenre) {
              return (
                <div key={index} className="movie-item" onClick={() => handleMovieClick(movie.title)}>
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Release Year: {movie.releaseYear}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default MovieList;