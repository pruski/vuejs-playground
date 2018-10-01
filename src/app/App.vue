<template>
  <article>
    <nav class="navbar navbar-light bg-light mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1>Now Playing</h1>
          <h6 class="text-secondary">in cinemas in the UK</h6>
        </a>
      </div>
    </nav>
    <div class="container">
      <div v-if="!dataLoaded" class="row">
        <div class="col">
          <Spinner></Spinner>
        </div>
      </div>
      <div v-show="dataLoaded" class="row">
        <MovieList class="col-10"></MovieList>
        <MovieFilters class="col-2"></MovieFilters>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import MovieList from '@/app/movie-list/MovieList.vue';
import MovieFilters from '@/app/movie-filters/MovieFilters.vue';
import Spinner from '@/app/utils/Spinner.vue';

@Component({
  components: {
    Spinner,
    MovieList,
    MovieFilters,
  },
  computed: {
    dataLoaded() {
      return this.$store.state.movieList.dataLoaded && this.$store.state.movieFilters.dataLoaded;
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  nav.navbar > .container {
    position: relative;
    justify-content: flex-start;

    h6 {
      position: absolute;
      bottom: -.6rem;
      left: 3.9rem;
    }
  }
</style>
