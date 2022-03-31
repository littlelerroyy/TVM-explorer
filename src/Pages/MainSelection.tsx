const MainSelectionMenu = () => {
  return (
    <section className="justify-content-center d-flex" id="MainSelection">
      <div className="mx-auto my-auto">
        <h2 className="fs-1">Which would you like to discover?</h2>
        <div className="d-grid gap-2">
          <a
            href="./movies"
            className="btn btn-primary fs-1 fw-bold mt-3"
            type="button">
            Movies
          </a>

          <a
            href="./tv"
            className="btn btn-primary fs-1 fw-bold mt-3"
            type="button">
            TV Shows
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSelectionMenu;
