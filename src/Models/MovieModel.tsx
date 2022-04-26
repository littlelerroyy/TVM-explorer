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

  public static MakeMovie(JSONData: any) {
    return new Movie(
      JSONData.id,
      JSONData.title,
      JSONData.original_title,
      JSONData.overview,
      JSONData.poster_path,
      JSONData.release_date,
      JSONData.genre_ids,
      JSONData.original_language,
      JSONData.backdrop_path,
      JSONData.popularity,
      JSONData.vote_count,
      JSONData.vote_average,
      JSONData.adult,
      JSONData.video
    );
  }

  public static async GetPopular() {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    let Data = await response.json();
    let MovieArray: Movie[] = [];

    Data.results.forEach((x: any) => {
      MovieArray.push(this.MakeMovie(x));
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
      MovieArray.push(this.MakeMovie(x));
    });

    return MovieArray;
  }

  public static async SearchMovie(queryString: string) {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${queryString}&api_key=${process.env.REACT_APP_API_KEY}`
    );
    let Data = await response.json();
    let MovieArray: Movie[] = [];

    Data.results.forEach((x: any) => {
      MovieArray.push(this.MakeMovie(x));
    });

    return MovieArray;
  }
}

export default Movie;
