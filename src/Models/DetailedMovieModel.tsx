import Movie from "./MovieModel";

interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_company: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguages {
  iso_639_1: string;
  name: string;
}

interface IGenres {
  id: number;
  name: string;
}

class DetailedMovie extends Movie {
  BelongsToCollection: object;
  Budget: number;
  HomePage: string;
  IMDBID: number;
  ProductionCompanies: IProductionCompany[];
  ProductionCountries: IProductionCountry[];
  SpokenLanguages: ISpokenLanguages[];
  Status: string;
  Tagline: string;
  Genres: IGenres[];

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
    Video: boolean,
    BelongsToCollection: object,
    Budget: number,
    HomePage: string,
    IMDBID: number,
    ProductionCompanies: IProductionCompany[],
    ProductionCountries: IProductionCountry[],
    SpokenLanguages: ISpokenLanguages[],
    Status: string,
    Tagline: string,
    Genres: IGenres[]
  ) {
    super(
      ID,
      Title,
      OriginalTitle,
      Overview,
      PosterPath,
      ReleaseDate,
      GenreIDs,
      OriginalLanguage,
      Backdrop,
      Popularity,
      VoteCount,
      VoteAverage,
      Adult,
      Video
    );
    this.BelongsToCollection = BelongsToCollection;
    this.Budget = Budget;
    this.HomePage = HomePage;
    this.IMDBID = IMDBID;
    this.ProductionCompanies = ProductionCompanies;
    this.ProductionCountries = ProductionCountries;
    this.SpokenLanguages = SpokenLanguages;
    this.Status = Status;
    this.Tagline = Tagline;
    this.Genres = Genres;
  }

  public static MakeMovie(JSONData: any) {
    return new DetailedMovie(
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
      JSONData.video,
      JSONData.belongs_to_collection,
      JSONData.budget,
      JSONData.homepage,
      JSONData.imdb_id,
      JSONData.production_companies,
      JSONData.production_countries,
      JSONData.spoken_languages,
      JSONData.status,
      JSONData.tagline,
      JSONData.genres
    );
  }

  public static async GetMovie(MovieID: number) {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${MovieID}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    let Data = await response.json();
    let MovieData = this.MakeMovie(Data);
    return MovieData;
  }
  public static EmptyMovie() {
    return new DetailedMovie(
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
      false,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any,
      null as any
    );
  }
}

export default DetailedMovie;
