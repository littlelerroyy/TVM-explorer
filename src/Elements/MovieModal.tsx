import Movie from "../Models/MovieModel";

const MovieModal = (MovieData: Movie) => {
  return (
    <>
      <div
        className="modal fade"
        id="MovieModal"
        aria-hidden="true"
        aria-labelledby="MovieModal"
        tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h4>{MovieData.Title}</h4>
                    <img
                      className="img-fluid mx-auto"
                      src={`https://image.tmdb.org/t/p/w780/${MovieData.BackdropPath}`}
                    />
                    <p>{MovieData.ReleaseDate.getFullYear()}</p>
                    <p>{MovieData.Overview}</p>

                    <ul>
                      <li>VoteAverage {MovieData.VoteAverage}</li>
                      <li>VoteCount {MovieData.VoteCount}</li>
                      <li>Popularity {MovieData.Popularity}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal">
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieModal;
