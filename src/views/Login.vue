<template>
  <div class="view-container">
    <div class="login">
      <form class="form">
        <h1>Connectez-vous</h1>
        <div class="email">
          <p class="label">Identifiant</p>
          <input
            type="email"
            name="username"
            id="username"
            placeholder="Identifiant"
            v-model="mail_pro"
          />
        </div>
        <div class="password">
          <p class="label">Mot de passe</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn-submit" @click="login()">Se connecter</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",

  components: {},

  props: {},

  data: function() {
    return {
      mail_pro: "",
      password: ""
    };
  },

  computed: {},

  mounted: function() {},

  methods: {
    login() {
      console.debug('la');// eslint-disable-line
      const { mail_pro, password } = this;
      this.$store
        .dispatch("login", { mail_pro, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err)); // eslint-disable-line
    }
  }
};
</script>

<style lang="scss">
.view-container {
  height: 100vh;
  width: 100vw;
  background-color: #FAFBFC;
  display: flex;
  align-items: center;
  justify-content: center;
  .login {
    margin: auto;
    padding: 80px 0;
    width: 680px;
    text-align: center;
    .form {
      position: relative;
      z-index: 1;
      background: #ffffff;
      margin: 0 auto 100px;
      padding: 45px;
      text-align: center;
      // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      .email,.password {
        width: 305px;
        margin: 0 auto;
        text-align: left;
        .label {
          text-transform: uppercase;
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
      h1 {
        text-transform: uppercase;
        font-family: "Lato Bold";
        color: #000D33;
      }
      input {
        background: transparent;
        width: 100%;
        border: 1px solid #C0C5D2;
        padding: 13px 15px;
        font-size: 17px;
      }
      button {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: #4caf50;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #ffffff;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
      }
      button:hover,
      button:focus {
        background: #43a047;
      }
      p {
        margin: 15px 0 0;
        color: #b3b3b3;
        font-size: 12px;
        a {
          color: #4caf50;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
