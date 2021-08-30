<template>
  <div class="container">
    <img
      style="margin-top:-35px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); max-height: 250px;"
      class="card-img-top fluid"
      src="https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/kategorije%2Frad.jpg?alt=media&token=ce751401-23dd-4f9d-9b41-65121a403d3a"
      alt="Card image cap"
    />
    <div>
      <input
        class="col-7 mx-auto input-text js-input mt-5 mb-1"
        v-model="traziRadove"
        autocomplete="off"
        placeholder="Upiši kategoriju"
      />
      <br />
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
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fzem.jpg?alt=media&token=0ccc72b3-f7eb-4a93-aec0-983210a8efc2",
    text: "Zemljani radovi",
    adresa: "/podKategorije/zemljaniRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fcovijek.jpg?alt=media&token=6d300c8d-34a6-442e-a677-03cad7b79381",
    text: "Betonski i A-B radovi",
    adresa: "/podKategorije/betonskiIliAbRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fcigla.jpg?alt=media&token=c52a2416-846b-456a-b7e3-f275d2f3972a",
    text: "Zidarski radovi",
    adresa: "/podKategorije/zidarskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Ftesar.jpg?alt=media&token=1ef13c8d-813f-4ce7-9309-473343dd6b5b",
    text: "Tesarski radovi",
    adresa: "/podKategorije/tesarskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fnezz.jpg?alt=media&token=91b83f94-4a77-4bc3-8bc0-f01f1af4934c",
    text: "Izolacijski radovi",
    adresa: "/podKategorije/izolacijskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fkuca.jpg?alt=media&token=e473fe9c-72dd-4bf1-baab-9f048a9b6183",
    text: "Krovopokrivački radovi",
    adresa: "/podKategorije/krovopokrivackiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Flim.jpg?alt=media&token=6e5a0301-1bfe-4316-b0b8-76f939ec7ed5",
    text: "Limarski radovi",
    adresa: "/podKategorije/limarskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fbravar.jpg?alt=media&token=183bf3bb-ef6e-43cb-9300-22c7f53a3f59",
    text: "Bravarski radovi",
    adresa: "/podKategorije/bravarskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fstol.jpg?alt=media&token=c15ffdad-4f00-4763-8c17-6a623953a65d",
    text: "Stolarski radovi",
    adresa: "/podKategorije/stolarskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fplocice.jpg?alt=media&token=f9b1d8fc-2109-47ba-a480-bab59db516af",
    text: "Keramičarski radovi",
    adresa: "/podKategorije/keramicarskiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fbojanje.jpg?alt=media&token=fe2cd631-7b63-4f12-a7d9-12358fc65bf7",
    text: "Soboslikarsko ličilački radovi",
    adresa: "/podKategorije/soboslikarskoLicilackiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fparket.jpg?alt=media&token=695497a0-aa53-43b0-b6de-4f023b1b2218",
    text: "Podopolagački radovi",
    adresa: "/podKategorije/podopolagackiRadovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fnadbeton.jpg?alt=media&token=f89200b1-fabc-4119-a95b-3bc1f31983a3",
    text: "Estrih ili plivajući podovi",
    adresa: "/podKategorije/estrihIliPlivajuciPodovi",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fpipa.jpg?alt=media&token=f4bceee7-c8c5-46db-bcfe-30aa26b33cf9",
    text: "Hidroinstalacije",
    adresa: "/podKategorije/hidroinstalacije",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2F123456.jpg?alt=media&token=0e139dcb-605f-4b97-8595-8eed45cecbf4",
    text: "Elektroinstalacije",
    adresa: "/podKategorije/elektroinstalacije",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/radovi%2Fstrojarskirad.jpg?alt=media&token=064db5b7-d30b-497f-9a8c-dd83e71c3cec",
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

<style scoped>
.input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #2677a7;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.input-text:focus {
  outline: none;
}
@media only screen and (max-width: 650px) {
  .mar_gin {
    margin-right: 20px;
  }
}
</style>
