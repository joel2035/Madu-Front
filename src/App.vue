<template>
  <div id="app">
    <login v-if="!UserIsLogged"></login>
    <div v-else>
      <Header></Header>
      <div class="sidebar"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Login,
    Header
  },
  computed: {
    UserIsLogged() {
      return true;
      // return this.$store.state.currentUser.authenticated;
    }
  },
  mounted: function() {},

  methods: {}
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
