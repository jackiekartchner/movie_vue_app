<template>
  <div class="movies-index">
    <h1>All Movies</h1>

    <div class="card-columns">
      <div class="card" v-for="movie in movies">
        <router-link v-bind:to="`/movies/${movie.id}`"></router-link>
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">
            <router-link v-bind:to="`/movies/${movie.id}`">
              <button class="btn btn-primary">More Info</button>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movies: [],
      currentMovie: {}
    };
  },
  created: function() {
    axios.get("/api/movies").then(response => {
      this.movies = response.data;
      console.log(this.movies);
    });
  },
  methods: {}
};
</script>
