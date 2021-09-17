<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Kontakt</h4>
        </div>
      </nav>
 <h2>Osobni podaci</h2>
      <p class="col-11">
       Marko Tomljanović bacc.ing.el <br>
       34000 Požega <br>
       Student na 5. godini Fakulteta informatike u Puli <br>
      </p>
       <h2>Društvene mreže</h2>
      <p class="col-11">
     <b-link href="https://www.facebook.com/cubus1/" target="_blank" style="color:#b96329">FACEBOOK</b-link> <br>
     <b-link href="https://www.instagram.com/tomljanovic.ma/" target="_blank" style="color:#b96329">INSTAGRAM</b-link> <br>
     <b-link href="https://www.linkedin.com/in/marko-tomljanovi%C4%87-bb48391ab/" target="_blank" style="color:#b96329">LINKED IN</b-link> <br>
     <b-link href="https://twitter.com/Markot4s" target="_blank" style="color:#b96329">TWITTER</b-link> <br>
     <b-link href="https://marko-tomljanovic.netlify.app/" target="_blank" style="color:#b96329">WEB STRANICA</b-link> <br>
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
