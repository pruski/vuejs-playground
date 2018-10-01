import {MovieFiltersState} from '@/app/movie-filters/movie-filters.types';
import {MovieFiltersActions as actions} from '@/app/movie-filters/movie-filters.actions';
import {MovieFiltersMutations as mutations} from '@/app/movie-filters/movie-filters.mutations';
import {MovieFiltersGetters as getters} from '@/app/movie-filters/movie-filters.getters';

const state: MovieFiltersState = {
  dataLoaded: false,
  genres: [],
  minRating: 3,
  selectedGenreIds: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
