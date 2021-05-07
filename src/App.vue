<template>
  <div id="app">
    <div>
  <b-navbar class="nesto" toggleable="lg" type="dark" style="height:95px;">
    <b-navbar-brand to="/">
    <img src="@/assets/logo.png" alt="logo" style="width:110px"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/Kategorije" style="color:black">Kategorije</b-nav-item>
        <b-nav-item to="/Rejting">Rejting</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right>
        <b-nav-item v-if="!store.trenutniKorisnik" to="/about">ENGikona</b-nav-item>

          <!-- Using 'button-content' slot -->
          <b-nav-item v-if="!store.trenutniKorisnik" to="/Prijava">Prijava</b-nav-item>
          <b-nav-item v-if="!store.trenutniKorisnik" to="/Registracija">Registracija</b-nav-item>
          <a v-if="store.trenutniKorisnik" href="#" @click.prevent="odjava" class="nav-link">Odjava</a>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<br>
    <router-view/>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from '@/components/Footer.vue'
import {firebase} from "@/firebase"
import store from "@/store"

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('**********', user.email);
    store.trenutniKorisnik = user.email;
  }else{
    console.log('No user');
    store.trenutniKorisnik = null;
  }
});

export default {
  name:'app',
  data(){
    return{
      store
    }
  },
  components:{
    Footer
  },
  methods:{
    odjava(){
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push({ name: 'Prijava' });
      });
    }
  }
}
</script>


<style>
.nesto{
background: linear-gradient(120deg,  white, 50%, #c5c5c5);
}
body{
  background-color: #ffffff;
}
.mojstil{
  color: #ffffff;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
}
.navbar-dark .navbar-nav .nav-link{
      color:rgb(0, 0, 0)!important;
      font-size: 21px;
      font-weight: 450;

    }
</style>