<template>
  <div class="movies-show">
    <h2>{{ movie.title }}</h2>
    <p>Year: {{ movie.year }}</p>
    <p>Plot: {{ movie.plot }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>English: {{ movie.english }}</p>
    <p>Genres: {{ movie.genres }}</p>
    <router-link v-bind:to="`/movies/${movie.id}/edit`">
      <button class="btn btn-warning">Edit</button>
    </router-link>
    <div>
      <button v-on:click="destroyMovie()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movie: {}
    };
  },
  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
      console.log(this.movie);
    });
  },
  methods: {
    destroyMovie: function(movie) {
      axios.delete("/api/movies/" + this.movie.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/movies");
      });
    }
  }
};
</script>
