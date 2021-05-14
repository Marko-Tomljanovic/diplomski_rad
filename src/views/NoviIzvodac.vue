<template>
  <b-container>
    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="imeFirme"
      placeholder="Upiši ime firme"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="svasta"
      placeholder="Upiši svašta"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="nesto"
      placeholder="Upiši nešto"
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
      svasta: "",
      nesto: "",
      profil: "",
    };
  },
  methods: {
    ucitaj() {
      db.collection("firme")
        .add({
          ime: this.imeFirme,
          svasta: this.svasta,
          nesto: this.nesto,
          email: store.trenutniKorisnik,
          profil: "Nista za sada",
          pic: "https://picsum.photos/150/150",
          vrijemeObjave: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.imeFirme = "";
          this.svasta = "";
          this.nesto = "";
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
