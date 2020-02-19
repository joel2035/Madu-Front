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
      <el-table-column prop="address" label="Adresse"></el-table-column>
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
              >Voir la fiche</el-button
            >
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
    <map-modal :selectedClient="selectedClient"></map-modal>
    <edit-client-modal
      ref="editModal"
      :client="selectedClient"
      :clientCoords="clientCoords"
    ></edit-client-modal>
  </div>
</template>

<script>
import ArchiveModal from "../components/organisms/archiveModal.vue";
import EditClientModal from "../components/organisms/editClientModal.vue";
import openGeocoder from "node-open-geocoder";
import { mapActions } from "vuex";

// search
export default {
  components: {
    ArchiveModal,
    EditClientModal
  },

  props: {},

  data: function() {
    return {
      selectedClient: {},
      fakeData: [
        {
          name: "HETIC",
          address: "14 Boulevard Haussmann, 75009 Paris",
          zipCode: 93100,
          gains: 2,
          accounts: 10
        }
      ],
      clientCoords: {}
    };
  },

  computed: {},

  mounted: function() {
    this.retrieveData();
  },

  methods: {
    ...mapActions(["fetchData", "postData", "createData"]),
    retrieveData() {
      this.fetchData({
        modelName: "structures"
      });
    },
    editClient() {
      this.$refs.editModal.open();
      console.debug("open edit modal"); // eslint-disable-line
    },
    openMapModal(client) {
      openGeocoder()
        .geocode(this.fakeData.address)
        .end((err, res) => {
          console.debug(res); // eslint-disable-line
          this.selectedClient = client;
          this.clientCoords = {
            lat: res.lat,
            lon: res.lon
          };
        });
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
    color: #77848f;
    background-color: #fafbfc;
    &::before,
    .el-table__fixed-right::before,
    .el-table__fixed::before {
      display: none;
    }
    th,
    tr {
      background-color: #fafbfc;
      border: none !important;
    }
    td {
      border: none !important;
    }
    .header-cell {
      text-transform: uppercase;
      color: #b4bac6;
    }
    .company-name {
      font-family: "Lato Bold";
    }
    .map-button,
    .delete-button {
      border-color: #c0c5d2;
      color: #c0c5d2;
      background-color: #fafbfc;
    }
    .edit-button {
      background-color: #fafbfc;
      color: #0077ff;
      border-color: #0077ff;
    }
  }
}
</style>
