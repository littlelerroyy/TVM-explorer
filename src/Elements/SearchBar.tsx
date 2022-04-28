interface ISearchBarProps {
  SearchHandler: Function;
}
const SearchBar = ({ SearchHandler }: ISearchBarProps) => {
  const getInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const userValue = e.currentTarget.value;
    return userValue;
  };

  return (
    <input
      className="form-control form-control-lg mb-3"
      type="text"
      placeholder="Search Moovies"
      onKeyUp={(e) => SearchHandler(getInputValue(e), 1)}
      aria-label=".form-control-lg example"></input>
  );
};
export default SearchBar;
