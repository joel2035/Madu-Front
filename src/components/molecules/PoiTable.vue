<template>
  <el-table :data="dataTable" style="width: 100%">
    <el-table-column
      v-for="(column, idx) in columns"
      :key="idx"
      :prop="column.prop"
      :label="column.label"
      sortable
    ></el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button size="mini" @click="goDetail(scope.row)">Editer</el-button>
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
          label: "Nom"
        },
        {
          prop: "address",
          label: "Adresse"
        },
        {
          prop: "zipcode",
          label: "Code Postal"
        },
        {
          prop: "openingHours",
          label: "Horaires"
        },
        {
          prop: "category",
          label: "Catégorie"
        },
        {
          prop: "type",
          label: "Type"
        },
        {
          prop: "price",
          label: "Prix"
        },
        {
          prop: "restrictions",
          label: "Vege/Vegan"
        },
        {
          prop: "glutenfree",
          label: "Gluten free"
        },
        {
          prop: "organic",
          label: "Bio"
        },
        {
          prop: "accessibility",
          label: "Accessibilité"
        },
        {
          prop: "greenscore",
          label: "Greenscore"
        }
      ],
      dataTable: [
        {
          id: 1,
          name: "GIVEN",
          address: "89 rue de Bagnolet",
          zipcode: "75020",
          openingHours: "midi du mardi au vendredi, samedi 19-23h30",
          category: "Resto",
          type: "Healthy",
          price: "14,5€ menu",
          restrictions: "VEGAN FRIENDLY (VG)",
          glutenfree: "Option",
          organic: "En partie",
          accessibility: "",
          greenscore: ""
        },
        {
          id: 2,
          name: "ABATTOIR VEGETAL",
          address: "61 rue Ramey",
          zipcode: "75018",
          openingHours: "horaires divers",
          category: "Resto",
          type: "",
          price: "16,50-19€ menu",
          restrictions: "VEGAN",
          glutenfree: "",
          organic: "Full",
          accessibility: "",
          greenscore: ""
        },
        {
          id: 3,
          name: "LE MEZZE DU CHEF",
          address: "80 rue de Ménilmontant",
          zipcode: "75020",
          openingHours: "9h-minuit",
          category: "Resto",
          type: "Oriental",
          price: "10€ assiette mezze",
          restrictions: "VEGAN FRIENDLY (VG)",
          glutenfree: "OPTION",
          organic: "",
          accessibility: "",
          greenscore: ""
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
    goDetail(row) {
      this.$router.push({ path: `/poi/${row.id}` });
    }
  }
};
</script>
