import {Genre, MovieFiltersState} from '@/app/movie-filters/movie-filters.types';

export enum MovieFiltersMutationType {
  AddGenresAndToggleDataLoaded = 'AddGenres',
  UpdateMinRating = 'UpdateMinRating',
  ToggleGenre = 'ToggleGenre',
}

export const MovieFiltersMutations = {
  [MovieFiltersMutationType.AddGenresAndToggleDataLoaded](state: MovieFiltersState, payload: {genres: Genre[]}) {
    state.dataLoaded = !state.dataLoaded;
    state.genres = [...state.genres, ...payload.genres];
  },
  [MovieFiltersMutationType.UpdateMinRating](state: MovieFiltersState, {minRating}: {minRating: number}) {
    state.minRating = minRating;
  },
  [MovieFiltersMutationType.ToggleGenre](state: MovieFiltersState, {genreId}: {genreId: number}) {
    state.selectedGenreIds = state.selectedGenreIds.includes(genreId)
      ? state.selectedGenreIds.filter((id) => id !== genreId)
      : [...state.selectedGenreIds, genreId];
  },
};
