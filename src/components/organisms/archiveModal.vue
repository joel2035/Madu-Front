<template>
  <el-dialog
    title="Archivage"
    :visible.sync="showModal"
    width="60%"
    append-to-body
    @close="showModal = false"
  >
    <div class="content">Êtes-vous sûr(e) de vouloir archiver {{ modelName }}</div>
    <span slot="footer">
      <el-button @click="showModal = false">Annuler</el-button>
      <el-button type="primary" @click="successCallback">Archiver</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},

  props: {
    modelName: {
      type: String,
      required: true
    },
    successCallback: {
      type: Function
    }
  },

  data: function() {
    return {
      showModal: false
    };
  },

  computed: {},

  mounted: function() {},

  methods: {
    open() {
      this.showModal = true;
    }
  }
};
</script>

<style lang="scss" module></style>
