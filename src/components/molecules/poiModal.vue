<template>
  <el-dialog
    :title="isEdit ? 'Modifier commerçant' : 'Ajouter un commerçant'"
    :visible.sync="showModal"
    width="60%"
    append-to-body
    @close="showModal = false"
  >
    <div class="content">
      <h2>{{ isEdit ? "Modifier" : "Ajouter" }} un commerçant</h2>
      <el-input placeholder="Nom" v-model="input" clearable></el-input>
    </div>
    <span slot="footer">
      <el-button @click="showModal = false">Annuler</el-button>
      <el-button type="primary" @click="successCallback">Modifier</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  components: {},

  props: {
    shop: {
      type: Object
    },
    isEdit: {
      type: Boolean,
      default: false
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
    },
    successCallback() {
      this.$emit("successCallback");
    }
  }
};
</script>

<style lang="scss" module></style>
