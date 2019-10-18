<template>
  <div class="actors-show">
    <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>
    <p>Known For: {{ actor.known_for }}</p>
    <p>Gender: {{ actor.gender }}</p>
    <p>Age: {{ actor.age }}</p>
    <p>Move ID: {{ actor.movie_id }}</p>
    <router-link v-bind:to="`/actors/${actor.id}/edit`">
      <button class="btn btn-warning">Edit</button>
    </router-link>
    <div>
      <button v-on:click="destoryActor()">Destroy</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      actor: {}
    };
  },
  created: function() {
    axios.get("/api/actors/" + this.$route.params.id).then(response => {
      this.actor = response.data;
      console.log(this.actor);
    });
  },
  methods: {
    destoryActor: function(actor) {
      axios.delete("/api/actors/" + this.actor.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/actors");
      });
    }
  }
};
</script>
