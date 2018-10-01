import {Movie, MovieListState} from '@/app/movie-list/movie-list.types';

export enum MovieListGetterType {
  FilteredList = 'FilteredList',
}

export const MovieListGetters = {
  [MovieListGetterType.FilteredList]: (state: MovieListState, getters: any, rootState: any): Movie[] =>
    state.movies.filter((movie) =>
      movie.vote_average >= rootState.movieFilters.minRating
      && hasRequiredGenres(rootState.movieFilters.selectedGenreIds, movie.genre_ids)),
};

function hasRequiredGenres(requiredGenreIds: number[], movieGenreIds: number[]): boolean {
  return !requiredGenreIds.length || requiredGenreIds.reduce((hasAll, requiredId) =>
    hasAll && movieGenreIds.includes(requiredId),
  true);
}
