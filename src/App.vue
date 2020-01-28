<template>
  <div id="app">
    <login v-if="!UserIsLogged"></login>
    <div v-else>
      <div class="header"></div>
      <div class="sidebar"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login.vue";

export default {
  components: {
    Login
  },

  props: {},

  data: function() {
    return {};
  },

  computed: {
    UserIsLogged() {
      return this.$store.state.currentUser.authenticated;
    }
  },

  mounted: function() {},

  methods: {}
};
</script>

<style lang="scss">
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
