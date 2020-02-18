<template>
  <el-dialog
    :visible.sync="showModal"
    append-to-body
    width="70%"
    @close="showModal = false"
  class="yep" >
    <h2 class="title">{{ isEdit ? "Modifier" : "Ajouter" }} Un nomveau critère </h2>
    <el-form   :model="formData">
      <el-row 
        type="flex" 
        class="row-bg" 
        justify="center" 
        :gutter="20">
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
      <el-row 
        :gutter="20"
        type="flex" 
        class="row-bg" 
        justify="center"
     >
          
          <el-col :span="8">
            <template>
                <p class="text">Note</p>
                <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </template>
          </el-col>
          <el-col :span="8">
              <template>
                  <p class="text">Pondération</p>
                <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </template>
          </el-col>
      </el-row>
      <el-form-item class ="valid">
          <el-row
            type="flex" 
            class="row-bg" 
            justify="center"
          >
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
      num:1,  
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
      this.formData.tags = this.formData.tags.split(", ");
      this.$emit("edited");
    }
  }
};
</script>

<style lang="scss" scoped>
    .el-dialog__body .title {
    font-style: normal;
    font-weight: bold !important;
    font-size: 30px  !important;
    line-height: 36px  !important;
    text-align: center;
    letter-spacing: 0.144375px;
    color: #14112D  !important;
}
   .el-dialog__body .text{
        font-style: normal;
        font-weight: normal;
        font-size: 14.45px !important;
        line-height: 17px;
        letter-spacing: 1.49286px;
        text-transform: uppercase;
    }
    .valid{
        margin-top:40px;
    }
</style>
