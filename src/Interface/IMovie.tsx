interface IMovie {
  ID: number;
  Title: string;
  OriginalTitle: string;
  Overview: string;
  PosterPath: string;
  ReleaseDate: Date;
  GenreIDs: number[];
  OriginalLanguage: string;
  BackdropPath: string;
  Popularity: number;
  VoteCount: number;
  VoteAverage: number;
  Adult: boolean;
  Video: boolean;
}

export default IMovie;
