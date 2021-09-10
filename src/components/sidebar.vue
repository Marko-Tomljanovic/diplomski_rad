<template>
  <!-- Sidebar  -->
  <nav id="sidebar">
    <div class="sidebar-header">
      <h3>Naša stranica</h3>
    </div>

    <ul class="list-unstyled components">
      <p>Informacije ocijeniMastora</p>
      <li>
        <b-link to="onama">O nama</b-link>
      </li>
      <li>
        <b-link to="/kontakt">Kontakt</b-link>
      </li>
      <li>
        <b-link to="/cestapitanja">Česta pitanja</b-link>
      </li>

      <li>
        <b-link to="/kakoseregistrirati">Kako se registrirati</b-link>
      </li>
      <li>
        <b-link to="/prednostiocijenimajstora">Prednosti ocijeniMastora</b-link>
      </li>
      <li>
        <b-link to="/ocjeneKorisnika">Ocjene korisnika</b-link>
      </li>
      <li>
        <b-link to="/privatnostpodataka">Privatnost podataka</b-link>
      </li>
    </ul>

    <ul class="list-unstyled CTAs">
      <li>
        <b-button to="/ocjenaStranice" class="download">Ocjeni nas</b-button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:"sidebar",
}
</script>

<style src="../assets/informacije.css" scoped>
