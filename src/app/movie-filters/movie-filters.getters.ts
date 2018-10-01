import {Genre, MovieFiltersState} from '@/app/movie-filters/movie-filters.types';

export enum MovieFiltersGetterType {
  GenresByIds = 'GenresByIds',
  GenreNamesByIds = 'GenreNamesByIds',
}

export const MovieFiltersGetters = {
  [MovieFiltersGetterType.GenresByIds]: (state: MovieFiltersState) =>
    (ids: number[]): Genre[] =>
      state.genres.filter((genre) => ids.includes(genre.id)),

  [MovieFiltersGetterType.GenreNamesByIds]: (state: MovieFiltersState, getters: any) =>
    (ids: number[]): string[] =>
      getters[MovieFiltersGetterType.GenresByIds](ids).map((genre: Genre) => genre.name),
};
