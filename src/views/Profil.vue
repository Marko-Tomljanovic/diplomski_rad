<template>
  <div>
    <div v-if="!podaciProfila[0]" class="text-center mt-5">
      <b-spinner
        style="width: 5rem; height: 5rem;"
        variant="primary"
        label="Spinning"
      ></b-spinner>
    </div>
    <div v-if="podaciProfila[0]">
      <div
        class="col"
        v-if="
          podaciProfila[0].vrijemeRegistracijeFirme.includes(dan[0]) == false &&
            podaciProfila[0].vrijemeRegistracijeFirme.includes(dan[1]) ==
              false &&
            podaciProfila[0].vrijemeRegistracijeFirme.includes(dan[2]) == false
        "
      >
        <div
          style="margin-top:-18px; background-color: #b3ffb3"
          class="mb-3 border row justify-content-md-center"
        >
          <div class="col col-lg-2"></div>
          <div class="mt-2 mb-2 col-md-auto text-muted">
            U tijeku je prvjera autentičnosti podataka firme. Provjera će
            trajati 24 sata.
          </div>
          <div class="col col-lg-2"></div>
        </div>
      </div>
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
              <h6 class="mb-3 mt-3 mx-auto">Djelatnosti koje obavljaju</h6>
              <ul class="list-group list-group-flush mx-auto">
                <div class="mt-2"></div>
                <li
                  class="text-secondary mt-1"
                  v-for="kat in this.prazan"
                  :key="kat"
                >
                  {{ kat }}
                </li>
                <div class="mb-3"></div>
              </ul>
              <b-link
                to="/Radovi"
                class="mx-auto mt-1 mb-2"
                style="font-size:14px; color: #2677a7"
                >Pogledaj sve djelatnosti!</b-link
              >
            </div>
            <div class="card mt-3">
              <h6 class="mb-3 mt-3 mx-auto">Prosječna cijena usluga</h6>

              <p
                style="font-size: 14px; margin-top:-10px"
                class="text-secondary mx-auto"
              >
                *glasali korisnici
              </p>
              <div class="container">
                <b-progress class="mb-3" max="3">
                  <b-progress-bar
                    variant="success"
                    :value="podaciProfila[0].avgOcjenaCijene"
                    :label="
                      `${((podaciProfila[0].avgOcjenaCijene / 3) * 100).toFixed(
                        1
                      )}%`
                    "
                  ></b-progress-bar>
                </b-progress>
              </div>
              <div
                v-if="podaciProfila[0].avgOcjenaCijene == 0"
                class="text-secondary mx-auto mb-3 container col-10"
                style="font-size: 14px;"
              >
                Još nema ocjena, bud prvi i ostavi ocjenu!
              </div>
              <div
                v-if="
                  podaciProfila[0].avgOcjenaCijene > 0 &&
                    podaciProfila[0].avgOcjenaCijene < 1.6
                "
                class="text-secondary mx-auto mb-3 container"
                style="font-size: 14px;"
              >
                Korisnici su usluge ocijenili povoljnim i prihvatljivim
              </div>
              <div
                v-if="
                  podaciProfila[0].avgOcjenaCijene >= 1.6 &&
                    podaciProfila[0].avgOcjenaCijene <= 2.6
                "
                class="text-secondary mx-auto mb-3 container"
                style="font-size: 14px;"
              >
                Korisnici su usluge ocijenili sa većom prosječnom cijenom ali
                prihvatljive cijene!
              </div>
              <div
                v-if="podaciProfila[0].avgOcjenaCijene > 2.6"
                class="text-secondary mx-auto mb-3 container"
                style="font-size: 14px;"
              >
                Korisnici su ocijenili kako su usluge skupe!
              </div>
            </div>
            <div v-if="podaciProfila[0].galerija" class="card mt-3">
              <h6 class="mb-3 mt-3 mx-auto">
                Portfolio galerija ({{ podaciProfila[0].galerija.length }})
              </h6>
              <div class="mx-auto mb-3" style="display: flex;">
                <b-link>
                  <img
                    class="mr-1"
                    style="width:90px; height: 90px"
                    v-for="(image, i) in podaciProfila[0].galerija.slice(0, 3)"
                    :src="image"
                    :key="i"
                    @click="index = i"
                /></b-link>
              </div>
              <vue-gallery-slideshow
                :images="podaciProfila[0].galerija"
                :index="index"
                @close="index = null"
              ></vue-gallery-slideshow>
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
                  v-if="podaciProfila[0].tikTok"
                  :href="podaciProfila[0].tikTok"
                  target="_blank"
                >
                  <div
                    class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div class="row mx-auto">
                      <tikTokE></tikTokE>
                      <div class="text-secondary ml-2">TikTok</div>
                    </div>
                  </div></a
                >
                <a
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
            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <h6 class="mb-3 mt-3 mx-auto">Podjeli profil izvođača</h6>
                <div class="col-7 mx-auto">
                  <ShareNetwork
                    network="facebook"
                    :url="`https://ocijenimajstora.netlify.app${id}`"
                    title="Pogledajte profil izvođača! Nova, nevjerojatno jednostavna starnica za ocjenjivanje majstora!"
                    description="Nova stranica na kojoj možete komentirati i ocjenjivate uluge Vaših izvođača. Požurite i budite među prvim koji će komentirati profil!"
                    quote="Komentiraj i ti profil izvođača!"
                    hashtags="profil,izvođač,ocjena"
                    ><b-button
                      class="col mt-1"
                      style="border:none; background-color:#4267B2"
                      ><i class="fa fa-facebook"></i>
                      <span class="ml-2">Facebook</span></b-button
                    >
                  </ShareNetwork>
                  <ShareNetwork
                    network="twitter"
                    :url="`https://ocijenimajstora.netlify.app${id}`"
                    title="Pogledajte profil izvođača! Nova, nevjerojatno jednostavna starnica za ocjenjivanje majstora!"
                    description="Nova stranica na kojoj možete komentirati i ocjenjivate uluge Vaših izvođača. Požurite i budite među prvim koji će komentirati profil!"
                    quote="Komentiraj i ti profil izvođača!"
                    hashtags="profil,izvođač,ocjena"
                    ><b-button
                      class="col mt-1"
                      style="border:none; background-color:#1DA1F2"
                      ><i class="fa fa-twitter"></i>
                      <span class="ml-2">Twitter</span></b-button
                    >
                  </ShareNetwork>
                  <ShareNetwork
                    network="viber"
                    :url="`https://ocijenimajstora.netlify.app${id}`"
                    title="Pogledajte profil izvođača! Nova, nevjerojatno jednostavna starnica za ocjenjivanje majstora!"
                    description="Nova stranica na kojoj možete komentirati i ocjenjivate uluge Vaših izvođača. Požurite i budite među prvim koji će komentirati profil!"
                    quote="Komentiraj i ti profil izvođača!"
                    hashtags="profil,izvođač,ocjena"
                    ><b-button
                      class="col mt-1"
                      style="border:none; background-color:#59267c"
                      ><i class="fa fa-whatsapp"></i>
                      <span class="ml-2">Viber</span></b-button
                    >
                  </ShareNetwork>
                  <ShareNetwork
                    network="whatsapp"
                    :url="`https://ocijenimajstora.netlify.app${$route.path}`"
                    title="Pogledajte profil izvođača! Nova, nevjerojatno jednostavna starnica za ocjenjivanje majstora!"
                    description="Nova stranica na kojoj možete komentirati i ocjenjivate uluge Vaših izvođača. Požurite i budite među prvim koji će komentirati profil!"
                    quote="Komentiraj i ti profil izvođača!"
                    hashtags="profil,izvođač,ocjena"
                    ><b-button
                      class="col mt-1"
                      style="border:none; background-color:#075e54"
                      ><i class="fa fa-whatsapp"></i>
                      <span class="ml-2">WhatsApp</span></b-button
                    >
                  </ShareNetwork>
                  <ShareNetwork
                    network="email"
                    :url="`https://ocijenimajstora.netlify.app${id}`"
                    title="Pogledajte profil izvođača! Nova, nevjerojatno jednostavna starnica za ocjenjivanje majstora!"
                    description="Nova stranica na kojoj možete komentirati i ocjenjivate uluge Vaših izvođača. Požurite i budite među prvim koji će komentirati profil!"
                    quote="Komentiraj i ti profil izvođača!"
                    hashtags="profil,izvođač,ocjena"
                    ><b-button
                      class="col mt-1 mb-3"
                      style="border:none; background-color:	#004f9f"
                      ><i class="fa fa-envelope"></i>
                      <span class="ml-2">Email</span></b-button
                    >
                  </ShareNetwork>
                </div>
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
            <div
              v-if="
                store.trenutniKorisnik == podaciProfila[0].userEmail &&
                  podaciProfila[0].praviVlasnik == true
              "
              class="card mt-3"
              style="border-color:#2677a7"
            >
              <h6 class="mb-3 mt-3 mx-auto" style="color:#2677a7">
                Vaša firma!
              </h6>
            </div>
            <div class="card mt-3">
              <h6 class="mb-3 mt-3 mx-auto">Komentari i ocijene</h6>
            </div>
            <div
              v-if="!store.trenutniKorisnik"
              class="card mt-3"
              style="border-color:#2677a7"
            >
              <h6 class="mb-3 mt-3 mx-auto" style="color:#2677a7">
                Prijavi se kako bi mogao komentirati!
              </h6>
            </div>
            <div
              v-if="
                (store.trenutniKorisnik &&
                  store.trenutniKorisnik != podaciProfila[0].userEmail) ||
                  (store.trenutniKorisnik == podaciProfila[0].userEmail &&
                    podaciProfila[0].praviVlasnik == false)
              "
              class="card mt-3"
            >
              <h6 class="mb-1 mt-3 px-4 sakrij">
                Osvrt na firmu
                <b-form-rating
                  style="margin-top:-4px"
                  class="w-25 h-25 mr-2 float-right"
                  id="rating-5"
                  v-model="ocjenaKorisnika"
                  stars="5"
                  color="#e2b900"
                  no-border
                  size="lg"
                ></b-form-rating>
                <p class="float-right mt-1 text-secondary">
                  Ocjena
                </p>
                <b-form-rating
                  icon-empty="cash"
                  icon-full="capslock-fill"
                  style="margin-top:-4px;margin-right:10px"
                  class="w-25 h-25 mr-4 float-right"
                  id="rating-5"
                  v-model="ocjenaCijene"
                  stars="3"
                  variant="success"
                  no-border
                  size="lg"
                ></b-form-rating>
                <p class="float-right mt-1 text-secondary">
                  Cijena usluge
                </p>
              </h6>
              <p
                class="text-secondary float-rights sakrij"
                style=" font-size: 10px; margin-left:299px;margin-top:-17px"
              >
                NISKA -> POVOLJNA -> VISOKA
              </p>

              <h6 class="mb-1 mt-3 mx-auto px-4 pokazi">
                Osvrt na firmu
              </h6>
              <p class="text-secondary pokazi" style="margin-left:9px">
                Ocjena
              </p>
              <div class="pokazi">
                <b-form-rating
                  style="margin-top:-11px"
                  class="w-25 h-25"
                  id="rating-5"
                  v-model="ocjenaKorisnika"
                  stars="5"
                  color="#e2b900"
                  no-border
                  size="lg"
                ></b-form-rating>
              </div>
              <div class="pokazi">
                <p class="mt-1 text-secondary" style="margin-left:9px">
                  Cijena usluge
                </p>
                <b-form-rating
                  icon-empty="cash"
                  icon-full="capslock-fill"
                  style="margin-top:-11px;margin-left:8px"
                  class="w-25 h-25"
                  id="rating-5"
                  v-model="ocjenaCijene"
                  stars="3"
                  variant="success"
                  no-border
                  size="lg"
                ></b-form-rating>

                <p
                  class="text-secondary float-rights"
                  style=" font-size: 9px; margin-left:12px; margin-top:-6px"
                >
                  NISKA -> POVOLJNA -> VISOKA
                </p>
              </div>
              <b-form-input
                style="border-radius: 8px; margin-top:-8px"
                class="col-11 mx-auto mb-2"
                v-model="naslovKorisnika"
                placeholder="Naslov"
                autocomplete="off"
              ></b-form-input>
              <b-form-textarea
                style="border-radius: 8px;"
                class="col-11 mb-2 mx-auto text-secondary"
                id="textarea"
                v-model="komentarKorisnika"
                placeholder="Komentar"
                autocomplete="off"
                rows="2"
                max-rows="7"
              ></b-form-textarea>
              <b-button
                class="btn col-11 mx-auto mb-3"
                @click="ucitajOsvrt()"
                style="background-color: #2677a7; border-color:#2677a7"
                >UČITAJ</b-button
              >
            </div>
            <komentar
              id="itemList"
              v-for="(izv, index) in itemsForList"
              :key="index.ime"
              :naslov="izv.naslov"
              :ocjena="izv.ocjena"
              :ocjenaCijene="izv.ocjenaCijene"
              :komentar="izv.komentar"
              :vrijeme="izv.vrijemeObjave"
              :slazemSe="izv.slazemSe"
              :userEmail="izv.korisnik"
              :lajkKorisnik="izv.lajkKorisnik"
              :oib="izv.oib"
              :idd="izv.id"
            ></komentar>
            <b-pagination
              v-if="komentari.length > 4"
              class="mt-3"
              v-model="currentPage"
              :total-rows="rows"
              aria-controls="itemList"
              align="fill"
              :per-page="perPage"
              variant="success"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, firebase } from "@/firebase";
import podaci from "@/podaci";
import store from "@/store";
import komentar from "@/components/komentar.vue";
import moment from "moment";
import starsRating from "@/components/rating-stars";
import VueGallerySlideshow from "vue-gallery-slideshow";
import tikTokE from "@/components/tikTok.vue";

export default {
  name: "profil",
  components: {
    komentar,
    starsRating,
    VueGallerySlideshow,
    tikTokE,
  },
  data() {
    return {
      id: this.$route.params.id,
      podaciProfila: [],
      dan: ["dana", "dan", "godina"],
      komentari: [],
      komentarKorisnika: "",
      naslovKorisnika: "",
      ocjenaKorisnika: "",
      ocjenaCijene: "",
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
      index: null,
      rows: "",
      currentPage: 1,
      perPage: 4,
    };
  },
  methods: {
    djelatnostiSlova() {
      for (let i = 0; i < this.podaci.kategorija.length; i++) {
        let n = this.podaciProfila[0].kategorije.includes(
          this.podaci.kategorija[i].value
        );
        if (n == true) {
          this.prazan.push(this.podaci.kategorija[i].text);
        }
      }
    },
    dohvatiFirme() {
      db.collection("firme")
        .where("profilU", "==", this.$route.params.id)
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
              galerija: data.galerija,
              facebook: data.facebook,
              userEmail: data.userEmail,
              praviVlasnik: data.praviVlasnik,
              vrijemeRegistracijeFirme: moment(data.vrijemeRegistracijeFirme)
                .startOf()
                .fromNow(),
              webStranica: data.webStranica,
              youTube: data.youTube,
              tikTok: data.tikTok,
              instagram: data.instagram,
              twitter: data.twitter,
              avgOcjena: (data.ukOcjena / data.count || 0).toFixed(1),
              avgOcjenaCijene: (data.ukOcjenaCijene / data.count || 0).toFixed(
                2
              ),
              kategorije: data.kategorije,
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
                    ocjenaCijene: dataK.ocjenaCijene,
                    komentar: dataK.komentar,
                    korisnik: dataK.korisnik,
                    lajkKorisnik: dataK.lajkKorisnik,
                    slazemSe: dataK.slazemSe,
                    vrijemeObjave: moment(dataK.vrijemeObjave).format(
                      "DD-MM-YYYY"
                    ),
                    id: doc.id,
                    oib: this.podaciProfila[0].oib,
                  });
                });
                this.djelatnostiSlova();
                this.rows = this.komentari.length;
              });
          });
        });
    },
    ucitajOsvrt() {
      if (this.naslovKorisnika == "") {
        this.$swal.fire({
          icon: "warning",
          title: "Naslov je obavezan",
        });
      } else if (this.komentarKorisnika == "") {
        this.$swal.fire({
          icon: "warning",
          title: "Komentar je obavezan",
        });
      } else if (this.ocjenaKorisnika == 0) {
        this.$swal.fire({
          icon: "warning",
          title: "Potrebno je unjeti ocjenu!",
        });
      } else if (this.ocjenaCijene == 0) {
        this.$swal.fire({
          icon: "warning",
          title: "Potrebno je unjeti ocjenu cijene!",
        });
      } else {
        const zbroji = firebase.firestore.FieldValue;
        db.collection("firme")
          .doc(this.podaciProfila[0].oib)
          .update({
            ukOcjenaCijene: zbroji.increment(this.ocjenaCijene),
            count: zbroji.increment(1),
            ukOcjena: zbroji.increment(this.ocjenaKorisnika),
          });

        const zbrojii = firebase.firestore.FieldValue;
        db.collection("podaci")
          .doc("ukupno")
          .update({
            brojKomentara: zbrojii.increment(1),
          })
          .catch(function(error) {
            console.error(error);
          });

        db.collection("firme")
          .doc(this.podaciProfila[0].oib)
          .collection("komentari")
          .add({
            naslov: this.naslovKorisnika,
            komentar: this.komentarKorisnika,
            ocjena: this.ocjenaKorisnika,
            ocjenaCijene: this.ocjenaCijene,
            lajkKorisnik: "",
            slazemSe: 0,
            korisnik: store.trenutniKorisnik,
            vrijemeObjave: Date.now(),
            ime: this.podaciProfila[0].ime,
          })
          .then((doc) => {
            console.log("Spremljeno", doc.id);
            this.posljiEmail();
            this.naslovKorisnika = "";
            this.komentarKorisnika = "";
            this.ocjenaKorisnika = null;
            this.ocjenaCijene = null;
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Uspješno dodan komentar",
              showConfirmButton: false,
              timer: 1730,
            });
            this.komentari = [];
            this.podaciProfila = [];
            this.dohvatiFirme();
          })
          .catch((e) => {
            console.error(e);
          });
        console.log("Osvrt je učitan");
      }
    },
    posljiEmail() {
      window.Email.send({
        Host: "smtp.gmail.com",
        Username: "ocijenimajstorahr@gmail.com",
        Password: "jedandva3",
        To: this.podaciProfila[0].sluzbeniEmail,
        From: "ocijenimajstorahr@gmail.com",
        Subject: "Netko je komentirao Vašu firmu!",
        Body:
          "Poštovani, <br><br> Vaša firma je dobila novi komentar. Kako bi vidjeli komentar otiđite na <a href=http://localhost:8080/>ocijeniMajstora</a> ili slijedite sljedeću poveznicu na Vaš profil. <br> " +
          "https://ocijenimajstora.netlify.app/Profil/" +
          this.id,
      }).then(() => console.log("Email uspješno poslan!"));
    },
  },
  computed: {
    itemsForList() {
      return this.komentari.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
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
