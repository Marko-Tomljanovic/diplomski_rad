<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div class="mb-3">
            <b-input
              v-model="store.traziPocetna"
              type="search"
              placeholder="Upiši majstora..."
              class="form-control"
              id="search"
            >
            </b-input>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container">
      <div class="col-11 mx-auto">
        <div class="header col-10">
          <h3>Građevinski radovi</h3>
        </div>

        <VueHorizontal scroll class="col-12 horizontal">
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
        <div class="header col-10" style="margin-top:-8px">
          <h3>Izvođači građevinskih radova</h3>
        </div>
        <VueHorizontal scroll class="col-12 horizontal">
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
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import RadoviKartica from "@/components/RadoviKartica.vue";
import IzvodaciKartica from "@/components/IzvodaciKartica.vue";
import Radovi from "@/views/Radovi.vue";
import VueHorizontal from "vue-horizontal";

let karticaI = [];

export default {
  name: "home",
  components: {
    RadoviKartica,
    IzvodaciKartica,
    VueHorizontal,
  },
  data() {
    return {
      store,
      Radovi,
      karticaI,
      show: true,
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
    if (this.karticaI == 0) {
      this.dohvatiFirme();
    } else {
      this.show = false;
    }
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
  border-radius: 5px;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: 4px #ffffff solid;
  background: #2677a7;
}
</style>
