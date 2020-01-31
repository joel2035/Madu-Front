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
  data: function() {
    return {
      sidebarEntries: [
        {
          name: "Home",
          link: "home",
          icon: "el-icon-house"
        },
        {
          name: "POI",
          link: "poi-list",
          icon: "el-icon-shopping-bag-1"
        },
        {
          name: "GreenScore",
          link: "GreenScore",
          icon: "el-icon-shopping-bag-1"
        },
        {
          name: "Edit",
          link: "Edit",
          icon: "el-icon-shopping-bag-1"
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
  }
};
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  width: 200px;
  left: 0;
  top: 81px;
  bottom: 0;
  background-color: #0b4f6c;
  .version {
    position: absolute;
    bottom: 15px;
    left: 10px;
  }
}
</style>
