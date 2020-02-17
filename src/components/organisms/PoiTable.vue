<template>
  <el-table :data="dataTable" style="width: 100%">
    <el-table-column
      v-for="(column, idx) in columns"
      :key="idx"
      :prop="column.prop"
      :label="column.label"
      :width="column.width"
      sortable
    ></el-table-column>
    <el-table-column>
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
          prop: "category",
          label: "Type"
        },
        {
          prop: "tag",
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
          address: "89 rue de Bagnolet, 75020",
          category: "Resto",
          price: "14,5€ menu",
          restrictions: "VEGAN FRIENDLY (VG)",
          glutenfree: "Option",
          organic: "En partie",
          accessibility: "",
          greenscore: "37"
        },
        {
          id: 2,
          name: "ABATTOIR VEGETAL",
          address: "61 rue Ramey, 75018",
          openingHours: "horaires divers",
          category: "Resto",
          type: "",
          price: "16,50-19€ menu",
          restrictions: "VEGAN",
          glutenfree: "",
          organic: "Full",
          accessibility: "",
          greenscore: "89"
        },
        {
          id: 3,
          name: "LE MEZZE DU CHEF",
          address: "80 rue de Ménilmontant, 75020",
          category: "Resto",
          type: "Oriental",
          price: "10€ assiette mezze",
          restrictions: "VEGAN FRIENDLY (VG)",
          glutenfree: "OPTION",
          organic: "",
          accessibility: "",
          greenscore: "90"
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
