<template>
  <div>
    <div v-if="!podaciProfila[0]" class="text-center mt-5">
      <b-spinner
        style="width: 5rem; height: 5rem;"
        variant="primary"
        label="Spinning"
      ></b-spinner>
    </div>
    <div v-if="podaciProfila[0]" class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3 ">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="podaciProfila[0].pic"
                    alt="Firma"
                    class="rounded-circle"
                    width="180"
                  />
                  <div class="mt-3">
                    <h4>{{ podaciProfila[0].ime }}</h4>
                    <stars-rating
                      class="mt-3"
                      v-if="komentari[0]"
                      :rating="podaciProfila[0].avgOcjena"
                      v-bind="config"
                    ></stars-rating>
                    <div v-if="!komentari[0]" class="text-center mt-3">
                      <b-icon
                        style="color: #2677a7"
                        icon="star-fill"
                        animation="fade"
                        font-scale="2"
                      ></b-icon>
                    </div>
                    <p class="mt-3 mb-2 text-muted font-size-sm">
                      Pošalji email
                    </p>
                    <a
                      class="btn"
                      :href="`mailto:${podaciProfila[0].sluzbeniEmail}`"
                      target="blank_page"
                      style="width:200px; background-color: #2677a7; color:#ffffff"
                      >Poruka</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <h6 class="mb-3 mt-3 mx-auto">Društvene mreže</h6>
                <a
                  class="over"
                  v-if="podaciProfila[0].facebook"
                  :href="podaciProfila[0].facebook"
                  target="_blank"
                >
                  <i
                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    ><div class="row mx-auto">
                      <div
                        class="mb-0 bi bi-facebook fa-lg text-primary px-2"
                      ></div>
                      <div class="text-secondary">Facebook</div>
                    </div>
                  </i></a
                ><a
                  class="over"
                  v-if="podaciProfila[0].webStranica"
                  :href="podaciProfila[0].webStranica"
                  target="_blank"
                >
                  <i
                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    ><div class="row mx-auto">
                      <div
                        class="mb-0 bi bi-globe2 fa-lg text-primary px-2"
                      ></div>
                      <div class="text-secondary">Web stranica</div>
                    </div>
                  </i></a
                ><a
                  class="over"
                  v-if="podaciProfila[0].youTube"
                  :href="podaciProfila[0].youTube"
                  target="_blank"
                >
                  <div
                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div class="row mx-auto">
                      <div
                        class="mb-0 bi bi-youtube fa-lg text-danger px-2"
                      ></div>
                      <div class="text-secondary">YouTube</div>
                    </div>
                  </div></a
                ><a
                  class="over"
                  v-if="podaciProfila[0].instagram"
                  :href="podaciProfila[0].instagram"
                  target="_blank"
                  ><i
                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    ><div class="mx-auto row ">
                      <div
                        class="mb-0 bi bi-instagram fa-lg text-danger px-2"
                      ></div>
                      <div class="text-secondary">Instagram</div>
                    </div>
                  </i></a
                ><a
                  class="over"
                  v-if="podaciProfila[0].twitter"
                  :href="podaciProfila[0].twitter"
                  target="_blank"
                  ><div
                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap mx-auto row"
                  >
                    <div class="mx-auto row ">
                      <div
                        class="mb-0 bi bi-twitter fa-lg text-info px-2"
                      ></div>
                      <div class="text-secondary">Twitter</div>
                    </div>
                  </div></a
                >
              </ul>
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
                    {{ podaciProfila[0].vlasnikFirme }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Županija</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ podaciProfila[0].zupanija }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Adresa i mjesto</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ podaciProfila[0].adresa }}, {{ podaciProfila[0].mjesto }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">OIB</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ podaciProfila[0].oib }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ podaciProfila[0].telefon }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ podaciProfila[0].sluzbeniEmail }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <h6 class="mb-3 mt-3 mx-auto">Komentari i ocijene</h6>
            </div>
            <div v-if="!store.trenutniKorisnik" class="card mt-3">
              <h6 class="mb-3 mt-3 mx-auto">
                Prijavi se kako bi mogao komentirati!
              </h6>
            </div>
            <div v-if="store.trenutniKorisnik" class="card mt-3">
              <h6 class="mb-1 mt-3 px-4">
                Upiši osvrt na firmu
                <b-form-select
                  style="border-radius:8px"
                  v-model="podaci.ocjenaKorisnika"
                  :options="podaci.izborOcjena"
                  size="sm"
                  class="float-right  text-centerd col-2 mr-2"
                ></b-form-select>
                <p class="float-right px-3 mt-1 text-secondary">
                  Ocjeni firmu
                </p>
              </h6>
              <b-form-input
                style="border-radius: 8px"
                class="col-11 mx-auto mb-2"
                v-model="naslovKorisnika"
                placeholder="Unesi naslov"
              ></b-form-input>
              <b-form-textarea
                style="border-radius: 8px;"
                class="col-11 mb-2 mx-auto text-secondary"
                id="textarea"
                v-model="komentarKorisnika"
                placeholder="Unesi komentar..."
                rows="2"
                max-rows="7"
              ></b-form-textarea>
              <b-button
                class="btn col-11 mx-auto mb-3"
                @click="ucitajOsvrt()"
                style="background-color: #2677a7; border-color:#2677a7"
                >Učitaj</b-button
              >
            </div>
            <komentar
              v-for="(izv, index) in komentari"
              :key="index.ime"
              :naslov="izv.naslov"
              :ocjena="izv.ocjena"
              :komentar="izv.komentar"
              :vrijeme="izv.vrijemeObjave"
            ></komentar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { firebase } from "@/firebase";
import podaci from "@/podaci";
import store from "@/store";
import komentar from "@/components/komentar.vue";
import moment from "moment";
import starsRating from "@/components/rating-stars";

export default {
  name: "profil",
  components: {
    komentar,
    starsRating,
  },
  data() {
    return {
      id: this.$route.params.id,
      podaciProfila: [],
      komentari: [],
      komentarKorisnika: "",
      naslovKorisnika: "",
      podaci,
      store,
      prosjecnaOcjena: "",
      prazan: [],
      config: {
        rating: "",
        isIndicatorActive: true,
        starStyle: {
          fullStarColor: "#ffd000",
          emptyStarColor: "#dddddd",
          starWidth: 40,
          starHeight: 40,
        },
      },
    };
  },
  methods: {
    dohvatiFirme() {
      db.collection("firme")
        .where("ime", "==", this.id)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();

            this.podaciProfila.push({
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
            });
            doc.ref
              .collection("komentari")
              .orderBy("vrijemeObjave", "desc")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const dataK = doc.data();

                  this.komentari.push({
                    naslov: dataK.naslov,
                    ocjena: dataK.ocjena,
                    komentar: dataK.komentar,
                    vrijemeObjave: moment(dataK.vrijemeObjave).format(
                      "DD-MM-YYYY"
                    ),
                  });
                });
              });
          });
        });
    },
    ucitajOsvrt() {
      const zbroji = firebase.firestore.FieldValue;
      db.collection("firme")
        .doc(this.podaciProfila[0].oib)
        .update({
          count: zbroji.increment(1),
          ukOcjena: zbroji.increment(this.podaci.ocjenaKorisnika),
        });

      db.collection("firme")
        .doc(this.podaciProfila[0].oib)
        .collection("komentari")
        .add({
          naslov: this.naslovKorisnika,
          komentar: this.komentarKorisnika,
          ocjena: this.podaci.ocjenaKorisnika,
          korisnik: store.trenutniKorisnik,
          vrijemeObjave: Date.now(),
          ime: this.podaciProfila[0].ime,
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.naslovKorisnika = "";
          this.komentarKorisnika = "";
          this.podaci.ocjenaKorisnika = null;
          alert("Osvrt firme je uspiješno dodan!");
        })
        .catch((e) => {
          console.error(e);
        });
      console.log("Osvrt je učitan");
    },
  },
  mounted() {
    //dohvacanje iz firebasea
    this.dohvatiFirme();
  },
};
</script>

<style scoped>
.blueText {
  color: #2677a7;
  font-size: 24px;
  font-weight: 500;
  text-decoration: underline;
}
.card {
  transition: box-shadow 0.3s;
}
.over {
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.5);
}
a:hover {
  text-decoration: none;
}
.over:hover {
  z-index: 9;
  box-shadow: 10px 0px 10px 0px #acaaaa;
}
</style>
