<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Tražiš izvođače ?</label
              >
              <input
                v-model="store.traziPocetna"
                type="search"
                placeholder="Stolarija..."
                class="form-control"
                id="search"
                aria-describedby="SearchCon"
              />
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container">
      <div class="col-11 card-deck mx-auto">
        <RadoviKartica
          v-for="(card, idx) in filterRadovi"
          :key="idx"
          :src="card.src"
          :radovi="card.text"
          :adresa="card.adresa"
        ></RadoviKartica>
        <IzvodaciKartica
          v-for="izv in filterIzvodaci"
          :key="izv.ime"
          :src="izv.pic"
          :radovi="izv.ime"
          :adresa="izv.profil"
        ></IzvodaciKartica>
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

let karticaI = [];

export default {
  name: "home",
  components: {
    RadoviKartica,
    IzvodaciKartica,
  },
  data() {
    return {
      store,
      Radovi,
      karticaI,
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
    this.dohvatiFirme();
  },
};
</script>
