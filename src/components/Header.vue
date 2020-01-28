<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="MADU logo" />
    </div>
    <div class="interactions">
      <el-input class="search-input" v-model="searchFilter"></el-input>
      <v-icon name="power-off"></v-icon>
    </div>
  </div>
</template>

<script>
import "vue-awesome/icons/power-off";

export default {
  components: {},

  props: {},

  data: function() {
    return {
      searchFilter: ""
    };
  },

  computed: {},

  mounted: function() {},

  methods: {}
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  .logo {
    width: 10%;
  }
  .interactions {
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .search-input {
      input {
        width: 100px;
        border-radius: 30px;
        transition: all ease-in-out 0.25s;
        &:focus {
          width: 200px;
        }
      }
    }
  }
}
</style>
