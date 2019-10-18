<template>
  <div class="actors-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Actor</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" v-model="FirstName" />
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="LastName" />
        </div>
        <div class="form-group">
          <label>Known For:</label>
          <input type="text" class="form-control" v-model="KnownFor" />
        </div>
        <div class="form-group">
          <label>Gender:</label>
          <input type="text" class="form-control" v-model="gender" />
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="text" class="form-control" v-model="age" />
        </div>
        <div class="form-group">
          <label>Movie ID:</label>
          <input type="text" class="form-control" v-model="MovieId" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
    <div>
      <button v-on:click="destroyActor()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      actor: {},
      errors: []
    };
  },

  created: function() {
    axios.get("/api/actors/" + this.$route.params.id).then(response => {
      this.actor = response.data;
      console.log(this.actor);
    });
  },

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
    },
    destroyPost: function(actor) {
      axios.delete("/api/actors/" + this.actor.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/actors");
      });
    }
  }
};
</script>
