import {Movie, MovieListState} from '@/app/movie-list/movie-list.types';

export enum MovieListMutationType {
  AddMovies = 'AddMovies',
  ToggleDataLoaded = 'ToggleDataLoaded',
}

export const MovieListMutations = {
  [MovieListMutationType.AddMovies](state: MovieListState, payload: {movies: Movie[]}) {
    state.movies = [...state.movies, ...payload.movies].sort((a, b) => b.popularity - a.popularity);
  },
  [MovieListMutationType.ToggleDataLoaded](state: MovieListState) {
    state.dataLoaded = !state.dataLoaded;
  },
};
