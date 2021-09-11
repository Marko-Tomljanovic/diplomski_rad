<template>
  <div>
    <div v-if="!store.trenutniKorisnik" class="text-center mt-5">
      <b-spinner
        style="width: 5rem; height: 5rem;"
        variant="primary"
        label="Spinning"
      ></b-spinner>
    </div>
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <h4>Vaša firma</h4>
      </div>
    </nav>
    <div
      class="container"
      v-if="
        store.trenutniKorisnik == $route.params.id && this.firmeSve == false
      "
    >
      <p class="ml-4">
        Niste jos dodali firmu! Možete je dodati putem ove poveznice
        <b-link to="/NoviIzvodac" style="color:#b96329">KLIKNI</b-link>
      </p>
      <br />
    </div>
    <div
      class="container"
      v-if="store.trenutniKorisnik == $route.params.id && korisnikovProfil[0]"
    >
      <div v-if="firmeSve.length != 1" style="margin-top:-15px">
        <p class="mb-4">Odaberite jednu od svojih firmi!</p>

        <b-button
          class="col-sm-4 mr-1 mb-1"
          variant="outline-primary"
          v-for="(izv, index) in firmeSve"
          :key="index.ime"
          :to="izv.adresaProfila"
          >{{ izv.ime }}</b-button
        >
      </div>
      <div v-if="firmeSve.length == 1">
        <div>
          <div v-if="korisnikovProfil[0]" class="container">
            <div class="main-body">
              <div class="row gutters-sm">
                <div class="col-md-4 mb-3 ">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="d-flex flex-column align-items-center text-center"
                      >
                        <img
                          :src="korisnikovProfil[0].pic"
                          alt="Firma"
                          class="rounded-circle"
                          width="180"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card mt-3">
                    <h6 class="mb-3 mt-3 mx-auto">
                      Zbog osjetljivosti podataka za svaku promjenu potrebno je
                      kontaktirati nas na Email ocijenimajstorahr@gmail.com
                    </h6>
                    <b-link
                      href="mailto:ocijenimajstorahr@gmail.com"
                      class="mx-auto mt-1 mb-2"
                      style="font-size:14px; color: #2677a7"
                      >Pošalji Email</b-link
                    >
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Vlasnik</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ korisnikovProfil[0].vlasnikFirme }}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Županija</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ korisnikovProfil[0].zupanija }}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Adresa i mjesto</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ korisnikovProfil[0].adresa }},
                          {{ korisnikovProfil[0].mjesto }}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">OIB</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ korisnikovProfil[0].oib }}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Telefon</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ korisnikovProfil[0].telefon }}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          {{ korisnikovProfil[0].sluzbeniEmail }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="container navbar navbar-expand-lg navbar-light bg-light mt-2">
      <div class="container-fluid">
        <h4>Vaši komentari</h4>
      </div>
    </nav>

    <div
      class="container"
      v-if="store.trenutniKorisnik == $route.params.id && this.kom.length == 0"
    >
      <p class="ml-4">
        Nemate još ni jedan komentar! Krenite odmah komentirati, pronađite svoju
        firmu na poveznici
        <b-link to="/Izvodaci" style="color:#b96329">IZVOĐAČI</b-link>
      </p>
      <br />
    </div>
    <div v-if="this.kom.length > 0" class="container">
        <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        aria-controls="itemList"
        align="fill"
        :per-page="perPage"
      ></b-pagination>
      <komentar1
        class="mb-5"
        v-for="(izv, index) in itemsForList"
        :key="index.ime"
        :naslov="izv.naslov"
        :ocjena="izv.ocjena"
        :ime="izv.ime"
        :ocjenaCijene="izv.ocjenaCijene"
        :komentar="izv.komentar"
        :vrijeme="izv.vrijemeObjave"
        :userEmail="izv.korisnik"
        :oib="izv.oib"
        :idd="izv.id"
      ></komentar1>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import podaci from "@/podaci";
import moment from "moment";
import komentar1 from "@/components/komentar.vue";

export default {
  name: "profilKorisnika",
  components: {
    komentar1,
  },
  data() {
    return {
      store,
      id: this.$route.params.id,
      korisnikovProfil: [],
      firmeSve: [],
      podaci,
      kom: [],
      rows: "",
      currentPage: 1,
      perPage: 3,
    };
  },
  methods: {
    dohvatiFirme() {
      db.collection("firme")
        .where("userEmail", "==", this.id)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

            this.firmeSve.push({
              ime: data.ime,
              adresaProfila: "/profilKorisnika1/" + data.profilU,
              userEmail: data.userEmail,
            });

            this.korisnikovProfil.push({
              ime: data.ime,
              vlasnikFirme: data.vlasnikFirme,
              zupanija: data.zupanija,
              mjesto: data.mjesto,
              adresa: data.adresa,
              sluzbeniEmail: data.sluzbeniEmail,
              telefon: data.telefon,
              oib: data.oib,
              pic: data.pic,
              profil: data.profil,
              facebook: data.facebook,
              webStranica: data.webStranica,
              youTube: data.youTube,
              instagram: data.instagram,
              twitter: data.twitter,
              avgOcjena: (data.ukOcjena / data.count || 0).toFixed(1),
              kategorije: data.kategorije,
              userEmail: data.userEmail,
            });
          });
        });
    },
    dohvatKomentara() {
      db.collection("firme")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            //  console.log("Parent Document ID: ", doc.id);
            doc.ref
              .collection("komentari")
              .where("korisnik", "==", this.$route.params.id)
              .orderBy("vrijemeObjave", "desc")
              .get()
              .then((snapshot) => {
                snapshot.forEach((doc) => {
                  // console.log("Sub Document ID: ", doc.id);
                  const data = doc.data();
                  this.kom.push({
                    naslov: data.naslov,
                    ocjena: data.ocjena,
                    ocjenaCijene: data.ocjenaCijene,
                    komentar: data.komentar,
                    korisnik: data.korisnik,
                    ime: data.ime,
                    vrijemeObjave: moment(data.vrijemeObjave).format(
                      "DD-MM-YYYY"
                    ),
                  });
                  this.rows = this.kom.length;
                });
              })
              .catch((err) => {
                console.log("Error getting sub-collection documents", err);
              });
          });
        })
        .catch((err) => {
          console.log("Error getting documents", err);
        });
    },
  },
  computed: {
    itemsForList() {
      return this.kom.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
    this.dohvatKomentara();
  },
};
</script>

<style src="@/assets/informacije.css" scoped>

