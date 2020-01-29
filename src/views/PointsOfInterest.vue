<template>
  <div class="poi">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Liste" name="first">
        <PoiTable />
      </el-tab-pane>
      <el-tab-pane label="Map" name="second">
        <Map />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Map from "../components/atoms/Map";
import PoiTable from "../components/organisms/PoiTable";
export default {
  components: {
    Map,
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
