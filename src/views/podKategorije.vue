<template
  ><div>
    <img
      style="margin-top:-35px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); max-height: 200px;"
      class="card-img-top fluid"
      :src="require(`../assets/kategorije/${$route.params.id}.jpg`)"
      alt="Card image cap"
    />
    <b-spinner
      v-if="cards == 0"
      style="width: 5rem; height: 5rem; margin-left:45%"
      class="mt-5"
      variant="primary"
      label="Spinning"
    ></b-spinner>
    <div id="podKategorije" v-if="cards" class="container mt-3">
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
