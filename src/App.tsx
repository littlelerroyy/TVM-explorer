import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainSelectionMenu from "./Pages/MainSelection";
import Movies from "./Pages/Movies";
import MovieSearch from "./Pages/MovieSearch";
import TV from "./Pages/TV";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainSelectionMenu />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/search" element={<MovieSearch />} />
        <Route path="/tv" element={<TV />} />
      </Routes>
    </div>
  );
}

export default App;
