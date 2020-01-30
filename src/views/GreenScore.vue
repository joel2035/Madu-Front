<template>
    <div class="container">
        <div class="button-container">
            <el-row>
                <el-button class="btn" type="success">Ajouter</el-button>
            </el-row>
        </div>
        <template>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    fixed
                    label="Categorie"
                    width="100">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>Nom: {{scope.row.categorie}}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.categorie }}</el-tag>
                    </div>
                    </el-popover>
                </template>
                
                </el-table-column>
                <el-table-column
                    label="Nom"
                    width="220">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                    <p>Nom:{{scope.row.name}}</p>
                    <div slot="reference" class="name-wrapper">
                        <span>{{ scope.row.name }}</span>
                    </div>
                    </el-popover>
                </template>
                
                </el-table-column>
                 <el-table-column
                    label="Niveau 1"
                    width="180">
                   <el-progress type="circle" :percentage="25"></el-progress>
                    <template slot-scope="scope">
                        <span style="margin-right: 10px">{{ scope.row.etat_1 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Niveau 2"
                    width="230">
                    <template slot-scope="scope">
                        <span style="margin-right: 10px">{{ scope.row.etat_2 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Niveau 3"
                    width="200">
                    <template slot-scope="scope">
                        <span style="margin-right: 10px">{{ scope.row.etat_3 }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="Opérations">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
                </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
export default {
  components: {},

  props: {},

  data: function() {
    return {
        tableData: [
            {
                categorie:'food',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'food',
                name: 'agriculture concernée',
                etat_1:"bio ou raisonnée",
                etat_2:"",
                etat_3:"classique",

            },
             {
                categorie:'food',
                name: 'transport matières premieres',
                etat_1:"mutualisation des livraisons",
                etat_2:"mutualisation des livraisons",
                etat_3:"mutualisation des livraisons",

            },
             {
                categorie:'food',
                name: 'composition carte',
                etat_1:"vegetale",
                etat_2:"label rouge, MSC/ASC, œufs de poules éleves en plein air",
                etat_3:"classique",

            },
             {
                categorie:'food',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'food',
                name: 'carte',
                etat_1:"de saison",
                etat_2:"faiblement hors saison",
                etat_3:"pas du tout de saison",

            },
             {
                categorie:'food',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'food',
                name: 'cuisine',
                etat_1:"sur place produits frais",
                etat_2:"",
                etat_3:"plats préparés",

            },
             {
                categorie:'food',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'food',
                name: 'tri des déchets',
                etat_1:"don invendus (tgtg, phenix, asso)",
                etat_2:"compostage / doggybag",
                etat_3:"poubelle",

            },
             {
                categorie:'food',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'matériel',
                name: 'mobilier',
                etat_1:"2nd main",
                etat_2:"made in France / matériaux durables",
                etat_3:"classique",

            },
             {
                categorie:'materiel',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'matériel',
                name: 'à emporter',
                etat_1:"consigne / contenant du client",
                etat_2:"contenant biodégradable",
                etat_3:"plastique",

            },
             {
                categorie:'matériel',
                name: 'locale et circuit court',
                etat_1:"locale et circuit court",
                etat_2:"nationale et limitrophes",
                etat_3:"internationale",

            },
             {
                categorie:'matériel',
                name: 'energie',
                etat_1:"fournisseur green",
                etat_2:"",
                etat_3:"classique",

            },
            {
                categorie:'matériel',
                name: 'energiconsommation energetique',
                etat_1:"lampe/arrivée d'eau/ electroménager faible consommation",
                etat_2:"lampe/arrivée d'eau/ electroménager faible consommation",
                etat_3:"classique",

            },
            {
                categorie:'matériel',
                name: 'papier (toilette et serviettes)',
                etat_1:"recyclés ou réutilisable",
                etat_2:"recyclables",
                etat_3:"usage unique",

            },
            {
                categorie:'matériel',
                name: 'produits entretien ',
                etat_1:"naturels et zéro déchet",
                etat_2:"",
                etat_3:"classique",

            },
             {
                categorie:'matériel',
                name: 'dématérialisation',
                etat_1:"tickets de caisse et administratif dématérialisés",
                etat_2:"",
                etat_3:"classique",

            },
             {
                categorie:'social',
                name: 'trajet travail',
                etat_1:"transports communs, covoiturage",
                etat_2:"mobilité douce",
                etat_3:"voiture, moto personnelle",

            },
            {
                categorie:'social',
                name: 'produits',
                etat_1:"ethiques",
                etat_2:"",
                etat_3:"non éthique ou non transparents",

            }
        ]
    };
  },

  computed: {},

  mounted: function() {},

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

<style lang="scss">
.container{
    .btn{
        margin-left:950px;
        margin-top: 20px !important;     
    }
}

</style>
