<template>
  <div class="container">
    <div class="row">
      <RadoviKartica
        v-for="card in cards"
        :key="card"
        :src="card.src"
        :radovi="card.text"
        :adresa="card.adresa"
      ></RadoviKartica>
    </div>
  </div>
</template>

<script>
import RadoviKartica from "@/components/RadoviKartica.vue";

let cards = [];
cards = [
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
];

export default {
  name: "Radovi",
  components: {
    RadoviKartica,
  },
  data() {
    return {
      cards,
    };
  },
};
</script>
