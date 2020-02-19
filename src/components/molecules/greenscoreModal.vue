<template>
  <el-dialog
    :visible.sync="showModal"
    append-to-body
    width="70%"
    @close="showModal = false"
    class="yep"
  >
    <h2 class="title">{{ isEdit ? "Modifier" : "Ajouter" }} un nouveau critère</h2>
    <el-form :model="formData">
      <el-row type="flex" class="row-bg" justify="center" :gutter="20">
        <el-col :span="8">
          <el-form-item class="text" label="Categorie">
            <el-select v-model="formData.type" placeholder="Selectionner une Catégorie">
              <el-option label="Food" value="Food"></el-option>
              <el-option label="Social" value="Social"></el-option>
              <el-option label="Materiel" value="Materiel"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="text" label="Nom du critère">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex" class="row-bg" justify="center">
        <el-col :span="8">
          <template>
            <p class="text">Note</p>
            <div class="content-note">
              <input type="number" />
              <div class="icon">
                <i class="el-icon-plus"></i>
                <i class="el-icon-minus"></i>
              </div>
            </div>
          </template>
        </el-col>
        <el-col :span="8">
          <template>
            <p class="text">Pondération</p>
            <div class="content-note">
              <input type="number" pattern="[0-9]*" />
              <div class="icon">
                <i class="el-icon-plus"></i>
                <i class="el-icon-minus"></i>
              </div>
            </div>
          </template>
        </el-col>
      </el-row>
      <el-form-item class="valid">
        <el-row type="flex" class="row-bg" justify="center">
          <el-button @click="showModal = false">Annuler</el-button>
          <el-button type="primary" @click="successCallback">Enregister</el-button>
        </el-row>
      </el-form-item>
    </el-form>
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
      num: 1,
      formData: {
        name: "",
        type: "",
        adress: "",
        zipcode: "",
        city: "",
        tags: ""
      },
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
    },
    edit() {
      this.$emit("edited");
    }
  }
};
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]:hover::-webkit-inner-spin-button,
input[type="number"]:hover::-webkit-outer-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
input {
  background: #ffffff;
  border: 1px solid #c0c5d2;
  border-radius: 4px;
  width: 58px;
  height: 40px;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.el-dialog__body {
  .title {
    font-style: normal;
    font-weight: bold !important;
    font-size: 30px !important;
    line-height: 36px !important;
    text-align: center;
    letter-spacing: 0.144375px;
    color: #14112d !important;
  }
  .content-note {
    width: 30%;
    display: flex;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 14.45px !important;
    line-height: 17px;
    letter-spacing: 1.49286px;
    text-transform: uppercase;
  }
  .icon {
    margin-left: 10px;
    margin-top: 10px;
  }
}
.valid {
  margin-top: 40px;
}
</style>
