<template>
  <!-- GREENSCORE MODAL -->
  <el-dialog
    width="50%"
    title="Modification du GREENSCORE"
    :visible.sync="showModal"
    append-to-body
  >
    <h2>Catégories et sous-critères</h2>

    <el-form v-model="greenscoreData">
      <h3>FOOD</h3>
      <el-form-item
        :label="item.label"
        v-for="(item, index) in greenscoreData.food"
        :key="index * 10"
      >
        <el-input-number v-model="item.value" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <h3>MATERIEL</h3>
      <el-form-item
        :label="item.label"
        v-for="(item, index) in greenscoreData.resources"
        :key="index"
      >
        <el-input-number v-model="item.value" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <h3>SOCIAL</h3>
      <el-form-item :label="item.label" v-for="(item, index) in greenscoreData.social" :key="index">
        <el-input-number v-model="item.value" :min="0" :max="100"></el-input-number>
      </el-form-item>
      <el-button @click="innerVisible = false">Annuler</el-button>
      <el-button type="primary" @click="submitGreenscore">Enregistrer</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
import axios from "axios";
export default {
  components: {},

  props: {
    shop: {
      type: Object
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean
    }
  },

  data: function() {
    return {
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

      showModal: this.visible
    };
  },

  computed: {},

  mounted: function() {
    // eslint-disable-next-line no-console

    axios.get("http://35.180.73.134/:3000/greenscore").then(response =>
      // eslint-disable-next-line no-console
      console.log(response.data)((this.greenscoreData = response.data))
    );
  },

  updated: function() {
    this.isEdit ? (this.formData = this.shop) : this.formData;
  },

  methods: {
    open() {
      // eslint-disable-next-line no-console
      this.showModal = true;
    },

    submitGreenscore() {
      // eslint-disable-next-line no-console
      console.log("submit");
    },

    closeModal() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.label-style {
  font-weight: bold;
  label {
    text-transform: uppercase;
  }
}

.greenscore-icon {
  width: 100%;
  display: flex;
}
.greenscore-picto {
  width: 2rem;

  i {
    font-size: 2rem;
  }
}

.greenscore-icon-label {
  margin-left: 0.5rem;
  margin-bottom: 0;
}

.greenscore-value {
  display: flex;
  flex-direction: column;
}
.activePrice {
  color: rgba(192, 197, 210, 1);
}

.inactivePrice {
  color: rgba(192, 197, 210, 0.3);
}
</style>
