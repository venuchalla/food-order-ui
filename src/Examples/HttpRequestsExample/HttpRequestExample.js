import React, { useState } from 'react';

import MoviesList from './MoviesList.js';
import styles from "./HttpRequestExample.module.css"

function HttpRequestExample() {
  const [movies, setMovies] = useState([])
  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films").then(function (response) {
      return response.json()
    }).then((data) => {
      const movies = data.results.map((movie, index) => {
        return {
          id: index,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        }
      })
      setMovies(movies)
    })

  }
  return (
    <div className={styles.fetchmovies}>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </div>
  );
}

export default HttpRequestExample;
