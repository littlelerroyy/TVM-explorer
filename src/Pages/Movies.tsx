import TopBar from "../Sections/TopBar";
import MovieCard from "../Elements/MovieCard";
import Movie from "../Models/MovieModel";
import { useEffect, useState } from "react";
import MovieModal from "../Elements/MovieModal";
import LoadingSpinner from "../Elements/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faCalendarDay,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Sections/Footer";
import DetailedMovie from "../Models/DetailedMovieModel";

const Movies = () => {
  //Set the movie list states
  let [PopularMovieList, SetPopularMovieList] = useState<Movie[]>([]);
  let [PopMovieLoadingState, SetPopLoadingState] = useState(true);
  let [UpcomingMovieList, SetUpcomingMoveList] = useState<Movie[]>([]);
  let [UpcomingMovieLoadingState, UpcomingLoadingState] = useState(true);

  let [MovieModalState, SetMovieModalState] = useState<DetailedMovie>(
    DetailedMovie.EmptyMovie()
  );

  let [MovieModalIsLoadingState, SetMovieIsLoadingState] = useState(false);

  useEffect(() => {
    //Get Popular Movie Data
    Movie.GetPopular().then((MovieData) => {
      SetPopularMovieList((prevState) => prevState.concat(MovieData));
      SetPopLoadingState(false);
    });

    //Get Upcoming Movie Data
    Movie.GetUpcoming().then((MovieData) => {
      SetUpcomingMoveList((prevState) => prevState.concat(MovieData));
      UpcomingLoadingState(false);
    });
  }, []);

  return (
    <>
      <MovieModal
        MovieData={MovieModalState}
        MovieIsLoading={MovieModalIsLoadingState}
      />
      <div id="BlurWrapper">
        <TopBar />
        <div className="container-lg">
          <h2>
            <FontAwesomeIcon icon={faClapperboard} />
            Movies
          </h2>

          <h3>
            <FontAwesomeIcon icon={faCalendarDay} />
            Upcoming Movies
          </h3>
          <div className="row gx-3">
            {UpcomingMovieList.map((Movie) => (
              <MovieCard
                MovieData={Movie}
                SetMovieModalState={SetMovieModalState}
                SetMovieIsLoading={SetMovieIsLoadingState}
                key={Movie.ID}
              />
            ))}
            <LoadingSpinner IsLoading={PopMovieLoadingState} />
          </div>

          <h3>
            <FontAwesomeIcon icon={faFire} />
            Popular Movies
          </h3>
          <div className="row gx-3">
            {PopularMovieList.map((Movie) => (
              <MovieCard
                key={Movie.ID}
                MovieData={Movie}
                SetMovieModalState={SetMovieModalState}
                SetMovieIsLoading={SetMovieIsLoadingState}
              />
            ))}
            <LoadingSpinner IsLoading={UpcomingMovieLoadingState} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Movies;
