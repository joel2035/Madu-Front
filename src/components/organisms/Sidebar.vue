<template>
  <div class="sidebar">
    <sidebar-entry
      v-for="entry in sidebarEntries"
      :key="entry.name"
      :name="entry.name"
      :linkName="entry.link"
      :icon="entry.icon"
    ></sidebar-entry>
    <div class="version">{{ version }}</div>
  </div>
</template>

<script>
import SidebarEntry from "./../molecules/SidebarEntry.vue";

/*global VERSION:true*/

export default {
  components: {
    SidebarEntry
  },

  props: {},

  data: function() {
    return {
      sidebarEntries: [
        {
          name: "home",
          link: "home",
          icon: "el-icon-s-home"
        }
      ]
    };
  },

  computed: {
    version() {
      try {
        return VERSION;
      } catch (e) {
        console.error(e); // eslint-disable-line
        return "";
      }
    }
  },

  mounted: function() {},

  methods: {}
};
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  width: 200px;
  left: 0;
  top: 81px;
  bottom: 0;
  background-color: #ccc;
  .version {
    position: absolute;
    bottom: 15px;
    left: 10px;
  }
}
</style>
