import React, { useState } from 'react';

import MoviesList from './MoviesList.js';
import styles from "./HttpRequestExample.module.css"
import Loader from './Loader.js';

function HttpRequestExample() {
  const [movies, setMovies] = useState([])
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState("")
  const fetchMoviesHandler = () => {
    setShowSpinner(true);
    setError(false);
    fetch("https://swapi.dev/api/films").then(function (response) {
      if (response.ok) {
         return response.json() 
      } else {
        throw new Error("something went wrong")
      }
    }).then((data) => {
      const movies = data.results.map((movie, index) => {
        return {
          id: index,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl
        }
      })
      setTimeout(() => {
        setMovies(movies)
        setError(false)
        setShowSpinner(false)
      }, 3000)

    }).catch(error => {
      console.log("error", error)
      setError(true)
      setShowSpinner(false)
    })


  }
  let renderMoviesList = "";
  if (movies != null && movies.length >= 1) {
    //console.log("movies:", movies)
    renderMoviesList = (
      <section><MoviesList movies={movies} /> </section>)
  }
  let err = ""
  if (error) {
    err = (<section><div>Something went Wrong</div></section>)
  }
  return (
    <div className={styles.fetchmovies}>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      {!showSpinner && renderMoviesList}
      {showSpinner && (<section ><Loader></Loader> </section>)}
      {!showSpinner && err}

    </div>
  );
}

export default HttpRequestExample;
