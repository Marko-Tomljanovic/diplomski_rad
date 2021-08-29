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
          <zadovoljstvoKorisnika id="itemList" 
            class="col-6"
            v-for="(izv, index) in itemsForList"
            :key="index.vrijemeObjave"
            :textZadovoljstvaKorisnika="izv.komentar"
            :vrijemeObjaveZadovoljstva="izv.vrijemeObjave"
            :ocjena="izv.ocjena"
          ></zadovoljstvoKorisnika>
        </div>
         <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      aria-controls="itemList"
      align="center"
      :per-page="perPage"
      prev-text="Prev"
      next-text="Next"
    ></b-pagination>
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
      rows: "",
      currentPage: 1,
      perPage: 4,
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
          this.rows = this.zadovoljstvoPodaci.length
        });
    },
  },
  computed:{
     itemsForList() {
    return this.zadovoljstvoPodaci.slice(
      (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage,
    );
  }
  },
   mounted(){
    if (this.zadovoljstvoPodaci == 0) {
      this.dohvatiZadovoljstvo();
    } 
  },
};
</script>

<style src="../../assets/informacije.css" scoped>