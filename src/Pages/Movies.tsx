import { moveEmitHelpers } from "typescript";
import TopBar from "../Sections/TopBar";
import MovieCard from "../Elements/MovieCard";
import SearchBar from "../Elements/SearchBar";
import Movie from "../Models/MovieModel";
import { useEffect, useState } from "react";

const Movies = () => {
  let [MovieList, SetMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    Movie.GetMovie().then((MovieData) =>
      SetMovieList((prevState) => prevState.concat(MovieData))
    );
  }, []);

  return (
    <>
      <TopBar />
      <div className="container-lg">
        <h2>Movies</h2>
        <SearchBar />
        <h3>New in Box Office</h3>
        <div className="row gx-5">
          {MovieList.map((Movie) => (
            <MovieCard {...Movie} />
          ))}
          ;
        </div>

        <h3>Top Rated Movies</h3>
        <div className="row gx-5"></div>
      </div>
    </>
  );
};

export default Movies;
