const MovieCard = () => {
  return (
    <div className="col">
      <div className="card movie-card shadow rounded-3 mx-auto my-3">
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Flash</h5>
          <p className="card-text">2020</p>
          <a href="#" className="btn btn-primary">
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
