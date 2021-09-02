<template>
  <div class="container">
    <div class="main-body">
      <b-form @submit="ucitaj">
        <div class="row gutters-sm">
          <div class="col-md-7 mb-3 ">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="contact-form">
                    <h5 class="mb-2" style="color: #2677a7;">
                      REGISTRACIJA FIRME
                    </h5>
                    <br />
                    <div class="form-field col-lg-8 mx-auto mb-0">
                      <input
                        id="imeFirme"
                        v-model="imeFirme"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="imeFirme"
                        >Naziv firme ili obrta</label
                      >
                    </div>
                    <div class="row col-9 mx-auto">
                      <div class="form-field col-lg-5">
                        <input
                          id="vlasnik"
                          v-model="vlasnikFirmeIme"
                          class="input-text js-input"
                          type="text"
                          autocomplete="off"
                          required
                        />
                        <label class="label" for="vlasnik">Ime vlasnika</label>
                      </div>
                      <div class="form-field col-lg-7">
                        <input
                          id="vlasnik"
                          v-model="vlasnikFirmePrezime"
                          class="input-text js-input"
                          type="text"
                          autocomplete="off"
                          required
                        />
                        <label class="label" for="vlasnik"
                          >Prezime vlasnika</label
                        >
                      </div>
                    </div>

                    <b-form-select
                      class="col-7 mb-2 mx-auto"
                      style="color: #2677a7; border-color:#2677a7; border-radius: 10px"
                      v-model="podaci.selected"
                      :options="podaci.zupanija"
                    ></b-form-select>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="mjesto"
                        v-model="mjesto"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="mjesto">Mjesto</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="adresa"
                        v-model="adresa"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="adresa">Adresa</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="sluzbeniEmail"
                        v-model="sluzbeniEmail"
                        class="input-text js-input"
                        type="email"
                        required
                      />
                      <label class="label" for="sluzbeniEmail">E-mail</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        @input="razdvojiTelefon"
                        id="telefon"
                        v-model="telefon"
                        class="input-text js-input"
                        type="text"
                        required
                      />
                      <label class="label" for="telefon">Telefon</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        @input="oibProvjera"
                        id="oib"
                        v-model="oib"
                        class="input-text js-input"
                        type="tel"
                        minlength="11"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="oib">OIB</label>
                    </div>
                  </div>
                  <label class="label" for="galerija">PORTFOLIO</label>
                  <p style="font-size:13px" class="text-muted">
                    *Neobavezno. Prikaz slika u galeriji. <br />
                    *Maksimalni broj slika je 10!
                  </p>
                </div>
              </div>
            </div>
            <vue-dropzone
              :id="id"
              class="mt-2"
              ref="imgDropzone"
              :options="dropzoneOptions"
              @vdropzone-complete="afterComplite"
            ></vue-dropzone>

            <div v-if="images.length > 0">
              <div class="container-fluid" style="display: flex">
                <div v-for="image in images" :key="image">
                  <img style="width:90px" :src="image" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="contact-form">
                    <div class="contact-form row">
                      <b-dropdown
                        variant="dark"
                        style="border-radius:10px; margin-left:5px; "
                        id="dropdown-form"
                        text="Djelatnosti"
                        ref="dropdown"
                        class="mb-4 col-11"
                        ><b-form-group v-slot="{ ariaDescribedby }">
                          <b-form-checkbox-group
                            switches
                            :options="podaci.kategorija"
                            v-model="podaci.selectedKategorija"
                            :aria-describedby="ariaDescribedby"
                            class="ml-2"
                          >
                          </b-form-checkbox-group
                        ></b-form-group>
                      </b-dropdown>
                      <p
                        v-if="podaci.selectedKategorija.length > 0"
                        class="text-muted mt-1"
                      >
                        ({{ podaci.selectedKategorija.length }})
                      </p>
                    </div>
                    <p style="font-size:13px" class="text-muted">
                      Upravljati mišem veličinu i poziciju slike. <br />
                      *Veličina okvira odgovara prikazu na profilu!
                    </p>
                    <croppa
                      class="mb-5"
                      :width="150"
                      :height="150"
                      v-model="imgRef"
                      placeholder="Učitajte sliku profila"
                      :placeholder-font-size="15"
                      :zoom-speed="8"
                    ></croppa>
                    <h6 class="text-muted">
                      Neobavezna polja: društvene mreže
                    </h6>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="facebook"
                        v-model="facebook"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="facebook">Facebook</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="instagram"
                        v-model="instagram"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="instagram">Instagram</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="webStranica"
                        v-model="webStranica"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="instwebStranicaagram"
                        >Web stranica</label
                      >
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="youTube"
                        v-model="youTube"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="youTube">You Tube</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="twitter"
                        v-model="twitter"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="twitter">Twitter</label>
                    </div>

                    <b-button type="submit" class="blue col-6 mt-4"
                      >POHRANI</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { db, storage } from "@/firebase";
import store from "@/store";
import podaci from "@/podaci";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

let uuid = require("uuid");

export default {
  name: "noviIzvodac",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      imeFirme: "",
      imeFirmeSpojeno: "",
      vlasnikFirmeIme: "",
      vlasnikFirmePrezime: "",
      mjesto: "",
      adresa: "",
      sluzbeniEmail: "",
      telefon: "",
      oib: "",
      profil: "",
      facebook: "",
      instagram: "",
      youTube: "",
      twitter: "",
      webStranica: "",
      imgRef: null,
      podaci,
      images: [],
      id: "bezveze",
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        //maxFilesize: 3,
        acceptedFiles: ".jpg, .jpeg, .png",
        maxFiles: 10,
        resizeQuality: 0.5,
        dictDefaultMessage: "Dovucite slike ili kliknuti ovdje!",
      },
    };
  },
  methods: {
    async afterComplite(file) {
      if (this.imeFirme == "") {
        this.$swal
          .fire({
            icon: "warning",
            allowOutsideClick: false,
            title: "Potrebno je prvo upisati ime firme!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/NoviIzvodac");
            }
          });
      } else {
        try {
          const imageName = uuid.v1();
          const metaData = {
            contentType: "image/png",
          };
          const storageRef = storage.ref();
          const imageRef = storageRef.child(
            `firme/${this.imeFirme}/portfolio/${imageName}.png`
          );

          await imageRef.put(file, metaData);
          const downloadUrl = await imageRef.getDownloadURL();
          this.images.push(downloadUrl);
          this.$refs.imgDropzone.removeFile(file);
          console.log("Uspješno pohranjena slika!");
        } catch (error) {
          console.log(error);
        }
      }
    },
    dodanaFirma() {
      this.$swal.fire({
        title: "Firma " + this.imeFirme + " je uspješno pohranjena!",
        icon: "success",
        position: "top-end",
        toast: true,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 4500,
      });
    },
    ucitaj(event) {
      this.imeFirmeSpojeno = this.imeFirme.replace(/\s+/g, "");
      event.preventDefault();
      if (this.podaci.selected == null) {
        this.$swal.fire({
          icon: "warning",
          title: "Odaberi županiju",
        });
      } else if (this.podaci.selectedKategorija.length == 0) {
        this.$swal.fire({
          icon: "warning",
          text: "Obavezno odabrati minimalno jednu kategoriju!",
        });
      } else {
        this.imgRef.generateBlob((blobData) => {
          let imgName =
            "firme" +
            "/" +
            this.imeFirme +
            "/" +
            "profilnaSlika_" +
            Date.now() +
            ".png";

          storage
            .ref(imgName)
            .put(blobData)
            .then((result) => {
              //uspjesno spremanje
              result.ref
                .getDownloadURL()
                .then((url) => {
                  db.collection("firme")
                    .doc(this.oib)
                    .set({
                      ime: this.imeFirme,
                      vlasnikFirme:
                        this.vlasnikFirmeIme + " " + this.vlasnikFirmePrezime,
                      zupanija: this.podaci.selected,
                      mjesto: this.mjesto,
                      adresa: this.adresa,
                      sluzbeniEmail: this.sluzbeniEmail,
                      telefon: this.telefon,
                      kategorije: this.podaci.selectedKategorija,
                      oib: this.oib,
                      userEmail: store.trenutniKorisnik,
                      profil: "/Profil/" + this.imeFirmeSpojeno,
                      pic: url,
                      galerija: this.images,
                      facebook: this.facebook,
                      instagram: this.instagram,
                      youTube: this.youTube,
                      twitter: this.twitter,
                      webStranica: this.webStranica,
                      count: 0,
                      ukOcjena: 0,
                      vrijemeObjave: Date.now(),
                    })
                    .then((doc) => {
                      console.log("Spremljeno", doc);
                      this.dodanaFirma();
                      this.$router.replace("/");
                      this.imeFirme = "";
                      this.vlasnikFirmeIme = "";
                      this.vlasnikFirmePrezime = "";
                      this.podaci.selected = null;
                      this.podaci.selectedKategorija = [];
                      this.mjesto = "";
                      this.adresa = "";
                      this.sluzbeniEmail = "";
                      this.telefon = "";
                      this.oib = "";
                      this.facebook = "";
                      this.instagram = "";
                      this.youTube = "";
                      this.twitter = "";
                      this.webStranica = "";
                      this.imgRef.remove();
                    })
                    .catch((e) => {
                      console.error(e);
                    });
                })
                .catch((e) => {
                  console.error(e);
                });
            })
            .catch((e) => {
              console.error(e);
            });
        });

        console.log("Podaci firme su učitani");
      }
    },
    razdvojiTelefon() {
      if (this.telefon.length == 3) {
        this.telefon += "/";
      }
    },
    oibProvjera() {
      if (this.oib.length > 11) {
        this.oib = this.oib.slice(0, 11);
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.contact-form .form-field {
  margin: 36px 0;
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
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-24px);
  transform: translateY(-10px);
}
.contact-form .label {
  position: absolute;
  left: 14px;
  bottom: 21px;
  font-size: 17px;
  line-height: 26px;
  font-weight: 400;
  color: #2677a7;
  cursor: text;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.btn {
  border: none;
  border-radius: 5px;
  color: #fff;
  position: relative;
  background-color: rgb(180, 89, 89);
}
.btn:hover {
  color: #fff;
}
.btn:after {
  content: "";
  width: 0;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  transition: all 0.25s ease 0s;
}
.btn:hover:after {
  width: 100%;
}
.btn.blue:after {
  background: #2677a7;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.img-div {
  display: block;
  margin: 25px;
}
img {
  max-width: 250px;
  margin: 15px;
}
</style>
