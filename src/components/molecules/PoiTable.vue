<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column
      v-for="(column, idx) in columns"
      :key="idx"
      :prop="column.prop"
      :label="column.label"
    >
    </el-table-column>
    <el-table-column>
      <el-button @click="goDetail" type="text" size="small">Detail</el-button>
      <el-button @click="goEdit" type="text" size="small">Modifier</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
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
      data: [
        {
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
          greenscore: "",
          edit: "Modifier"
        },
        {
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
          greenscore: "",
          edit: "Modifier"
        },
        {
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
          greenscore: "",
          edit: "Modifier"
        }
      ]
    };
  }
};
</script>
