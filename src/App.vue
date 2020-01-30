<template>
  <div id="app">
    <login v-if="!UserIsLogged"></login>
    <div v-else>
      <Header></Header>
      <Sidebar></Sidebar>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Header from "./components/molecules/Header.vue";
import Sidebar from "./components/organisms/Sidebar.vue";

export default {
  
  components: {
    Login,
    Header,
    Sidebar
  },
  computed: {
    UserIsLogged() {
      return true;
      // return this.$store.state.currentUser.authenticated;
    }
  }
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

.main {
  margin-left: 200px;
}
</style>
