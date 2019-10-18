import Vue from "vue";
import Router from "vue-router";
import MoviesIndex from "./views/movies/Index.vue";
import MoviesShow from "./views/movies/Show.vue";
import MoviesNew from "./views/movies/New.vue";
import MoviesEdit from "./views/movies/Edit.vue";
import ActorsIndex from "./views/actors/Index.vue";
import ActorsShow from "./views/actors/Show.vue";
import ActorsNew from "./views/actors/New.vue";
import ActorsEdit from "./views/actors/Edit.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/movies",
      name: "movies-index",
      component: MoviesIndex
    },

    {
      path: "/movies/:id/edit",
      name: "movies-edit",
      component: MoviesEdit
    },
    {
      path: "/movies/:id",
      name: "movies-show",
      component: MoviesShow
    },
    {
      path: "/movies/new",
      name: "movies-new",
      component: MoviesNew
    },
    {
      path: "/actors",
      name: "actors-index",
      component: ActorsIndex
    },

    {
      path: "/actors/:id/edit",
      name: "actors-edit",
      component: ActorsEdit
    },
    {
      path: "/actors/:id",
      name: "actors-show",
      component: ActorsShow
    },
    {
      path: "/actors/new",
      name: "actors-new",
      component: ActorsNew
    },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
