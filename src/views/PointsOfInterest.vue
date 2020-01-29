<template>
  <div class="poi">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Map" name="first"> <Map /></el-tab-pane>
      <el-tab-pane label="Liste" name="second"><PoiTable /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Map from "../components/atoms/Map";
import PoiTable from "../components/molecules/PoiTable";
export default {
  components: {
    Map,
    PoiTable
  },

  props: {},

  data() {
    return {
      activeName: "first"
    };
  },

  computed: {},

  mounted: function() {}
};
</script>

<style lang="scss"></style>
