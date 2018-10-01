import {expect} from 'chai';
import {MovieListGetters, MovieListGetterType} from '@/app/movie-list/movie-list.getters';

describe('MovieListGetters', () => {
  let state: any;
  let rootState: any;

  describe('FilteredList', () => {
    beforeEach(() => {
      state = {
        movies: [
          {vote_average: 5, genre_ids: [1, 2]},
          {vote_average: 3, genre_ids: [1, 2, 4]},
        ] as any,
      };
      rootState = {
        movieList: state,
        movieFilters: {
          minRating: 3,
          selectedGenreIds: [],
        },
      };
    });

    it('should return movies with rating greater or equal than the movieFilters.minRating', () => {
      rootState.movieFilters.minRating = 5;
      const result = MovieListGetters[MovieListGetterType.FilteredList](state, MovieListGetters, rootState);

      expect(result[0].vote_average).to.equal(5);
    });

    it('should return movies filtered by genres', () => {
      rootState.movieFilters.selectedGenreIds = [4, 2];
      const result = MovieListGetters[MovieListGetterType.FilteredList](state, MovieListGetters, rootState);

      expect(result[0].genre_ids).to.include(4);
      expect(result[0].genre_ids).to.include(2);
    });
  });
});
