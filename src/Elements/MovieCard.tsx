import { FC } from "react";
import IMovie from "../Interface/IMovie";
import Movie from "../Models/MovieModel";
const MovieCard = (MovieData: IMovie) => {
  return (
    <div className="col">
      <div className="card movie-card shadow rounded-3 mx-auto my-3 ">
        <img
          src={`https://image.tmdb.org/t/p/w342/${MovieData.BackdropPath}`}
          className="card-img-top "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{MovieData.Title}</h5>
          <p className="card-text">{MovieData.ReleaseDate.getFullYear()}</p>
          <a href="#" className="btn btn-primary">
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
