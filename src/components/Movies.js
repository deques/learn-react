import React from "react";
import { useState, useEffect } from "react";

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>
                {movie.title} - {movie.year}
              </h2>
              <img src={movie.medium_cover_image} />
              <p>{movie.summary} </p>
              <ul>
                <h3>Genres</h3>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
