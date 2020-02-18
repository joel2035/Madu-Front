<template>
  <el-dialog
    :title="isEdit ? 'Modifier commerçant' : 'Ajouter un commerçant'"
    :visible.sync="showModal"
    append-to-body
    width="70%"
    @close="showModal = false"
  >
    <h2>{{ isEdit ? "Modifier" : "Ajouter" }} un commerçant</h2>
    <el-form :model="formData">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="Nom" class="label-style">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Adresse" class="label-style">
            <el-input v-model="formData.adress"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Code Postal" class="label-style">
            <el-input v-model="formData.zipcode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Ville" class="label-style">
            <el-input v-model="formData.city"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="Tags" class="label-style">
            <el-input v-model="formData.tags"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Type" class="label-style">
            <el-select v-model="formData.type" placeholder="Selectionner un type">
              <el-option label="Resturant" value="restaurant"></el-option>
              <el-option label="Boutique" value="shop"></el-option>
              <el-option label="Activité" value="activity"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Accès au fauteuil roulant" class="label-style">
            <el-radio v-model="formData.accessibility" label="true" border>Oui</el-radio>
            <el-radio v-model="formData.accessibility" label="false" border>Non</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-form-item>
          <el-image style="width: 100px; height: 100px" src="/static/img/food.svg"></el-image>
          <el-button type="primary" @click="innerVisible = true">Modifier</el-button>
        </el-form-item>
      </el-row>
      <el-form-item>
        <el-button @click="showModal = false">Annuler</el-button>
        <el-button type="primary" @click="successCallback">Enregistrer</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      width="50%"
      title="Modification du GREENSCORE"
      :visible.sync="innerVisible"
      append-to-body
    >
      <h2>Catégories et sous-critères</h2>

      <el-form v-model="greenscoreData.food">
        <el-form-item :label="item.label" v-for="(item, index) in greenscoreData.food" :key="index">
          <el-input-number v-model="item.value" @change="handleChange" :min="50" :max="100"></el-input-number>
        </el-form-item>
        <el-form-item
          :label="item.label"
          v-for="(item, index) in greenscoreData.resources"
          :key="index"
        >
          <el-input-number v-model="item.value" @change="handleChange" :min="50" :max="100"></el-input-number>
        </el-form-item>
        <el-form-item
          :label="item.label"
          v-for="(item, index) in greenscoreData.social"
          :key="index"
        >
          <el-input-number v-model="item.value" @change="handleChange" :min="50" :max="100"></el-input-number>
        </el-form-item>
      </el-form>
    </el-dialog>
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
      formData: {
        name: "",
        type: "",
        adress: "",
        zipcode: "",
        city: "",
        tags: "",
        accessibility: ""
      },
      greenscoreData: {
        food: [
          {
            label: "Provenance et matières prémières",
            value: "origin"
          },
          {
            label: "Agriculture concernée",
            value: "Agriculture"
          }
        ],
        resources: [
          {
            label: "Provenance et matières prémières",
            value: "origin"
          },
          {
            label: "Agriculture concernée",
            value: "Agriculture"
          }
        ],
        social: [
          {
            label: "Provenance et matières prémières",
            value: "origin"
          },
          {
            label: "Agriculture concernée",
            value: "Agriculture"
          }
        ]
      },
      showModal: false,
      innerVisible: false
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
    },
    edit() {
      this.formData.tags = this.formData.tags.split(", ");
      this.$emit("edited");
    }
  }
};
</script>

<style lang="scss" module>
.label-style {
  font-weight: bold;
  label {
    text-transform: uppercase;
  }
}
</style>
