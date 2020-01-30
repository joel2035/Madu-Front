<template>
  <div class="companies">
    <div class="title">Enseignes</div>
    <el-table :data="fakeData">
      <el-table-column prop="name" label="Nom" width="150"></el-table-column>
      <el-table-column prop="address" label="Adresse" width="150"></el-table-column>
      <el-table-column prop="zipCode" label="Code postal" width="150"></el-table-column>
      <el-table-column prop="hours" label="Heure d'ouverture" width="150"></el-table-column>
      <el-table-column label="Tags" width="150">
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.key_words" :key="tag">{{ tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="Catégorie" width="150"></el-table-column>
      <el-table-column prop="type" label="Type" width="150"></el-table-column>
      <el-table-column prop="pricing" label="Prix" width="150"></el-table-column>
      <el-table-column prop="gluten" label="Gluten" width="150"></el-table-column>
      <el-table-column prop="bio" label="Bio" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},

  props: {},

  data: function() {
    return {
      fakeData: [
        {
          name: "GIVEN",
          address: "89 rue de Bagnolet",
          zipCode: 75020,
          hours: "midi du mardi au vendredi, samedi 19-23h30",
          key_words: ["Happy hour", "sangria-tartine", "vegan"],
          category: "Resto",
          type: "Healthy",
          pricing: "14,5€ menu",
          gluten: "OPTION",
          bio: "EN PARTIE"
        }
      ]
    };
  },

  computed: {},

  mounted: function() {},

  methods: {}
};
</script>

<style lang="scss"></style>
