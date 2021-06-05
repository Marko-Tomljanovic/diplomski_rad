<template
  ><div>
    <b-spinner
      v-if="cards == 0"
      style="width: 5rem; height: 5rem; margin-left:45%"
      class="mt-3"
      variant="primary"
      label="Spinning"
    ></b-spinner>
    <div id="podKategorije" v-if="cards" class="container">
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
  </div>
</template>

<script>
import IzvodaciKartica from "@/components/IzvodaciKartica.vue";
import { db } from "@/firebase";

export default {
  name: "podKategorije",
  components: {
    IzvodaciKartica,
  },
  data() {
    return {
      cards: [],
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
            });
          });
        });
    },
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
  },
};
</script>
