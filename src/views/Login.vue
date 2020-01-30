<template>
  <div class="login">
    <form class="form">
      <h1>Login</h1>
      <input type="email" name="username"  id = "username" placeholder ="email" v-model="email"/>
      <input type="password" name="password" id= "password" placeholder="password" v-model="password"/>
      <button type="submit" class ="btn-submit">Connexion</button>
      <p class="message">Not registered?
        <a href="#">Create an account</a>
      </p> 
    </form>
  </div>
</template>
<script>
export default {

  name:"login",

  components: {},

  props: {},

  data: function() {
    return {
      email:"",
      password:""
    };
  },

  computed: {},

  mounted: function() {},

  methods: {
    login: function () {
       const {email, password}= this
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
  }
};
</script>

<style lang="scss">
.login {
    margin: 0 auto;
    padding: 80px 0;
    height: 400px;
    text-align: center;
    .form{
     position: relative;
     z-index: 1;
     background: #FFFFFF;
     max-width: 360px;
     margin: 0 auto 100px;
     padding: 45px;
     text-align: center;
     box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    input {
      font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
    }
    button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
    button:hover, button:focus {
    background: #43A047;
  }
  p {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
  a {
  color: #4CAF50;
  text-decoration: none;
}
}
  }
} 
</style>
