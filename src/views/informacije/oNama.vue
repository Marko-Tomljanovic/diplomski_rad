<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <h4>O nama</h4>
        </div>
      </nav>
  <h2>Kako je sve počelo?</h2>
      <p class="col-11 mt-4" style="text-align: justify;">
        Web aplikacija za ocjenjivanje izvođača građevinskih radova
        je potekla od ideje prilikom renovranja jednog stana :) Na interentu ne postoji puno sličnih rješsnja,
        stoga se krenilo u realizaciju ideje. Stranica bi privukla veliki broj ljudi koji imaju u 
        planu graditi, popravljati ili adaptirati postojeći objekt i slično.
        Isto tako one koji se prvi puta susreću sa građevinskim radovima, kao sto 
        su mlade obitelji koje pokušavaju stvoriti svoju prvu nekretninu. Vrlo je
        bitno znati koje izvođače odabiremo jer samim time štedimo novac i eliminiramo stres koji
        ćemo doživljavati ako nešto krene naopako. 
              </p>
                <p class="col-11 mt-4">
       Sve o aplikaciji možete pronaći na GitHub profilu <b-link href="https://github.com/Marko-Tomljanovic/diplomski_rad" target="_blank" style="color:#b96329">OVDJE</b-link>
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