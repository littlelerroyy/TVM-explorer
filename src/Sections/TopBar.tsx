import NavBar from "./NavBar";

const TopBar = () => {
  return (
    <>
      <header id="TopBar" className="p-4 mb-4 shadow-lg">
        <div className="container-lg d-flex justify-content-between">
          <h1 className="m-0">Moo 'N' Tee Vee Explorer</h1>
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default TopBar;
