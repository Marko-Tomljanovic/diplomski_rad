<template>
  <div class="container">
    <b-button to="/Izvodaci/">Natrag</b-button>
    <div v-if="stigli">
      <h1>{{ podaciProfila[0].ime }}</h1>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      id: this.$route.params.id,
      podaciProfila: [],
      stigli: false,
    };
  },
  methods: {
    dohvatiFirme() {
      console.log("dohvat iz firebasea..");

      db.collection("firme")
        .where("ime", "==", this.id)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

            this.podaciProfila.push({
              ime: data.ime,
              zupanija: data.zupanija,
              mjesto: data.mjesto,
              oib: data.oib,
              profil: data.profil,
            });
          });
          this.stigli = true;
          // this.podaciProfila.filter((x) => x.ime === this.$route.params.id);
        });
    },
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
  },
};
</script>
