import { useState } from "react";
import LoadingSpinner from "../Elements/LoadingSpinner";
import MovieCard from "../Elements/MovieCard";
import MovieModal from "../Elements/MovieModal";
import SearchBar from "../Elements/SearchBar";
import ISearchQueryState from "../Interface/ISearchQueryState";
import Movie from "../Models/MovieModel";
import TopBar from "../Sections/TopBar";

const MovieSearch = () => {
  //Delcare PageNumber
  let CurrentPageNumber = 1;
  let CurrentQueryString = "";

  //Create States
  const [IsLoadingResultsState, SetIsLoadingResultsState] = useState(false);
  const [SearchResults, SetSearchResults] = useState<Movie[]>([]);

  //QueryState, page number and query;
  const [QueryState, SetQueryState] = useState<ISearchQueryState>({
    Query: "",
    CurrentPage: 0,
    TotalPages: 0,
    TotalResults: 0,
    MoreResultsAvailable: false,
  });

  let PlaceHolderMovie = new Movie(
    0,
    "Loading Movie",
    "Loading Movie",
    "Loading",
    "null.jpg",
    "1970-01-01",
    [],
    "Loading",
    "null.jpg",
    0,
    0,
    0,
    false,
    false
  );
  let [MovieModalState, SetMovieModalState] = useState<Movie>(PlaceHolderMovie);

  ///Should we display the Load More Results Button?

  //Handle Search
  const HandleSearch = (Query: string, PageNumber: number) => {
    if (Query === "") return;

    let NewPage = PageNumber != QueryState?.CurrentPage;

    //Search Loading Icon
    SetIsLoadingResultsState(true);

    Movie.SearchMovie(Query, PageNumber, SetQueryState).then((MovieData) => {
      //Clear the Search Results if we are just searching on the same page
      if (!NewPage) {
        SetSearchResults([]);
      }
      SetSearchResults((prevState) => prevState.concat(MovieData));
      SetIsLoadingResultsState(false);
    });
  };

  return (
    <>
      <TopBar />
      <div className="container-lg">
        <h2>Search Any Moovee</h2>
        <SearchBar SearchHandler={HandleSearch} />
        <MovieModal {...MovieModalState} />
        <h3>Popular Movies</h3>
        <div className="row gx-3">
          {SearchResults.map((Movie) => (
            <MovieCard
              key={Movie.ID}
              MovieData={Movie}
              SetModalState={SetMovieModalState}
            />
          ))}
          <LoadingSpinner IsLoading={IsLoadingResultsState} />
          {QueryState.MoreResultsAvailable && (
            <button
              className="btn btn-primary"
              onClick={() =>
                HandleSearch(QueryState.Query, QueryState.CurrentPage + 1)
              }>
              Load More
            </button>
          )}
          {!QueryState.MoreResultsAvailable && QueryState.TotalResults > 0 && (
            <h4>End of Results</h4>
          )}
        </div>
      </div>
    </>
  );
};
export default MovieSearch;
