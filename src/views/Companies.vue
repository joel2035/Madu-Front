<template>
  <div class="companies">
    <div class="view-header">
      <h1 class="title">Clients</h1>
      <el-button type="primary" @click="openCreationModal"
        >Ajouter un client</el-button
      >
    </div>
    <el-table :data="fakeData">
      <el-table-column prop="name" label="Nom" width="150"></el-table-column>
      <el-table-column
        prop="address"
        label="Adresse"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="zipCode"
        label="Code postal"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="gains"
        label="Cagnotte"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="accounts"
        label="Nombre d'inscrits"
        width="150"
      ></el-table-column>
      <el-table-column label="Opération" fixed="right" width="150">
        <template slot-scope="scope">
          <div class="buttons">
            <el-button-group>
              <el-button
                type="primary"
                icon="el-icon-edit"
                @click="editClient(scope.row)"
              ></el-button>
              <el-button
                type="primary"
                icon="el-icon-delete"
                @click="openArchiveModal(scope.row)"
              ></el-button>
            </el-button-group>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <archive-modal
      ref="archiveModal"
      modelName="client"
      @successCallback="archiveClient"
    ></archive-modal>
  </div>
</template>

<script>
import ArchiveModal from "../components/organisms/archiveModal.vue";

export default {
  components: {
    ArchiveModal
  },

  props: {},

  data: function() {
    return {
      selectedClient: null,
      fakeData: [
        {
          name: "HETIC",
          address: "27 rue du Progrès",
          zipCode: 93100,
          gains: 2,
          accounts: 10
        }
      ]
    };
  },

  computed: {},

  mounted: function() {},

  methods: {
    editClient() {
      console.debug("open edit modal"); // eslint-disable-line
    },
    openArchiveModal(client) {
      this.selectedClient = client;
      this.$refs.archiveModal.open();
    },
    archiveClient() {
      console.debug("open archive modal"); // eslint-disable-line
    },
    openCreationModal() {
      console.debug("open creation modal"); // eslint-disable-line
    }
  }
};
</script>

<style lang="scss">
.companies {
  padding: 0 2rem 2rem;
  .view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
