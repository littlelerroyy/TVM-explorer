const MainSelectionMenu = () => {
  return (
    <section className="justify-content-center d-flex" id="MainSelection">
      <div className="mx-auto my-auto">
        <h2 className="fs-1">Which would you like to discover?</h2>
        <div className="d-grid gap-2">
          <button className="btn btn-primary fs-1 fw-bold mt-3" type="button">
            Movies
          </button>
          <button className="btn btn-primary fs-1 fw-bold mt-3" type="button">
            TV Shows
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSelectionMenu;
