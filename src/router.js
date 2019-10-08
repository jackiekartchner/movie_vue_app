import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import MoviesIndex from "./views/movies/MoviesIndex.vue";
import MoviesCreate from "./views/movies/MoviesCreate.vue";
import MoviesUpdate from "./views/movies/MoviesUpdate.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/MoviesIndex",
      name: "movies-index",
      component: MoviesIndex
    },
    {
      path: "/MoviesCreate",
      name: "movies-create",
      component: MoviesCreate
    },
    { path: "/MoviesUpdate", name: "movies-update", component: MoviesUpdate },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
