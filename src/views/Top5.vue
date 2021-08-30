<template>
  <div class="container  mx-auto row">
    <section class="card shadow border-0">
      <div class="card-body p-6">
        <h2 class="h4 mb-1">Odaberite županiju</h2>
        <p class="small text-muted font-italic mb-3">
          Možete odabrati samo jednu županiju. Rezultat su pet najboljih!
        </p>
        <b-input
          class="mb-1 form-control"
          type="search"
          autocomplete="off"
          placeholder="Traži županiju"
          v-model="store.traziZ"
        ></b-input>
        <div
          v-if="podaci.topZupanija"
          class="border-bottom overflow-auto  marko"
          style="height: 330px"
        >
          <b-form-radio-group
            style=" font-size: 17px;"
            v-model="selected"
            :options="filterZupanije"
            value-field="value"
            text-field="text"
            disabled-field="notEnabled"
            stacked
            @input="sortiraj()"
          ></b-form-radio-group>
        </div>
      </div>
    </section>
    <section
      class="card mx-auto shadow border-0 overflow-auto marko razmak"
      style="height: 500px"
    >
      <b-spinner
        v-if="karticaI == 0"
        variant="primary"
        label="Spinning"
        class="mx-auto"
        style="margin-top:190px; width: 5rem; height: 5rem;"
      ></b-spinner>
      <div class="mx-auto mt-5" v-else-if="filterZupanijeIzvodaci == 0">
        <h5>{{ selected }} još nema izvođača</h5>
        <br />
        <img style="margin-left:130px" src="@/assets/emoji.gif" />
      </div>
      <div v-if="filterZupanijeIzvodaci">
        <topKartica
          v-for="(izv, index) in filterZupanijeIzvodaci.slice(0, 5)"
          :key="index.ime"
          :src="izv.pic"
          :title="izv.ime"
          :profil="izv.profil"
          :rating="izv.avgOcjena"
        ></topKartica>
      </div>
    </section>
  </div>
</template>

<script>
import podaci from "@/podaci";
import store from "@/store";
import { db } from "@/firebase";
import topKartica from "@/components/topKartica.vue";

export default {
  components: { topKartica },
  data() {
    return {
      podaci,
      store,
      selected: "",
      karticaI: [],
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
              zupanija: data.zupanija,
              avgOcjena: (data.ukOcjena / data.count || 0).toFixed(1),
            });
          });
          this.sortiraj();
        });
    },
    sortiraj() {
      this.filterZupanijeIzvodaci.sort((a, b) => {
        return b.avgOcjena - a.avgOcjena;
      });
    },
    ocistiInput() {
      if (this.store.traziZ != null) {
        this.store.traziZ = "";
      }
    },
  },
  computed: {
    filterZupanije() {
      return this.podaci.topZupanija.filter((idx) =>
        idx.text.toLowerCase().includes(this.store.traziZ.toLowerCase())
      );
    },
    filterZupanijeIzvodaci() {
      return this.karticaI.filter((index) =>
        index.zupanija.includes(this.selected)
      );
    },
  },
  mounted() {
    this.dohvatiFirme();
    this.ocistiInput();
  },
};
</script>

<style>
.marko::-webkit-scrollbar {
  width: 11px;
}
.marko::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: inset 0 0 6px rgba(70, 70, 70, 0.7);
}
@media only screen and (max-width: 650px) {
  .razmak {
    margin-top: 25px;
  }
}
</style>
