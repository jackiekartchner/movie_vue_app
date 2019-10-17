<template>
  <div class="actors-index">
    <h1>All Actors</h1>
    Search by title: <input v-model="titleFilter" list="titles">
    <datalist id="titles">
      <option v-for="movie in movies">{{ movie.title }}</option>
    </datalist>
    <div v-for="movies in orderBy(filterBy(movies, titleFilter, 'title'), 'title')">
      <div>
        <button>Sort Alphabetically</button>
      </div>
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      movies: [],
      currentMovie: {},
      titleFilter: ""
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
