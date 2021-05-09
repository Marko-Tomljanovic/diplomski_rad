<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <h4>Postavljanje nove lozinke</h4>
          <br />
          <p>
            Upiši svoju e-mail adresu i stići će ti link za promjenu lozinke
          </p>
          <b-form-input
            v-model="email"
            placeholder="Tvoj e-mail"
            required
            type="email"
          ></b-form-input
          ><br />
          <b-button variant="success" @click="zabLozinka">Potvrdi</b-button>
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
        })
        .catch((error) => {
          console.error(error.message);
          this.errorMessage = error.message;
        });
    },
  },
};
</script>

<style></style>
