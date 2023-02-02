import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

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
        <>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              medium_cover_image={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Movies;
