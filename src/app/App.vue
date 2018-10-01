<template>
  <article>
    <nav class="navbar navbar-light bg-light mb-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1>Now Playing</h1>
          <h6 class="text-secondary">in UK cinemas</h6>
        </a>
      </div>
    </nav>
    <div class="container">
        <div class="col">
          <Spinner></Spinner>
        </div>
      </div>
      <div v-else class="row">
        <MovieList class="col-10"></MovieList>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MovieList from './movie-list/MovieList';
import Spinner from '../utils/Spinner';

@Component({
  components: {
      Spinner,
      MovieList
  },
    computed: {
      dataLoadCompleted() {
          return false;
      }
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
  nav.navbar > .container {
    position: relative;
    justify-content: flex-start;

    h6 {
      position: absolute;
      bottom: -.7rem;
      left: 7.75rem;
    }
  }
</style>
