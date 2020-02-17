<template>
  <div class="container">
    <div class="button-container">
      <el-row justify="end" style="margin-bottom: 2rem">
        <el-button class="btn" type="primary">Ajouter un commerçant</el-button>
      </el-row>
    </div>
    <template>
      <el-table :data="dataTable" style="width: 100%">
        <el-table-column label="Nom">
          <template slot-scope="scope">
            <b>{{ scope.row.name }}</b>
          </template>
        </el-table-column>
        <el-table-column label="Type" width="180">
          <el-progress type="circle" :percentage="25"></el-progress>
          <template slot-scope="scope">
            <span style="margin-right: 10px">{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Tags">
          <template slot-scope="scope">
            <span
              style="margin-right: 10px"
              v-for="(tag, index) in scope.row.tags"
              :key="index"
            >#{{ tag }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Greenscore" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.greenscore }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Localisation">
          <template slot-scope="scope">
            <span>
              {{ scope.row.address }}, {{ scope.row.zipcode }},
              {{ scope.row.city }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="Opérations">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
              <i class="el-icon-delete"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      columns: [
        {
          prop: "name",
          label: "Nom",
          width: 180
        },
        {
          prop: "description",
          label: "Type"
        },
        {
          prop: "tags",
          label: "Tags"
        },

        {
          prop: "greenscore",
          label: "Greenscore"
        },
        {
          prop: "address",
          label: "Localisation",
          width: 200
        }
      ],
      dataTable: [
        {
          id: 1,
          name: "GIVEN",
          address: "89 rue de Bagnolet",
          zipcode: "75020",
          city: "Paris",
          description: "Resto",
          tags: ["Vegan", "GlutenFree"],
          greenscore: "37"
        },
        {
          id: 2,
          name: "ABATTOIR VEGETAL",
          address: "61 rue Ramey",
          zipcode: "75018",
          city: "Paris",
          description: "Resto",
          tags: ["Vegan", "GlutenFree"],
          greenscore: "89"
        },
        {
          id: 3,
          name: "LE MEZZE DU CHEF",
          address: "61 rue Ramey",
          zipcode: "75018",
          city: "Paris",
          description: "Resto",
          tags: ["Vegan", "GlutenFree"],
          greenscore: "89"
        },
        {
          id: 4,
          name: "LE MEZZE DU CHEF",
          address: "61 rue Ramey",
          zipcode: "75018",
          city: "Paris",
          description: "Resto",
          tags: ["Vegan", "GlutenFree"],
          greenscore: "19"
        }
      ]
    };
  },

  mounted() {
    axios
      .get("/poi-api-test.js")

      .then(response =>
        // eslint-disable-next-line no-console
        console.log(response.data)
      );
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row); // eslint-disable-line
    },
    handleDelete(index, row) {
      console.log(index, row); // eslint-disable-line
    }
  }
};
</script>
