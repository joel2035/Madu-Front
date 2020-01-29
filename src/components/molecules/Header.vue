<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="MADU logo" />
    </div>
    <div class="interactions">
      <el-input class="search-input" v-model="searchFilter"></el-input>
      <div class="logout-icon">
        <v-icon name="power-off"></v-icon>
      </div>
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
  padding: 20px 0;
  border-bottom: 1px solid #CCC;
  .logo {
    width: 20%;
  }
  .interactions {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 30px;
    .search-input {
      input {
        width: 200px;
        border-radius: 30px;
        transition: all ease-in-out 0.25s;
        border: 1px solid #ccc;
        &:focus {
          width: 400px;
        }
      }
    }
    .logout-icon {
      border-radius: 30px;
      padding: 11px 11px 5px 11px;
      border: 1px solid #ccc;
    }
  }
}
</style>
