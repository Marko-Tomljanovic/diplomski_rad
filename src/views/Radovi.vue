<template>
  <div class="container">
    <div class="row">
      <RadoviKartica
        v-for="(card, idx) in cards"
        :key="idx"
        :src="card.src"
        :radovi="card.text"
        :adresa="card.adresa"
      ></RadoviKartica>
    </div>
  </div>
</template>

<script>
import RadoviKartica from "@/components/RadoviKartica.vue";
import store from "@/store";

let cards = [];
cards = [
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Nisu", adresa: "" },
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
  cards,
  name: "Radovi",
  components: {
    RadoviKartica,
  },
  data() {
    return {
      cards,
      store,
    };
  },
};
</script>
