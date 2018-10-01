import {MovieListState} from '@/app/movie-list/movie-list.types';
import {MovieListActions as actions} from '@/app/movie-list/movie-list.actions';
import {MovieListMutations as mutations} from '@/app/movie-list/movie-list.mutations';
import {MovieListGetters as getters} from '@/app/movie-list/movie-list.getters';

const state: MovieListState = {
  dataLoaded: false,
  movies: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
