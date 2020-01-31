<template>
  <div class="header">
    <div class="logo">
      <img src="../../static/img/Logo.png" alt="MADU logo" />
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
  data: function() {
    return {
      searchFilter: ""
    };
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 2;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0;
  border-bottom: 1px solid #ccc;
  .logo {
    width: 200px;
    height: 80px;
    img {
      height: 80px;
      width: 200px;
    }
  }
  .interactions {
    padding: 20px 0;
    width: calc(100vw - 200px);
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
