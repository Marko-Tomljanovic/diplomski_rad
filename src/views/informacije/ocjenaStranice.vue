<template>
  <div class="wrapper">
    <div class="inline">
      <sidebar></sidebar>
    </div>
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h4>Ocjeni nas</h4>
        </div>
      </nav>
 <h2 style="margin-top:-10px">Ocjena</h2>
      <b-form-rating
                  icon-empty="heart"
                  icon-full="heart-fill"
                  class="w-50 mt-3"
                  id="rating-5"
                  v-model="ocjenaStranice"
                  stars="5"
                  variant="danger"
                  no-border
                   show-value
                  size="lg"
                ></b-form-rating>
      <div class="line"></div>
      <h2 style="margin-top:-16px">Što misliš o nama :)</h2>
        <b-form-textarea
        class="mt-4"
      id="textarea"
      v-model="text"
      placeholder="Reci nam svoje mišljenje..."
      rows="4"
      max-rows="6"
    ></b-form-textarea>
    <b-button variant="success" class="mt-4" @click="spremiOcjenu">Pohrani ocjenu!</b-button>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";
import { db, firebase } from "@/firebase";
import store from "@/store";

export default {
  name: "Kontakt",
  components: { sidebar },
  data(){
      return{
        store,
ocjenaStranice: '',
text:'',
      }
  },
  methods:{
      spremiOcjenu(){
        if(!store.trenutniKorisnik){
 this.$swal.fire({
          icon: "info",
          title: "Prijavi se kako bi komentirao stranicu",
        });
      }else{
  const zbrojii = firebase.firestore.FieldValue;
        db.collection("podaci")
          .doc("ukupno")
          .update({
            brojZadovoljnihKomentara: zbrojii.increment(1),
          })
          .catch(function(error) {
            console.error(error);
          });

           db.collection("ocjeneStranice")
                    .add({
                      ocjena: this.ocjenaStranice,
                      komentar: this.text,
                      vrijemeObjave: Date.now(),
                    })
                    .then((doc) => {
                      console.log("Spremljeno", doc);
                         this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Hvala Vam što ste izdvojili vremena!",
              showConfirmButton: false,
              timer: 1850,
            });
            this.$router.replace("/");
            this.ocjenaStranice = '';
            this.text = ''
                    })
                    .catch((e) => {
                      console.error(e);
                    }); }
  }, 
  } 
};
</script>

<style src="../../assets/informacije.css" scoped>
