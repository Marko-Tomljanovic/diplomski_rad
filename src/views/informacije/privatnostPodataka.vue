<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Privatnost podataka</h4>
        </div>
      </nav>
      <h2>ocjeni Mjastora poštuje Vašu privatnost</h2>
      <p class="col-11 mt-4" style="text-align: justify;">
       Vaše osobne podatke obrađujemo samo na temelju vaše privole - 
       slobodno danog i izričitog očitovanja da osobne podatke koje 
       ste nam učinili dostupnima registracijom i korištenjem web 
       stranice obrađujemo u svrhu određenu ovim Pravilima zaštite 
       privatnosti. Vašu privolu zatražit ćemo prilikom popunjavanja 
       odgovarajućeg obrasca.
      </p>
      <p class="col-11 mt-4" style="text-align: justify;">
      Prikupljene osobne podatke spremamo u elektroničkom obliku te u 
      svrhu zaštite primjenjujemo odgovarajuće tehničke. Vaše osobne 
      podatke koje ste nam učinili dostupnima prilikom registracije 
      spremat ćemo za vrijeme postojanja apliacije, odnosno za vrijeme 
      trajanja Vaše registracije. Nakon toga vaše osobne podatke ćemo brisati
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
