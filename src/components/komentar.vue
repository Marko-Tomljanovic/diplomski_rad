<template
  ><div>
    <p v-if="ime" style="font-size: 20px; color: #2677a7" class="ml-2">
      Firma -
      <b-link :href="this.adresa" style="color: #2677a7">{{ ime }}</b-link>
    </p>
    <div class="card mt-3">
      <h6 style="margin-left:27px; margin-top: 18px" class="mb-0 sakrij">
        {{ naslov }}
        <b-form-rating
          style="margin-top:-8px;"
          class="w-25 h-25 mr-5 float-right"
          id="rating-5"
          show-value
          v-model="ocjena"
          stars="5"
          readonly
          color="#e2b900"
          no-border
          size="lg"
        ></b-form-rating>
        <b-form-rating
          icon-empty="cash"
          icon-full="capslock-fill"
          style="margin-top:-4px;margin-right:10px"
          class="w-25 h-25 mr-4 float-right"
          id="rating-5"
          readonly
          v-model="ocjenaCijene"
          stars="3"
          variant="success"
          no-border
          size="lg"
        ></b-form-rating>
      </h6>
      <h6
        style="margin-left:27px; margin-top: 18px"
        class="mb-0 mx-auto pokazi"
      >
        {{ naslov }}
      </h6>
      <br />
      <div class="pokazi">
        <b-form-rating
          style="margin-top:-8px;"
          class="w-25 h-25 pokazi"
          id="rating-5"
          show-value
          v-model="ocjena"
          stars="5"
          readonly
          color="#e2b900"
          no-border
          size="lg"
        ></b-form-rating>
      </div>
      <div class="pokazi">
        <b-form-rating
          icon-empty="cash"
          icon-full="capslock-fill"
          style="margin-top:-4px;margin-right:10px"
          class="w-25 h-25"
          id="rating-5"
          show-value
          readonly
          v-model="ocjenaCijene"
          stars="3"
          variant="success"
          no-border
          size="lg"
        ></b-form-rating>
      </div>

      <div
        style="margin-left:10px; text-align: justify;"
        class="mb-0 col-11 text-secondary"
      >
        {{ komentar }}
      </div>
      <p class="text-right text-muted mr-3 mb-1">
        <b-link
          v-if="slazemSe >= 0"
          @click="like(oib, idd)"
          style="text-decoration: none; color:#2677a7"
        >
          {{ likeSlazemSe }}
          <strong> ({{ slazemSe }})</strong>
          <b-icon :style="boja" class="ml-1 mr-5" :icon="ikona"></b-icon>
        </b-link>
        <small>{{ vrijeme }}</small>
      </p>
      <b-button
        v-if="store.trenutniKorisnik == userEmail && this.idd"
        @click="obrisiKomentar(oib, idd, ocjena, ocjenaCijene)"
        variant="outline-danger"
        class="float-right border-0 mb-1"
        style="margin-top:-7px; border-top-left-radius: 50px; border-top-right-radius: 50px;"
      >
        <b-icon icon="trash" aria-hidden="true"></b-icon
      ></b-button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import profil from "@/views/Profil.vue";
import { db, firebase } from "@/firebase";

export default {
  props: [
    "naslov",
    "komentar",
    "ocjena",
    "ocjenaCijene",
    "vrijeme",
    "userEmail",
    "oib",
    "idd",
    "ime",
    "slazemSe",
    "lajkKorisnik",
  ],
  data() {
    return {
      store,
      profil,
      marko: true,
    };
  },
  methods: {
    obrisiKomentar(oib, idd) {
      this.$swal
        .fire({
          title: "Da li stvarno želite obrisati komentar?",
          icon: "info",
          showDenyButton: true,
          confirmButtonText: "Povratak",
          denyButtonText: `Obriši`,
        })
        .then((result) => {
          if (result.isDenied) {
            db.collection("firme")
              .doc(oib)
              .collection("komentari")
              .doc(idd)
              .delete()
              .then(() => {
                const zbrojii = firebase.firestore.FieldValue;
                db.collection("firme")
                  .doc(oib)
                  .update({
                    ukOcjenaCijene: zbrojii.increment(-this.ocjenaCijene),
                    count: zbrojii.increment(-1),
                    ukOcjena: zbrojii.increment(-this.ocjena),
                  });
                this.$router.go();
                console.log("Document successfully deleted!");
              })
              .catch(function(error) {
                console.error("Error removing document: ", error);
              });
          }
        });
    },

    like(oib, idd) {
      const zbrojii = firebase.firestore.FieldValue;
      if (!this.store.trenutniKorisnik) {
        this.$swal.fire({
          icon: "info",
          title: "Prijavi se za opciju ´Slažem se´",
        });
      } else if (!this.lajkKorisnik.includes(this.store.trenutniKorisnik)) {
        db.collection("firme")
          .doc(oib)
          .collection("komentari")
          .doc(idd)
          .update({
            slazemSe: zbrojii.increment(1),
            lajkKorisnik: zbrojii.arrayUnion(this.store.trenutniKorisnik),
          })
          .then(() => {
            console.log("Lajkano!");
            this.$router.go();
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        db.collection("firme")
          .doc(oib)
          .collection("komentari")
          .doc(idd)
          .update({
            slazemSe: zbrojii.increment(-1),
            lajkKorisnik: zbrojii.arrayRemove(this.store.trenutniKorisnik),
          })
          .then(() => {
            console.log("Lajkano!");
            this.$router.go();
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    },
    ikonaFunk() {
      if (this.lajkKorisnik.includes(this.store.trenutniKorisnik)) {
        return "check2-circle";
      } else {
        return "hand-thumbs-up";
      }
    },
    bojaFunk() {
      if (this.lajkKorisnik.includes(this.store.trenutniKorisnik)) {
        return "color:#058a00";
      } else {
        return "color:#2677a7";
      }
    },
    funkSlazemSe() {
      if (this.lajkKorisnik.includes(this.store.trenutniKorisnik)) {
        return "Ne slažem se";
      } else {
        return "Slažem se";
      }
    },
  },
  computed: {
    adresa() {
      return "/Profil/" + this.ime.replace(/\s+/g, "");
    },
    ikona() {
      return this.ikonaFunk();
    },
    boja() {
      return this.bojaFunk();
    },
    likeSlazemSe() {
      return this.funkSlazemSe();
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 650px) {
  .pokazi {
    display: none;
  }
}
@media only screen and (max-width: 650px) {
  .sakrij {
    display: none;
  }
}
</style>
