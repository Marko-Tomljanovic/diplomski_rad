<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>

    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Prednosti ocjenimajstora</h4>
        </div>
      </nav>

 <h2>What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div class="line"></div>

      <h2>Lorem Ipsum Dolor</h2>
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
