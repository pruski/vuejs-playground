import Vue from 'vue';
import Vuex from 'vuex';

import movieList from './app/movie-list/movie-list.module';
import movieFilters from './app/movie-filters/movie-filters.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movieList,
    movieFilters,
  },
});
