<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div class="mb-3">
            <div class="form-field col-lg-8 mx-auto contact-form mt-1">
              <input
                id="mjesto"
                v-model="store.traziPocetna"
                placeholder="Pretraži majstore.."
                class="input-text js-input col-11"
                autocomplete="off"
                type="search"
              />
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container">
      <div class="col-11 mx-auto">
        <div class="header col-10">
          <h4>Građevinski radovi</h4>
        </div>

        <VueHorizontal scroll class="col-12 horizontal blue">
          <RadoviKartica
            v-for="(card, idx) in filterRadovi"
            :key="idx"
            :src="card.src"
            :radovi="card.text"
            :adresa="card.adresa"
          ></RadoviKartica>
          <div v-if="filterRadovi == 0" class="mx-auto mt-4 mb-2">
            <b-icon icon="x-circle" scale="4" variant="info"></b-icon>
          </div>
        </VueHorizontal>
      </div>

      <br />
      <div class="col-11 card-deck mx-auto">
        <div class="header col-10" style="margin-top:-7px">
          <h4>Izvođači građevinskih i obrtničkih radova</h4>
        </div>
        <VueHorizontal scroll class="col-12 horizontal orange">
          <IzvodaciKartica
            v-for="(izv, index) in filterIzvodaci"
            :key="index.ime"
            :src="izv.pic"
            :radovi="izv.ime"
            :adresa="izv.profil"
          ></IzvodaciKartica>
          <div v-if="show" class="mx-auto mt-5 mb-2">
            <b-spinner variant="primary" label="Spinning"></b-spinner>
          </div>
          <div v-else-if="filterIzvodaci == 0" class="mx-auto mt-4 mb-2">
            <b-icon icon="x-circle" scale="4" variant="info"></b-icon>
          </div>
        </VueHorizontal>
      </div>
      <br /><br />
      <div class="header col-7">
        <h4 class="mb-5">Zadovoljni korisnici ocjeniMjastora</h4>
      </div>
      <div class="container">
        <div class="row">
          <zadovoljstvoKorisnika
            class="col-6"
            v-for="(izv, index) in zadovoljstvoPodaci"
            :key="index.vrijemeObjave"
            :textZadovoljstvaKorisnika="izv.komentar"
            :vrijemeObjaveZadovoljstva="izv.vrijemeObjave"
            :ocjena="izv.ocjena"
          ></zadovoljstvoKorisnika>
        </div>
      </div>
      <div class="col-4 mx-auto">
        <b-button to="/ocjeneKorisnika" class="button2"
          >POGLEDAJ SVE OCJENE</b-button
        >
      </div>
    </div>
    <div class="mt-5"></div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import RadoviKartica from "@/components/RadoviKartica.vue";
import IzvodaciKartica from "@/components/IzvodaciKartica.vue";
import Radovi from "@/views/Radovi.vue";
import VueHorizontal from "vue-horizontal";
import moment from "moment";
import zadovoljstvoKorisnika from "@/components/zadovoljstvoKorisnika.vue";

let karticaI = [];
moment.locale("hr");

export default {
  name: "home",
  components: {
    RadoviKartica,
    IzvodaciKartica,
    VueHorizontal,
    zadovoljstvoKorisnika,
  },
  data() {
    return {
      store,
      Radovi,
      karticaI,
      show: true,
      zadovoljstvoPodaci: [],
    };
  },
  methods: {
    dohvatiFirme() {
      console.log("dohvat iz firebasea..");
      db.collection("firme")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            this.karticaI.push({
              ime: data.ime,
              pic: data.pic,
              profil: data.profil,
            });
          });
          this.show = false;
        });
    },
    dohvatiZadovoljstvo() {
      db.collection("ocjeneStranice")
        .where("ocjena", ">", 3)
        .orderBy("ocjena", "desc")
        .limit(4)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            this.zadovoljstvoPodaci.push({
              komentar: data.komentar,
              ocjena: data.ocjena,
              vrijemeObjave: moment(data.vrijemeObjave).format("LLL"),
            });
          });
        });
    },
    ocistiSearch() {
      if (this.store.traziPocetna != null) {
        this.store.traziPocetna = "";
      }
    },
  },
  computed: {
    filterRadovi() {
      let termin = this.store.traziPocetna;
      return this.Radovi.cards.filter((card) =>
        card.text.toLowerCase().includes(termin.toLowerCase())
      );
    },
    filterIzvodaci() {
      return this.karticaI.filter((izv) =>
        izv.ime.toLowerCase().includes(this.store.traziPocetna.toLowerCase())
      );
    },
  },
  mounted() {
    this.dohvatiZadovoljstvo();
    if (this.karticaI == 0) {
      this.dohvatiFirme();
    } else {
      this.show = false;
    }
    this.ocistiSearch();
  },
};
</script>

<style scoped>
.header {
  margin-bottom: -6px;
  /* margin-top: -6px; */
}
.horizontal >>> .v-hl-container {
  /* Space between content and scrollbar */
  padding-bottom: 16px;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 15px;
  width: 15px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 10px;
}

.blue >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 4px #ffffff solid;
  background: #2677a7;
}
.orange >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 4px #ffffff solid;
  background: #b96329;
}
.button2 {
  display: inline-block;
  background: #4fa2d3;
  color: #fff;
  border: none;
  text-transform: uppercase;
  padding: 15px 65px;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
}
.button2:hover {
  box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -8px) scale(1.1);
  transform: translate(0px, -8px) scale(1.1);
  background: #4fa2d3;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #2677a7;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
</style>
