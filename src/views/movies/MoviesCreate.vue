<template>
  <div class="movies-create">
    <h1>New Movie</h1>
    <div>
      Title:
      <input type="text" v-model="newMovieTitle" />
      {{ newMovieTitle }}
      <br />
      Year:
      <input type="text" v-model="newMovieYear" />
      {{ newMovieYear }}
      <br />
      Plot:
      <input type="text" v-model="newMoviePlot" />
      {{ newMoviePlot }}
      <br />
      Director:
      <input type="text" v-model="newMovieDirector" />
      {{ newMovieDirector }}
      <br />
      English:
      <input type="text" v-model="newMovieEnglish" />
      {{ newMovieEnglish }}
      <br />
      Genres:
      <input type="text" v-model="newMovieGenres" />
      {{ newMovieGenres }}
    </div>
    <button v-on:click="createMovie()">Create</button>
  </div>
</template>
<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movies: [],
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
      newMovieGenres: "",
      currentMovie: {}
    };
  },

  methods: {
    createMovie: function() {
      var params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector,
        english: this.newMovieEnglish,
        genres: this.newMovieGenres
      };
      axios
        .post("/api/movies", params)
        .then(response => {
          console.log("Success", response.data);
          this.movies.push(response.data);
          this.newMovieTitle;
          this.newMovieYear;
          this.newMoviePlot;
          this.newMovieDirector;
          this.newMovieEnglish;
          this.newMovieGenres;
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    }
  }
};
</script>
