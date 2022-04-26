import { moveEmitHelpers } from "typescript";
import TopBar from "../Sections/TopBar";
import MovieCard from "../Elements/MovieCard";
import SearchBar from "../Elements/SearchBar";
import Movie from "../Models/MovieModel";
import { useEffect, useState } from "react";

const Movies = () => {
  //Set the movie list states
  let [PopularMovieList, SetPopularMovieList] = useState<Movie[]>([]);
  let [UpcomingMovieList, SetUpcomingMoveList] = useState<Movie[]>([]);

  useEffect(() => {
    Movie.GetPopular().then((MovieData) =>
      SetPopularMovieList((prevState) => prevState.concat(MovieData))
    );

    Movie.GetUpcoming().then((MovieData) =>
      SetUpcomingMoveList((prevState) => prevState.concat(MovieData))
    );
  }, []);

  return (
    <>
      <TopBar />
      <div className="container-lg">
        <h2>Movies</h2>
        <SearchBar />

        <h3>Upcoming Movies</h3>
        <div className="row gx-3">
          {UpcomingMovieList.map((Movie) => (
            <MovieCard key={Movie.ID} {...Movie} />
          ))}
        </div>

        <h3>Popular Movies</h3>
        <div className="row gx-3">
          {PopularMovieList.map((Movie) => (
            <MovieCard key={Movie.ID} {...Movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
