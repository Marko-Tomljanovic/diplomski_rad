<template
  ><div>
    <img
      style="margin-top:-35px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); max-height: 200px;"
      class="card-img-top fluid"
      :src="require(`../assets/kategorije/${$route.params.id}.jpg`)"
      alt="Card image cap"
    />
    <div class="row justify-content-md-center">
      <div class="col-md-auto">
        <h4 class="mx-auto mt-4" style="color: #2677a7">{{ kategrijeF }}</h4>
      </div>
    </div>
    <div class="card mt-3 container">
      <b-spinner
        v-if="cards == 0"
        style="width: 5rem; height: 5rem; margin-left:45%"
        class="mt-5"
        variant="primary"
        label="Spinning"
      ></b-spinner>
      <div
        id="podKategorije"
        v-if="cards[0].stanje == false"
        class="container mt-3"
      >
        <p class="mt-4 text-muted">
          Trenutno ne postoji ni jedan izvođač u kategoriji
          <strong> {{ kategrijeF }}</strong
          >. Za pretragu ostalih kategorije odaberite sljedću poveznicu
          <b-link to="/Radovi" style="color:#b96329">OVDJE</b-link>
        </p>
      </div>
      <div
        id="podKategorije"
        v-if="cards[0].stanje == true"
        class="container mt-3"
      >
        <div v-if="cards" class="row">
          <IzvodaciKartica
            v-for="(card, idx) in cards"
            :key="idx"
            :src="card.pic"
            :radovi="card.ime"
            :adresa="card.profil"
          ></IzvodaciKartica>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import IzvodaciKartica from "@/components/IzvodaciKartica.vue";
import { db } from "@/firebase";
import podaci from "@/podaci";

export default {
  name: "podKategorije",
  components: {
    IzvodaciKartica,
  },
  data() {
    return {
      cards: [],
      podaci,
    };
  },
  methods: {
    dohvatiFirme() {
      console.log("dohvat iz firebasea..");

      db.collection("firme")
        .where("kategorije", "array-contains", this.$route.params.id)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

            this.cards.push({
              ime: data.ime,
              pic: data.pic,
              profil: data.profil,
              stanje: true,
            });
          });
          if (this.cards.length == 0) {
            this.cards.push({
              stanje: false,
            });
          }
        });
    },
    funk() {
      let pr = false;
      for (let i = 0; i < this.podaci.kategorija.length; i++) {
        pr = this.podaci.kategorija[i].value.includes(this.$route.params.id);
        if (pr == true) {
          return this.podaci.kategorija[i].text;
        }
      }
    },
  },
  computed: {
    kategrijeF() {
      return this.funk();
    },
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
  },
};
</script>
