export interface Genre {
  id: number;
  name: string;
}

export interface MovieFiltersState {
  dataLoaded: boolean;
  genres: Genre[];
  minRating: number;
  selectedGenreIds: number[];
}
