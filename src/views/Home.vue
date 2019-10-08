<template>
  <div class="home">
    <h1>New Actor</h1>
    <div>
      First Name:
      <input type="text" v-model="newActorFirstName" />
      <br />
      Last Name:
      <input type="text" v-model="newActorLastName" />
      <br />
      Known For:
      <input type="text" v-model="newActorKnwonFor" />
      <br />
      Movie Plot:
      <input type="text" v-model="newActorMoviePlot" />
    </div>
    <button v-on:click="createActor()">Create</button>

    <h1>All Actors</h1>

    <div v-for="actor in actors">
      <h2>First Name: {{ actor.first_name }}</h2>
      <h2>Last Name: {{ actor.last_name }}</h2>
      <div>
        <button v-on:click="showActor(actor)">More Info</button>
      </div>
      <div v-if="actor === currentActor">
        <p>Known For: {{ actor.known_for }}</p>
        <p>Movie Plot: {{ actor.movie_plot }}</p>

        <h4>Edit Actor</h4>
        <div>
          First Name:
          <input type="text" v-model="actor.first_name" />
          <br />
          Last Name:
          <input type="text" v-model="actor.last_name" />
          <br />
          Known For:
          <input type="text" v-model="actor.known_for" />
          <br />
          Movie Plot:
          <input type="decimal" v-model="actor.movie_plot" />
          <br />
          <button v-on:click="updateActor()">Update</button>
          <br />
          <button v-on:click="destroyActor()">Destroy</button>
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
      actors: [],
      newActorFirstName: "",
      newActorLastName: "",
      newActorKnwonFor: "",
      newActorMoviePlot: "",
      currentActor: {}
    };
  },
  created: function() {
    axios.get("/api/actors").then(response => {
      this.actors = response.data;
      console.log(this.actors);
    });
  },
  methods: {
    createActor: function() {
      var params = {
        first_name: this.newActorFirstName,
        last_name: this.newActorLastName,
        known_for: this.newActorKnwonFor,
        movie_plot: this.newActorMoviePlot
      };
      axios
        .post("/api/actors", params)
        .then(response => {
          console.log("Success", response.data);
          this.actors.push(response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    showActor: function(actor) {
      if (this.currentActor === actor) {
        this.currentActor = {};
      } else {
        this.currentActor = actor;
      }
    },
    updateActor: function(actor) {
      var params = {
        first_name: actor.first_name,
        last_name: actor.last_name,
        known_for: actor.known_for,
        movie_plot: actor.movie_plot
      };
      axios
        .patch("/api/actors/" + actor.id, params)
        .then(response => {
          console.log("Success", response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    destroyActor: function(actor) {
      axios.delete("/api/actors" + actor.id).then(response => {
        console.log("Success", response.data);
        var index = this.actors.indexOf(actor);
        this.actors.splice(index, 1);
      });
    }
  }
};
</script>
