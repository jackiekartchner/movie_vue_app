<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="/movies">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link class="nav-item nav-link" to="/movies/new">New Post</router-link>
          <router-link class="nav-item nav-link" to="/signup">Signup</router-link>
          <router-link class="nav-item nav-link" to="/login">Login</router-link>
          <router-link class="nav-item nav-link" to="/logout">Logout</router-link>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />

      <footer id="footer" class="midnight-blue">
        <!-- ... -->
      </footer>
      <!--/#footer-->
    </div>
  </div>
</template>
