import { moveEmitHelpers } from "typescript";
import TopBar from "../Sections/TopBar";
import MovieCard from "../Elements/MovieCard";
import SearchBar from "../Elements/SearchBar";

const Movies = () => {
  return (
    <>
      <TopBar />
      <div className="container-lg">
        <h2>Movies</h2>
        <SearchBar />
        <h3>New in Box Office</h3>
        <div className="row gx-5">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>

        <h3>Top Rated Movies</h3>
        <div className="row gx-5">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default Movies;
