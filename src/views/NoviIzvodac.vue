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
      v-model="vlasnikFirme"
      placeholder="Dodaj vlasnika firme"
    ></b-form-input>

    <b-form-select
      class="col-5 mb-3"
      style="margin-left: 29%"
      v-model="podaci.selected"
      :options="podaci.zupanija"
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
      v-model="adresa"
      placeholder="Upiši adresu"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="sluzbeniEmail"
      placeholder="Dodaj službeni e-mail firme"
    ></b-form-input>

    <b-form-input
      @input="razdvojiTelefon()"
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="telefon"
      placeholder="Dodaj kontakt telefon firme"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="oib"
      placeholder="Upiši OIB"
    ></b-form-input>
    <div style="margin-left:300px">
      Neobavezna polja: društvene mreže
    </div>
    <br />

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="facebook"
      placeholder="Dodaj URL facebook profil firme"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="instagram"
      placeholder="Dodaj URL instagram profil firme"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="webStranica"
      placeholder="Dodaj URL webStranice firme"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="youTube"
      placeholder="Dodaj URL youTube profil firme"
    ></b-form-input>

    <b-form-input
      class="col-5 mx-auto mb-3"
      type="text"
      v-model="twitter"
      placeholder="Dodaj URL twitter profila firme"
    ></b-form-input>

    <div>
      <div>
        <b-dropdown
          id="dropdown-form"
          text="Odabeite izvođačeve djelatnosti"
          ref="dropdown"
          class="mb-5"
          ><b-form-group v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              switches
              :options="podaci.kategorija"
              v-model="podaci.selectedKategorija"
              :aria-describedby="ariaDescribedby"
              class="mb-3"
            >
            </b-form-checkbox-group
          ></b-form-group>
        </b-dropdown>
      </div>
    </div>

    <b-button type="button" @click="ucitaj()" variant="primary"
      >Učitaj</b-button
    >
  </b-container>
</template>

<script>
import { db } from "@/firebase";
import store from "@/store";
import podaci from "@/podaci";

export default {
  data() {
    return {
      imeFirme: "",
      vlasnikFirme: "",
      mjesto: "",
      adresa: "",
      sluzbeniEmail: "",
      telefon: "",
      oib: "",
      profil: "",
      facebook: "",
      instagram: "",
      youTube: "",
      twitter: "",
      webStranica: "",
      podaci,
    };
  },
  methods: {
    ucitaj() {
      db.collection("firme")
        .doc(this.oib)
        .set({
          ime: this.imeFirme,
          vlasnikFirme: this.vlasnikFirme,
          zupanija: this.podaci.selected,
          mjesto: this.mjesto,
          adresa: this.adresa,
          sluzbeniEmail: this.sluzbeniEmail,
          telefon: this.telefon,
          kategorije: this.podaci.selectedKategorija,
          oib: this.oib,
          userEmail: store.trenutniKorisnik,
          profil: "/Profil/" + this.imeFirme, // .replace(" ", "", "g"),
          pic: "https://picsum.photos/150/150",
          facebook: this.facebook,
          instagram: this.instagram,
          youTube: this.youTube,
          twitter: this.twitter,
          webStranica: this.webStranica,
          count: 0,
          ukOcjena: 0,
          vrijemeObjave: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.imeFirme = "";
          this.vlasnikFirme = "";
          this.podaci.selected = null;
          this.podaci.selectedKategorija = null;
          this.mjesto = "";
          this.adresa = "";
          this.sluzbeniEmail = "";
          this.telefon = "";
          this.oib = "";
          this.facebook = "";
          this.instagram = "";
          this.youTube = "";
          this.twitter = "";
          this.webStranica = "";
          alert("Podaci firme su uspiješno uneseni!");
        })
        .catch((e) => {
          console.error(e);
        });

      console.log("Podaci firme su učitani");
    },
    razdvojiTelefon() {
      if (this.telefon.length == 3) {
        this.telefon += "/";
      }
    },
  },
};
</script>
