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

      <el-row :gutter="20" style="margin: 2rem 0">
        <el-col :span="6">
          <div class="greenscore-icon">
            <div class="greenscore-picto">
              <i class="el-icon-fork-spoon" style="font-size: 2rem"></i>
            </div>
            <div class="greenscore-value">
              <div class="greenscore-icon-label">FOOD</div>
              <div class="greenscore-icon-label">0%</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="greenscore-icon">
            <div class="greenscore-picto">
              <i class="el-icon-user" style="font-size: 2rem"></i>
            </div>
            <div class="greenscore-value">
              <div class="greenscore-icon-label">MATERIEL</div>
              <div class="greenscore-icon-label">0%</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="greenscore-icon">
            <div class="greenscore-picto">
              <i class="el-icon-box" style="font-size: 2rem"></i>
            </div>
            <div class="greenscore-value">
              <div class="greenscore-icon-label">SOCIAL</div>
              <div class="greenscore-icon-label">0%</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="innerVisible = true">Modifier</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Prix" class="label-style">
            <i
              class="el-icon-coin"
              v-for="(_, index) in 3"
              :key="index"
              style="font-size: 1.5rem"
              @click="onClickIcon"
              :class="index <= formData.price ? 'activePrice' : 'inactivePrice'"
            ></i>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="Description" class="label-style">
            <el-input
              type="textarea"
              v-model="formData.description"
              maxlength="100"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary" @click="successCallback">Enregistrer</el-button>
        <el-button @click="showModal = false">Annuler</el-button>
      </el-row>
    </el-form>

    <!-- GREENSCORE MODAL -->
    <el-dialog
      width="50%"
      title="Modification du GREENSCORE"
      :visible.sync="innerVisible"
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
        <el-form-item
          :label="item.label"
          v-for="(item, index) in greenscoreData.social"
          :key="index"
        >
          <el-input-number v-model="item.value" :min="0" :max="100"></el-input-number>
        </el-form-item>
        <el-button @click="innerVisible = false">Annuler</el-button>
        <el-button type="primary" @click="submitGreenscore">Enregistrer</el-button>
      </el-form>
    </el-dialog>
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
        accessibility: "",
        price: "",
        description: ""
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

  mounted: function() {
    axios.get("http://35.180.73.134/:3000/greenscore").then(response =>
      // eslint-disable-next-line no-console
      console.log(response.data)((this.greenscoreData = response.data))
    );
  },

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
    },

    onClickIcon() {
      // eslint-disable-next-line no-console
      console.log(this.formData.price);
      this.formData.price += 1;
    },

    submitGreenscore() {
      // eslint-disable-next-line no-console
      console.log("submit");
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
