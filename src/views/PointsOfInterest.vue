<template>
  <div class="poi">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Niveau 1" name="first">
        <PoiTable />
      </el-tab-pane>
      <el-tab-pane label="Niveau 2" name="second">
        <PoiTable />
      </el-tab-pane>
      <el-tab-pane label="Niveau 3" name="third">
        <PoiTable />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PoiTable from "../components/organisms/PoiTable";
export default {
  components: {
    PoiTable
  },

  data() {
    return {
      activeName: "first"
    };
  },

  mounted: function() {}
};
</script>

<style lang="scss">
.poi {
  padding: 2rem;
}
</style>
