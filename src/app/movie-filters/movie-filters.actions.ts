import {ActionContext} from 'vuex';
import {get} from '@/app/utils/api';
import {MovieFiltersState} from '@/app/movie-filters/movie-filters.types';
import {MovieFiltersMutationType} from '@/app/movie-filters/movie-filters.mutations';

export enum MovieFiltersActionTypes {
  FetchGenres = 'FetchGenres',
}

export const MovieFiltersActions = {
  async [MovieFiltersActionTypes.FetchGenres]({commit}: ActionContext<MovieFiltersState, any>) {
    const response = await get('/genre/movie/list');

    if (response.ok) {
      const result = await response.json();

      commit(MovieFiltersMutationType.AddGenresAndToggleDataLoaded, {genres: result.genres});
    }
  },
};
