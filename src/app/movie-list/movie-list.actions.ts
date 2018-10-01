import {ActionContext} from 'vuex';
import {get} from '@/app/utils/api';
import {MovieListState} from './movie-list.types';
import {MovieListMutationType} from '@/app/movie-list/movie-list.mutations';

export enum MovieListActionType {
  FetchMovies = 'FetchMovies',
}

export const MovieListActions = {
  async [MovieListActionType.FetchMovies]({commit, dispatch}: ActionContext<MovieListState, any>, page = 1) {
    const response = await get('/movie/now_playing', {page, region: 'GB'});

    if (response.ok) {
      const result = await response.json();
      commit(MovieListMutationType.AddMovies, {movies: result.results});

      if (result.total_pages > page) {
        dispatch(MovieListActionType.FetchMovies, page + 1);

      } else {
        commit(MovieListMutationType.ToggleDataLoaded);
      }
    }
  },
};
