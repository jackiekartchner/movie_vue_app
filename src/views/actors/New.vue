<template>
  <div class="actors-new">
    <form v-on:submit.prevent="submit()">
      <h1>New Actor</h1>
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
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      known_for: "",
      gender: "",
      age: "",
      movie_id: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        known_for: this.known_for,
        gender: this.gender,
        age: this.age,
        movie_id: this.movie_id
      };
      axios
        .post("/api/actors", params)
        .then(response => {
          this.$router.push("/actors");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
