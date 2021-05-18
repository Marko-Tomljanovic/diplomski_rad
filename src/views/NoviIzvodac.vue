<template>
  <b-container>
    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="imeFirme"
      placeholder="Upiši ime firme"
    ></b-form-input>

    <b-form-select
      class="col-5 mb-3"
      style="margin-left: 29%"
      v-model="selected"
      :options="zupanija"
    ></b-form-select>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="mjesto"
      placeholder="Upiši mjesto"
    ></b-form-input>
    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="oib"
      placeholder="Upiši OIB"
    ></b-form-input>
    <b-button type="button" @click="ucitaj()" variant="primary"
      >Učitaj</b-button
    >
  </b-container>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";

export default {
  data() {
    return {
      imeFirme: "",
      mjesto: "",
      oib: "",
      profil: "",
      selected: null,
      zupanija: [
        { text: "Odaberi županiju", disabled: true },
        {
          value: "Bjelovarsko-bilogorska županija",
          text: "Bjelovarsko-bilogorska županija",
        },
        {
          value: "Brodsko-posavska županija",
          text: "Brodsko-posavska županija",
        },
        {
          value: "Dubrovačko-neretvanska županija",
          text: "Dubrovačko-neretvanska županija",
        },
        {
          value: "Grad Zagreb",
          text: "Grad Zagreb",
        },
        { value: "Istarska županija", text: "Istarska županija" },
        {
          value: "Karlovačka županija",
          text: "Karlovačka županija",
        },
        {
          value: "Koprivničko-križevačka županija",
          text: "Koprivničko-križevačka županija",
        },
        {
          value: "Krapinsko-zagorska županija",
          text: "Krapinsko-zagorska županija",
        },
        {
          value: "Ličko-senjska županija",
          text: "Ličko-senjska županija",
        },
        {
          value: "Međimurska županija",
          text: "Međimurska županija",
        },
        {
          value: "Osječko-baranjska županija",
          text: "Osječko-baranjska županija",
        },
        {
          value: "Požeško-slavonska županija",
          text: "Požeško-slavonska županija",
        },
        {
          value: "Primorsko-goranska županija",
          text: "Primorsko-goranska županija",
        },
        {
          value: "Sisačko-moslavačka županija",
          text: "Sisačko-moslavačka županija",
        },
        {
          value: "Splitsko-dalmatinska županija",
          text: "Splitsko-dalmatinska županija",
        },
        {
          value: "Šibensko-kninska županija",
          text: "Šibensko-kninska županija",
        },
        {
          value: "Varaždinska županija",
          text: "Varaždinska županija",
        },
        {
          value: "Virovitičko-podravska županija",
          text: "Virovitičko-podravska županija",
        },
        {
          value: "Vukovarsko-srijemska županija",
          text: "Vukovarsko-srijemska županija",
        },
        { value: "Zadarska županija", text: "Zadarska županija" },
        {
          value: "Zagrebačka županija",
          text: "Zagrebačka županija",
        },
      ],
    };
  },
  methods: {
    ucitaj() {
      db.collection("firme")
        .add({
          ime: this.imeFirme,
          zupanija: this.selected,
          mjesto: this.mjesto,
          oib: this.oib,
          email: store.trenutniKorisnik,
          profil: "/Profil/" + this.imeFirme, // .replace(" ", "", "g"),
          pic: "https://picsum.photos/150/150",
          vrijemeObjave: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.imeFirme = "";
          this.selected = null;
          this.mjesto = "";
          this.oib = "";
          alert("Podaci firme su uspiješno uneseni!");
        })
        .catch((e) => {
          console.error(e);
        });

      console.log("Podaci firme su učitani");
    },
  },
};
</script>
