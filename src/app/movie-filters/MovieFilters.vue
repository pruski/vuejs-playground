<template>
  <article class="card card-body">
    <header>
      <h4>Filters</h4>
    </header>
    <section>
      <header>
        <h6>min rating: {{minRating}}</h6>
      </header>
      <input v-model="minRating" type="range" min="0" max="10" step="0.5">
    </section>
    <section>
      <header>
        <h6>genres:</h6>
      </header>
      <ul class="list-unstyled">
        <li v-for="genre in genres">
          <input type="checkbox" :checked="selectedGenreIds.includes(genre.id)" @click.prevent="checkboxClicked(genre.id)" /> {{ genre.name }}
        </li>
      </ul>
    </section>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {MovieFiltersMutationType} from './movie-filters.mutations';
import {Genre} from './movie-filters.types';

@Component
export default class MovieFilters extends Vue {
  get minRating(): number {
    return this.$store.state.movieFilters.minRating;
  }

  set minRating(minRating: number) {
    this.$store.commit('movieFilters/' + MovieFiltersMutationType.UpdateMinRating, {minRating});
  }

  get genres(): Genre[] {
    return this.$store.state.movieFilters.genres;
  }

  get selectedGenreIds(): Genre[] {
    return this.$store.state.movieFilters.selectedGenreIds;
  }

  public checkboxClicked(genreId: number) {
    this.$store.commit('movieFilters/' + MovieFiltersMutationType.ToggleGenre, {genreId});
  }

  public created() {
    this.$store.dispatch('movieFilters/FetchGenres');
  }
}
</script>

<style scoped lang="sass">

</style>