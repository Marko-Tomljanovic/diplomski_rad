<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Prednosti ocijenimajstora</h4>
        </div>
      </nav>
 <h2>Vidjeti</h2>
      <p style="text-align: justify;" class="col-11">
        Najveća prednost apliacije je što korisnik ima mogućnost vidjeti
        sve profile te odabrati izvođača koji mu se sviđa. Uz ukupnu ocjenu izvođača može vidjeti
        i prosječnu cijenu koja uveliko pomaže pri odabiru budučeg izvođača radova. Tjekom 
        čitanja komentara moguće je i složiti se, tj. lajkati komentar te vidjeti
         koliko drugih korisnika se isto tako slažu.
      </p>
      <h2>Djelovati</h2>
      <p style="text-align: justify;" class="col-11">
     Ako je korisnik prijavljen, ima mogučnost komentirati izvođačev profil.
     Uz komentar može dodjeliti ocjenu i objaviti kakva je cijena uslue koju
     mu je izvođač obavio. Moguće je sudjelovati u lajkanju komentara,
     te djeliti profil izvođača preko društvenih mreža.  
      </p>
        <h2>Ocijeniti</h2>
      <p style="text-align: justify;" class="col-11">
   Isto tako je moguče ocijeniti stranicu ocijeni Mjatora na sljedećoj poveznici 
   <b-link to="/ocjenaStranice" style="color:#b96329">OVDJE</b-link> 
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
