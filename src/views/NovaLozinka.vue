<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <h4>Postavljanje nove lozinke</h4>
          <br />
          <p>
            Upišite svoju email adresu koji ste koristili pri registraciji i
            poslat ćemo vam upute za povrat lozinke
          </p>
          <b-form-input
            v-model="email"
            placeholder="e-mail"
            type="email"
            autocomplete="off"
            required
            @change="zabLozinka"
          ></b-form-input
          ><br />
          <b-button class="col" variant="success" @click="zabLozinka"
            >ZATRAŽI LOZINKU</b-button
          >
        </div>
        <div class="col"></div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "NovaLozinka",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    zabLozinka() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then((result) => {
          console.log(result);
          this.email = "";
          this.$swal
            .fire({
              icon: "success",
              title: "Uspješno zaprimljen zahtjev",
              text: "Upute za promjenu lozinke su poslane na email",
              allowOutsideClick: false,
              confirmButtonText: "Povratak na prijavu",
            })
            .then((result) => {
              if (result.isConfirmed) {
                window.location.replace("/Prijava");
              }
            });
        })
        .catch((error) => {
          console.error(error.message);
          this.errorMessage = error.message;
          this.$swal
            .fire({
              icon: "info",
              text: "Unesena EMAIL adresa nije registrirana",
              confirmButtonText: "POKUŠAJ PONOVNO",
            })
            .then((result) => {
              if (result.isConfirmed) {
                window.location.replace("/NovaLozinka");
              }
            });
        });
    },
  },
};
</script>

<style></style>
