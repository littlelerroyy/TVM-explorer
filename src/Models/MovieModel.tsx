import IMovie from "../Interface/IMovie";
class Movie implements IMovie {
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

  constructor(
    ID: number,
    Title: string,
    OriginalTitle: string,
    Overview: string,
    PosterPath: string,
    ReleaseDate: string,
    GenreIDs: number[],
    OriginalLanguage: string,
    Backdrop: string,
    Popularity: number,
    VoteCount: number,
    VoteAverage: number,
    Adult: boolean,
    Video: boolean
  ) {
    this.ID = ID;
    this.Title = Title;
    this.OriginalTitle = OriginalTitle;
    this.Overview = Overview;
    this.PosterPath = PosterPath;
    this.ReleaseDate = new Date(Date.parse(ReleaseDate));
    this.GenreIDs = GenreIDs;
    this.OriginalLanguage = OriginalLanguage;
    this.BackdropPath = Backdrop;
    this.Popularity = Popularity;
    this.VoteCount = VoteCount;
    this.VoteAverage = VoteAverage;
    this.Adult = Adult;
    this.Video = Video;
  }

  public static async GetPopular() {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    let Data = await response.json();
    let MovieArray: Movie[] = [];

    Data.results.forEach((x: any) => {
      MovieArray.push(
        new Movie(
          x.id,
          x.title,
          x.original_title,
          x.overview,
          x.poster_path,
          x.release_date,
          x.genre_ids,
          x.original_language,
          x.backdrop_path,
          x.popularity,
          x.vote_count,
          x.vote_average,
          x.adult,
          x.video
        )
      );
    });

    return MovieArray;
  }

  public static async GetUpcoming() {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    );
    let Data = await response.json();
    let MovieArray: Movie[] = [];

    Data.results.forEach((x: any) => {
      MovieArray.push(
        new Movie(
          x.id,
          x.title,
          x.original_title,
          x.overview,
          x.poster_path,
          x.release_date,
          x.genre_ids,
          x.original_language,
          x.backdrop_path,
          x.popularity,
          x.vote_count,
          x.vote_average,
          x.adult,
          x.video
        )
      );
    });

    return MovieArray;
  }
}

export default Movie;
