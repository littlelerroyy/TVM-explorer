import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainSelectionMenu from "./Pages/MainSelection";
import Movies from "./Pages/Movies";
import TV from "./Pages/TV";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-xl">
          <Routes>
            <Route path="/" element={<MainSelectionMenu />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
