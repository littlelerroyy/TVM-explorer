interface ISearchQueryState {
  Query: string;
  CurrentPage: number;
  TotalPages: number;
  TotalResults: number;
  MoreResultsAvailable: boolean;
}

export default ISearchQueryState;
