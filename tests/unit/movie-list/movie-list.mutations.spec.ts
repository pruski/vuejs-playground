import {expect} from 'chai';
import {MovieListMutations, MovieListMutationType} from '@/app/movie-list/movie-list.mutations';

describe('MovieListMutations', () => {
  let state: any;

  describe('AddMovies', () => {
    beforeEach(() => {
      state = {
        movies: [],
      };
    });

    it('should add movies to the list', () => {
      MovieListMutations[MovieListMutationType.AddMovies](state, {movies: [{test: 'test'} as any]});

      expect(state.movies.length).to.equal(1);
    });

    it('should sort movies after appending', () => {
      state.movies = [{popularity: 5} as any];
      MovieListMutations[MovieListMutationType.AddMovies](state, {movies: [{popularity: 10} as any]});

      expect(state.movies[0].popularity).to.equal(10);
      expect(state.movies[1].popularity).to.equal(5);
    });
  });

  describe('ToggleDataLoaded', () => {
    beforeEach(() => {
      state = {
        dataLoaded: false,
      };
    });

    it('should toggle dataLoaded flag', () => {
      MovieListMutations[MovieListMutationType.ToggleDataLoaded](state);

      expect(state.dataLoaded).to.equal(true);
    });
  });
});
