import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing1"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing2"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing3"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing4"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing5"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
