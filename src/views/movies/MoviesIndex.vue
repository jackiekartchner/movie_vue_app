<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    <div v-for="movie in movies">
      <h2>
        <b>Title:</b>
        {{ movie.title }}
      </h2>
      <p>
        <b>Year:</b>
        {{ movie.year }}
      </p>
      <div>
        <button v-on:click="showMovie(movie)">More Info</button>
      </div>
      <div v-if="movie === currentMovie">
        <p>
          <b>Plot:</b>
          {{ movie.plot }}
        </p>
        <p>
          <b>Director:</b>
          {{ movie.director }}
        </p>
        <p>
          <b>English:</b>
          {{ movie.english }}
        </p>
        <p>
          <b>Genres:</b>
          {{ movie.genres }}
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>

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
    axios.get("api/movies").then(response => {
      this.movies = response.data;
      console.log(this.movies);
    });
  },
  methods: {
    showMovie: function(movie) {
      if (this.currentMovie === movie) {
        this.currentMovie = {};
      } else {
        this.currentMovie = movie;
      }
    }
  }
};
</script>
