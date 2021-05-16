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
  { src: "https://picsum.photos/150/150", text: "Zemljani radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Betonski radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Zidarski radovi", adresa: "" },
  { src: "https://picsum.photos/150/150", text: "Tesarski radovi", adresa: "" },
  {
    src: "https://picsum.photos/150/150",
    text: "Izolacijski radovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Krovopokrivački radovi",
    adresa: "",
  },
  { src: "https://picsum.photos/150/150", text: "Limarski radovi", adresa: "" },
  {
    src: "https://picsum.photos/150/150",
    text: "Bravarski radovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Stolarski radovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Keramičarski radovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Soboslikarsko ličilački radovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Podopolagački radovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Estrih ili plivajući podovi",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Hidroinstalacije",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Elektroinstalacije",
    adresa: "",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Strojarke izolacije",
    adresa: "",
  },
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
