<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{name: 'Home'}">Standings</router-link>
          <router-link class="navbar-item" :to="{name: 'MatchesList'}">Future matches</router-link>     
          <router-link class="navbar-item" :to="{name: 'LiveMatchesList'}">Live matches</router-link>      
        </div>
      </div>
    </nav>
    <section class="section">
      <router-view></router-view>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>English Premier League</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>
