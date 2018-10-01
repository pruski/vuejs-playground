<template>
  <article class="card card-body">
    <ul>
      <li v-for="movie in filteredList" class="card card-body">
        <h6>{{ movie.title }}</h6>
        <small>{{ getGenreNamesByIds(movie.genre_ids).join(', ') }}</small>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {mapGetters} from 'vuex';
import {MovieListGetterType} from './movie-list.getters';
import {MovieFiltersGetterType} from '../movie-filters/movie-filters.getters';

@Component({
  computed: {
    ...mapGetters('movieList', {filteredList: MovieListGetterType.FilteredList}),
    ...mapGetters('movieFilters', {getGenreNamesByIds: MovieFiltersGetterType.GenreNamesByIds}),
  },
})
export default class MovieList extends Vue {
  created() {
    this.$store.dispatch('movieList/FetchMovies');
  }
}
</script>

<style scoped lang="scss"></style>
