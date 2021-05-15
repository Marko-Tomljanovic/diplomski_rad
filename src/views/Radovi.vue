<template>
  <div class="container">
    <div>
      <b-form-input
        class="col-4 mx-auto"
        v-model="traziRadove"
        placeholder="Upiši kategoriju"
      ></b-form-input>
    </div>
    <div class="row">
      <RadoviKartica
        v-for="(card, idx) in filterRadovi"
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
  { src: "https://picsum.photos/150/150", text: "Krovopokrivač", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Keramika", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Stolar", adresa: "" },
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
      traziRadove: "",
    };
  },
  computed: {
    filterRadovi() {
      return this.cards.filter((card) =>
        card.text.toLowerCase().includes(this.traziRadove.toLowerCase())
      );
    },
  },
};
</script>
