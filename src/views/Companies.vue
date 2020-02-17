<template>
  <div class="companies">
    <div class="view-header">
      <h1 class="title">Gestion des entreprises</h1>
      <el-button type="primary" @click="openCreationModal"
        >Ajouter une entreprise</el-button
      >
    </div>
    <el-table :data="fakeData" header-cell-class-name="header-cell">
      <el-table-column prop="name" label="Nom">
        <template slot-scope="scope">
          <div class="company-name">{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="Type"></el-table-column>
      <el-table-column prop="size" label="Taille"></el-table-column>
      <el-table-column
        prop="accounts"
        label="Nombre d'inscrits"
      ></el-table-column>
      <el-table-column
        prop="address"
        label="Adresse"
      ></el-table-column>
      <el-table-column label="Opération" fixed="right" width="250">
        <template slot-scope="scope">
          <div class="buttons">
            <el-button
              class="map-button"
              icon="el-icon-location-outline"
              size="mini"
              @click="openMapModal(scope.row)"
            ></el-button>
            <el-button
              class="edit-button"
              type="primary"
              size="mini"
              @click="editClient(scope.row)"
            >Voir la fiche</el-button>
            <el-button
              class="delete-button"
              icon="el-icon-delete"
              size="mini"
              @click="openArchiveModal(scope.row)"
            ></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <archive-modal
      ref="archiveModal"
      modelName="client"
      @successCallback="archiveClient"
    ></archive-modal>
    <edit-client-modal :client="selectedClient"></edit-client-modal>
  </div>
</template>

<script>
import ArchiveModal from "../components/organisms/archiveModal.vue";
import EditClientModal from "../components/organisms/editClientModal.vue";

export default {
  components: {
    ArchiveModal,
    EditClientModal
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
    openMapModal() {
      console.debug("open map modal"); // eslint-disable-line
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
    .title {
      font-size: 21px;
      font-family: "Lato Bold";
    }
  }
  .el-table {
    font-size: 15px;
    color: #77848F;
      background-color: transparent;
      &::before, .el-table__fixed-right::before, .el-table__fixed::before {
        display: none;
      }
    th, tr {
      background-color: transparent;
      border: none !important;
    }
    td {
      border: none !important;
    }
    .header-cell{
      text-transform: uppercase;
      color: #B4BAC6;
    }
    .company-name {
      font-family: "Lato Bold";
    }
    .map-button, .delete-button {
        border-color: #C0C5D2;
        color: #C0C5D2;
        background-color: transparent;
    }
    .edit-button {
        background-color: transparent;
        color: #0077FF;
        border-color: #0077FF;
    }
  }
}
</style>
