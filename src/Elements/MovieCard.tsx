import Movie from "../Models/MovieModel";
import PlaceHolderImage from "../Imgs/MoviePlaceholders/poster_w342.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { ApplyBlurToModalBg } from "./MovieModal";
import DetailedMovie from "../Models/DetailedMovieModel";

interface IMovieCard {
  MovieData: Movie;
  SetMovieModalState: React.Dispatch<React.SetStateAction<DetailedMovie>>;
  SetMovieIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieCard = ({
  MovieData,
  SetMovieModalState,
  SetMovieIsLoading,
}: IMovieCard) => {
  return (
    <div className="col-sm-4">
      <div className="card movie-card shadow rounded-3 mx-auto my-3 ">
        <img
          src={
            MovieData.BackdropPath != null
              ? `https://image.tmdb.org/t/p/w342${MovieData.BackdropPath}`
              : PlaceHolderImage
          }
          className="card-img-top "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{MovieData.Title}</h5>
          <p className="card-text">{MovieData.ReleaseDate.getFullYear()}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#MovieModal"
            onClick={() => {
              SetMovieIsLoading(true);
              DetailedMovie.GetMovie(MovieData.ID).then((Movie) => {
                SetMovieModalState(Movie);
                SetMovieIsLoading(false);
              });

              ApplyBlurToModalBg();
            }}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span className="text ms-2">Discover</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
