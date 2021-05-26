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
  {
    src: "https://picsum.photos/150/150",
    text: "Zemljani radovi",
    adresa: "/podKategorije/zemljaniRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Betonski i A-B radovi",
    adresa: "/podKategorije/betonskiIliAbRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Zidarski radovi",
    adresa: "/podKategorije/zidarskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Tesarski radovi",
    adresa: "/podKategorije/tesarskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Izolacijski radovi",
    adresa: "/podKategorije/izolacijskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Krovopokrivački radovi",
    adresa: "/podKategorije/krovopokrivackiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Limarski radovi",
    adresa: "/podKategorije/limarskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Bravarski radovi",
    adresa: "/podKategorije/bravarskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Stolarski radovi",
    adresa: "/podKategorije/stolarskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Keramičarski radovi",
    adresa: "/podKategorije/keramicarskiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Soboslikarsko ličilački radovi",
    adresa: "/podKategorije/soboslikarskoLicilackiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Podopolagački radovi",
    adresa: "/podKategorije/podopolagackiRadovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Estrih ili plivajući podovi",
    adresa: "/podKategorije/estrihIliPlivajuciPodovi",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Hidroinstalacije",
    adresa: "/podKategorije/hidroinstalacije",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Elektroinstalacije",
    adresa: "/podKategorije/elektroinstalacije",
  },
  {
    src: "https://picsum.photos/150/150",
    text: "Strojarske instalacije",
    adresa: "/podKategorije/strojarskeInstalacije",
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
