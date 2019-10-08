<template>
  <div class="movies-update">
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

        <h4>Edit Movie</h4>
        <div>
          Title:
          <input type="text" v-model="movie.title" />
          {{ movie.title }}
          <br />
          Year:
          <input type="text" v-model="movie.year" />
          {{ movie.year }}
          <br />
          Plot:
          <input type="text" v-model="movie.plot" />
          {{ movie.plot }}
          <br />
          Director:
          <input type="text" v-model="movie.director" />
          {{ movie.director }}
          <br />
          English:
          <input type="text" v-model="movie.english" />
          {{ movie.english }}
          <br />
          Genres:
          <input type="text" v-model="movie.genres" />
          {{ movie.genres }}
          <br />
          <button v-on:click="updateMovie()">Update</button>
          <br />
          <button v-on:click="destoryMovie()">Destroy</button>
        </div>
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
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
      newMovieGenres: "",
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
  },

  updateMovie: function(movie) {
    var params = {
      title: movie.title,
      year: movie.title,
      plot: movie.plot,
      director: movie.director,
      english: movie.english,
      genres: movie.genres
    };
    axios
      .patch("/api/movies/" + movie.id, params)
      .then(response => {
        console.log("Success", response.data);
      })
      .catch(error => {
        console.log(error.response.data.errors);
      });
  },
  destroyMovie: function(movie) {
    axios.delete("/api/movies" + movie.id).then(response => {
      console.log("Success", response.data);
      var index = this.movies.indexOf(movie);
      console.log(index);
      this.movies.splice(index, 1);
    });
  }
};
</script>
