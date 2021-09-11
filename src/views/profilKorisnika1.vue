<template>
  <div>
    <div v-if="!store.trenutniKorisnik" class="text-center mt-5">
      <b-spinner
        style="width: 5rem; height: 5rem;"
        variant="primary"
        label="Spinning"
      ></b-spinner>
    </div>
    <nav
      class="container navbar navbar-expand-lg navbar-light bg-light mt-3 mb-3"
    >
      <div class="container-fluid">
        <h4>Vaša firma</h4>
      </div>
    </nav>
    <div v-if="korisnikovProfil[0]" class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3 ">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
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
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import podaci from "@/podaci";

export default {
  name: "profilKorisnika",
  data() {
    return {
      store,
      prazan: [],
      id: this.$route.params.id,
      korisnikovProfil: [],
      firmeSve: [],
      podaci,
    };
  },
  methods: {
    dohvatiFirme() {
      db.collection("firme")
        .where("profilU", "==", this.id)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

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
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
  },
};
</script>

<style src="@/assets/informacije.css" scoped>