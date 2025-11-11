import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const safeMovies = Array.isArray(movies) ? movies : [];

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {safeMovies.length > 0 ? (
            safeMovies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-gray-400">Loading movies...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
