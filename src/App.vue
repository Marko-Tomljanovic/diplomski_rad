<template>
  <div id="app">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="secondary " style="height:90px">
    <b-navbar-brand to="/">
    <img src="@/assets/logo.png" alt="logo" style="width:100px"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/Kategorije">Kategorije</b-nav-item>
        <b-nav-item to="/Rejting">Rejting</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right>
        <b-nav-item to="/about">ENGikona</b-nav-item>

          <!-- Using 'button-content' slot -->
          <b-nav-item to="/Prijava">Prijava</b-nav-item>
          <b-nav-item to="/Registracija">Registracija</b-nav-item>
        
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
export default {
  components:{
    Footer
  }
}
</script>


<style>
body{
  background-color: #ffffff;
}
.mojstil{
  color: #ffffff;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
}
</style>