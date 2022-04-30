import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import PlaceHolderImage from "../Imgs/MoviePlaceholders/poster_w780.jpg";
import DetailedMovie from "../Models/DetailedMovieModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

interface IMovieModal {
  MovieData: DetailedMovie;
  MovieIsLoading: boolean;
}

const MovieModal = ({ MovieData, MovieIsLoading }: IMovieModal) => {
  const [MovieImageIsLoading, SetMovieImageIsLoading] = useState(true);
  console.log(MovieData);
  return (
    <>
      <div
        className="modal fade"
        id="MovieModal"
        aria-hidden="true"
        aria-labelledby="MovieModal"
        onClick={(e) => {
          //lets remove the blur if we click on the outside of the modal as this also closes it
          if (e.currentTarget == e.target) {
            RemoveBlurToModalBg();
          }
        }}
        tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={RemoveBlurToModalBg}
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body" id="MovieModalBody">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h5>
                      {MovieData.Title} ({MovieData.ReleaseDate.getFullYear()})
                    </h5>
                    <LoadingSpinner IsLoading={MovieIsLoading} />
                    <LoadingSpinner IsLoading={MovieImageIsLoading} />
                    {!MovieIsLoading && (
                      <>
                        <div className="img-wrapper">
                          <img
                            className="img-fluid mx-auto"
                            onLoad={() => SetMovieImageIsLoading(false)}
                            src={
                              MovieData.BackdropPath != null
                                ? `https://image.tmdb.org/t/p/w780${MovieData.BackdropPath}`
                                : PlaceHolderImage
                            }
                          />
                        </div>
                        <h6>
                          <FontAwesomeIcon icon={faBarsStaggered} />
                          Overview
                        </h6>
                        <p>{MovieData.Overview}</p>

                        <div className="row">
                          <div className="col">
                            <h6>
                              <FontAwesomeIcon icon={faBarsStaggered} />
                              Genres
                            </h6>
                            <ul>
                              {MovieData.Genres != null &&
                                MovieData.Genres.map((x) => {
                                  return <li>{x.name}</li>;
                                })}
                            </ul>
                          </div>
                          <div className="col">
                            <h6>
                              <FontAwesomeIcon icon={faBarsStaggered} />
                              Production Companies
                            </h6>

                            <ul>
                              {MovieData.Genres != null &&
                                MovieData.ProductionCompanies.map((x) => {
                                  return <li>{x.name}</li>;
                                })}
                            </ul>
                          </div>

                          <div className="col">
                            <h6>
                              <FontAwesomeIcon icon={faBarsStaggered} />
                              Stats
                            </h6>
                            <ul>
                              <li>VoteAverage {MovieData.VoteAverage}</li>
                              <li>VoteCount {MovieData.VoteCount}</li>
                              <li>Popularity {MovieData.Popularity}</li>
                              <li>R</li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                onClick={RemoveBlurToModalBg}
                data-bs-toggle="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ApplyBlurToModalBg = () => {
  const MovieModal = document.getElementById("BlurWrapper");
  MovieModal?.classList.add("Apply-Blur");
};

export const RemoveBlurToModalBg = () => {
  const MovieModal = document.getElementById("BlurWrapper");
  MovieModal?.classList.remove("Apply-Blur");
};

export default MovieModal;
