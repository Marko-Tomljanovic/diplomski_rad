<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Kako se registrirati</h4>
        </div>
      </nav>
   <h2>1. korak</h2>
      <p class="col-11">
        Da bi se registrirali potrebno je otići na slijedeću povezicu
         <b-link to="/Registracija" style="color:#b96329">OVDJE</b-link>
      </p>
         <h2>2. korak</h2>
      <p class="col-11">
       Na toj poveznici se upisju podaci za registraciju. Nakon registracije
       potrebno je verificirati emial adresu preko poruke koja će doći na Vašu 
       email adresu. Također postoji mogučnnost prijave preko Goolea i Facebook društvenih mreža.
      </p>
             <h2>3. korak</h2>
      <p class="col-11">
      Možete krenuti sa kometiranjem! <b-icon style="color:#ffbf00" icon="emoji-smile" font-scale="1.4"></b-icon>
      </p>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";

export default {
  name: "Kontakt",
  components: { sidebar },
};
</script>

<style src="../../assets/informacije.css" scoped>