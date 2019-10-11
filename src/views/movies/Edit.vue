<template>
  <div class="movies-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Movie</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" v-model="title" />
        </div>
        <div class="form-group">
          <label>Year:</label>
          <input type="text" class="form-control" v-model="year" />
        </div>
        <div class="form-group">
          <label>Plot:</label>
          <input type="text" class="form-control" v-model="plot" />
        </div>
        <div class="form-group">
          <label>Director:</label>
          <input type="text" class="form-control" v-model="director" />
        </div>
        <div class="form-group">
          <label>English:</label>
          <input type="text" class="form-control" v-model="english" />
        </div>
        <div class="form-group">
          <label>Genres:</label>
          <input type="text" class="form-control" v-model="genres" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
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
      movie: {},
      errors: []
    };
  },

  created: function() {
    axios.get("/api/movies/" + this.$route.params.id).then(response => {
      this.movie = response.data;
      console.log(this.movie);
    });
  },

  methods: {
    submit: function() {
      var params = {
        title: this.title,
        year: this.year,
        plot: this.plot,
        director: this.director,
        english: this.english,
        genres: this.genres
      };
      axios
        .post("/api/movies", params)
        .then(response => {
          this.$router.push("/movies");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyPost: function(movie) {
      axios.delete("/api/movies/" + this.movie.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/movies");
      });
    }
  }
};
</script>
