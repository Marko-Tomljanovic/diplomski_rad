<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Ocjene korisnika</h4>
        </div>
      </nav>
      <div v-if="zadovoljstvoPodaci == 0" class="col-2 mx-auto mt-5 mb-2">
            <b-spinner style="width: 5rem; height: 5rem;" 
            variant="primary" label="Spinning">
            </b-spinner>
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
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";
import { db } from "@/firebase";
import zadovoljstvoKorisnika from "@/components/zadovoljstvoKorisnika.vue";
import moment from "moment";

export default {
  name: "Kontakt",
  components: { sidebar, zadovoljstvoKorisnika },
  data(){
    return{
      show: true,
      zadovoljstvoPodaci: [],
    }
  },
  methods:{
     dohvatiZadovoljstvo() {
      console.log("dohvat iz firebasea..");
      db.collection("ocjeneStranice")
        .orderBy("vrijemeObjave", "desc")
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
  },
   mounted(){
    if (this.zadovoljstvoPodaci == 0) {
      this.dohvatiZadovoljstvo();
    } 
  },
};
</script>

<style src="../../assets/informacije.css" scoped>