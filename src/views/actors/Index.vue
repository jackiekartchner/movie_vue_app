<template>
  <div class="actors-index">
    <h1>All Actors</h1>
    Search by name:
    <input v-model="nameFilter" list="names" />
    <datalist id="names">
      <option v-for="actor in actors">{{ actor.first_name }} {{ actor.last_name }}</option>
    </datalist>
    <div v-for="actor in orderBy(filterBy(actors, nameFilter, 'last_name'), 'last_name')">
      <button>Sort Alphabetically</button>
    </div>
    <div class="card-columns">
      <div class="card" v-for="actor in actors">
        <router-link v-bind:to="`/actors/${actor.id}`"></router-link>
        <div class="card-body">
          <h5 class="card-title">{{ actor.first_name }} {{ actor.last_name }}</h5>
          <p class="card-text">
            <router-link v-bind:to="`/actors/${actor.id}`">
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
      actors: [],
      currentActor: {},
      nameFilter: ""
    };
  },
  created: function() {
    axios.get("/api/actors").then(response => {
      this.actors = response.data;
      console.log(this.actors);
    });
  },
  methods: {}
};
</script>
