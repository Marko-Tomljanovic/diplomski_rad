<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <div class="mb-4">
            <div class="form-field  mx-auto contact-form mt-1 crta">
              <input
                id="mjesto"
                v-model="store.traziPocetna"
                placeholder="Pretraži majstore.."
                class="input-text js-input col-11"
                autocomplete="off"
                type="search"
              />
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container">
      <div class="col-11 mx-auto">
        <div class="header col-10">
          <h4 class="fo_nt">Građevinski radovi</h4>
        </div>

        <VueHorizontal scroll class="col-12 horizontal blue">
          <RadoviKartica
            v-for="(card, idx) in filterRadovi"
            :key="idx"
            :src="card.src"
            :radovi="card.text"
            :adresa="card.adresa"
          ></RadoviKartica>
          <div v-if="filterRadovi == 0" class="mx-auto mt-4 mb-2">
            <b-icon
              icon="x-circle"
              class="mb-5 mt-5"
              scale="5"
              variant="info"
            ></b-icon>
          </div>
        </VueHorizontal>
      </div>

      <br />
      <div class="col-11 card-deck mx-auto">
        <div class="header col-10" style="margin-top:-7px">
          <h4 class="fo_nt">Izvođači građevinskih i obrtničkih radova</h4>
        </div>
        <VueHorizontal scroll class="col-12 horizontal orange">
          <IzvodaciKartica
            v-for="(izv, index) in filterIzvodaci"
            :key="index.ime"
            :src="izv.pic"
            :radovi="izv.ime"
            :adresa="izv.profil"
          ></IzvodaciKartica>
          <div v-if="show" class="mx-auto mt-5 mb-2">
            <b-spinner variant="primary" label="Spinning"></b-spinner>
          </div>
          <div v-else-if="filterIzvodaci == 0" class="mx-auto mt-4 mb-2">
            <b-icon
              icon="x-circle"
              scale="5"
              class="mb-5 mt-5"
              variant="info"
            ></b-icon>
          </div>
        </VueHorizontal>
      </div>
      <br /><br />
      <div class="pokazi mb-3 mt-1">
        <b-card class="ho" style="border-color: #2677a7">
          <b-card-text style="color:#2677a7">
            <h5>
              PRIJAVLJENO JE
              <b-link to="/Izvodaci" style="color:#b96329">
                {{ karticaI.length }}</b-link
              >
              ZADOVOLJNIH FIRMI
            </h5>

            <h5 v-if="store.trenutniKorisnik">
              BRZO I JEDNOSTAVNO REGISTRIRAJ SVOJU FIRMU
              <b-link to="/NoviIzvodac" style="color:#b96329"> OVDJE</b-link>
            </h5>

            <h5 v-if="!store.trenutniKorisnik">
              AKO ŽELIŠ PRIJAVITI SVOJU FIRMU, PRVO SE REGISTRIRAJ
              <b-link to="/Registracija" style="color:#b96329"> OVDJE</b-link>
            </h5>
          </b-card-text>
        </b-card>
      </div>
      <div class="sakrij mb-3 mt-1">
        <b-card class="ho" style="border-color: #2677a7">
          <b-card-text>
            <div class="container sakrij" style="color:#2677a7">
              <div class="col-6 mx-auto mt-1">
                <h4>
                  PRIJAVLJENO JE
                  <b-link to="/Izvodaci" style="color:#b96329">
                    {{ karticaI.length }}</b-link
                  >
                  ZADOVOLJNIH FIRMI
                </h4>
              </div>
              <div class="col-8 mx-auto mb-4">
                <h4 v-if="store.trenutniKorisnik">
                  BRZO I JEDNOSTAVNO REGISTRIRAJ SVOJU FIRMU
                  <b-link to="/NoviIzvodac" style="color:#b96329">
                    OVDJE</b-link
                  >
                </h4>
              </div>
              <div class="col-9 mx-auto mb-3" style="margin-top:-10px">
                <h4 v-if="!store.trenutniKorisnik">
                  AKO ŽELIŠ PRIJAVITI SVOJU FIRMU, PRVO SE REGISTRIRAJ
                  <b-link to="/Registracija" style="color:#b96329">
                    OVDJE</b-link
                  >
                </h4>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </div>

      <div class="header col-7">
        <br />
        <h4 class="mb-5 fo_nt">Zadovoljni korisnici ocijeniMjastora</h4>
      </div>
      <div class="container karti_ca">
        <div class="row">
          <zadovoljstvoKorisnika
            class="ml-1 mr-1"
            style="width:500px"
            v-for="(izv, index) in zadovoljstvoPodaci"
            :key="index.vrijemeObjave"
            :textZadovoljstvaKorisnika="izv.komentar"
            :vrijemeObjaveZadovoljstva="izv.vrijemeObjave"
            :ocjena="izv.ocjena"
          ></zadovoljstvoKorisnika>
        </div>
      </div>
      <div class="col-4 mx-auto sakrij">
        <b-button to="/ocjeneKorisnika" class="button2"
          >POGLEDAJ SVE OCJENE</b-button
        >
      </div>
      <div class="mx-auto pokazi">
        <b-button to="/ocjeneKorisnika" class="col button2"
          >POGLEDAJ SVE OCJENE</b-button
        >
      </div>
    </div>
    <div>
      <brojac
        :brojIzvodaca="this.karticaI.length"
        :brojKomentara="this.brojKomentara"
        :brojZadovoljnihKomentara="this.brojZadovoljnihKomentara"
        :brojGradova="this.brojGradova"
      ></brojac>
    </div>
    <div class="mt-5"></div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import RadoviKartica from "@/components/RadoviKartica.vue";
import IzvodaciKartica from "@/components/IzvodaciKartica.vue";
import Radovi from "@/views/Radovi.vue";
import VueHorizontal from "vue-horizontal";
import moment from "moment";
import zadovoljstvoKorisnika from "@/components/zadovoljstvoKorisnika.vue";
import brojac from "@/components/brojac.vue";

let karticaI = [];
moment.locale("hr");

export default {
  name: "home",
  components: {
    RadoviKartica,
    IzvodaciKartica,
    VueHorizontal,
    zadovoljstvoKorisnika,
    brojac,
  },
  data() {
    return {
      store,
      Radovi,
      karticaI,
      show: true,
      zadovoljstvoPodaci: [],
      brojKomentara: "",
      brojZadovoljnihKomentara: "",
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
              grad: data.mjesto,
            });
          });
          this.show = false;
        });
    },
    dohvatiPodatke() {
      var docRef = db.collection("podaci").doc("ukupno");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.brojKomentara = doc.data().brojKomentara;
            this.brojZadovoljnihKomentara = doc.data().brojZadovoljnihKomentara;
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    dohvatiZadovoljstvo() {
      db.collection("ocjeneStranice")
        .where("ocjena", ">", 3)
        .orderBy("ocjena", "desc")
        .limit(4)
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
    ocistiSearch() {
      if (this.store.traziPocetna != null) {
        this.store.traziPocetna = "";
      }
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
    brojGradova() {
      return [...new Set(this.karticaI.map((x) => x.grad))].length;
    },
  },
  mounted() {
    this.dohvatiZadovoljstvo();
    if (this.karticaI == 0) {
      this.dohvatiFirme();
    } else {
      this.show = false;
    }
    this.ocistiSearch();
    this.dohvatiPodatke();
  },
};
</script>

<style scoped>
.header {
  margin-bottom: -6px;
  /* margin-top: -6px; */
}
.horizontal >>> .v-hl-container {
  /* Space between content and scrollbar */
  padding-bottom: 16px;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 15px;
  width: 15px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 10px;
}

.blue >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 4px #ffffff solid;
  background: #2677a7;
}
.orange >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 4px #ffffff solid;
  background: #b96329;
}
.button2 {
  display: inline-block;
  background: #4fa2d3;
  color: #fff;
  border: none;
  text-transform: uppercase;
  padding: 15px 65px;
  border-radius: 5px;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  -webkit-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
}
.button2:hover {
  box-shadow: 0px 37px 20px -20px rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(0px, -8px) scale(1.1);
  transform: translate(0px, -8px) scale(1.1);
  background: #4fa2d3;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #2677a7;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
.ho {
  transition: box-shadow 0.3s;
}
.ho:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media only screen and (min-width: 650px) {
  .pokazi {
    display: none;
  }
}
@media only screen and (max-width: 650px) {
  .crta {
    width: 210px;
  }
  .wi {
    width: 500px;
  }
  .sakrij {
    display: none;
  }
  .fo_nt {
    font-size: 19px;
  }
  .karti_ca {
    width: 300px;
  }
}
</style>
