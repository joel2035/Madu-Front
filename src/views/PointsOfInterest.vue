<template>
  <div class="poi">
    <h2>Gestions de commerces</h2>
    <PoiTable />
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
