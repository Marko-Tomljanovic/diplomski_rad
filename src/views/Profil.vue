<template>
  <div v-if="podaciProfila[0]" class="container">
    <div class="main-body">
      <!-- /Breadcrumb -->
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
                  <p class="text-secondary mb-1">
                    NESTO BI MOGAO I TU NAPISATI
                  </p>
                  <p class="text-muted font-size-sm">Pošalji email</p>
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
              >
              <a
                class="over"
                v-if="podaciProfila[0].youTube"
                :href="podaciProfila[0].youTube"
                target="_blank"
              >
                <i
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  ><div class="row mx-auto">
                    <div
                      class="mb-0 bi bi-youtube fa-lg text-danger px-2"
                    ></div>
                    <div class="text-secondary">YouTube</div>
                  </div>
                </i></a
              ><a
                class="over"
                v-if="podaciProfila[0].instagram"
                :href="podaciProfila[0].instagram"
                target="_blank"
              >
                <i
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  ><div class="mx-auto row ">
                    <div
                      class="mb-0 bi bi-instagram fa-lg text-danger px-2"
                    ></div>
                    <div class="text-secondary">Instagram</div>
                  </div>
                </i></a
              >
              <a
                class="over"
                v-if="podaciProfila[0].twitter"
                :href="podaciProfila[0].twitter"
                target="_blank"
              >
                <i
                  class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                >
                  <h6 class="mb-0 mx-auto bi bi-twitter fa-lg text-info">
                    Twitter
                  </h6>
                </i></a
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
                  <h6 class="mb-0">Mjesto i adresa</h6>
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
            <ul class="list-group list-group-flush">
              <h6 class="mb-3 mt-3 mx-auto">Komentari i ocijene</h6>
            </ul>
          </div>
        </div>
      </div>
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
    };
  },
  methods: {
    funk() {
      console.log(this.podaciProfila[0]);
    },
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
            });
          });
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
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.5);
}
a:hover {
  text-decoration: none;
}
.over:hover {
  z-index: 15;
  box-shadow: 10px 0px 10px 0px #acaaaa;
}
</style>
