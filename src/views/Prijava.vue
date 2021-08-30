<template>
  <div class="container">
    <img
      style="margin-top:-35px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); max-height: 150px;"
      class="card-img-top fluid"
      src="https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/kategorije%2Fprijava.jpg?alt=media&token=203cb572-5233-4b68-9812-fac2c9013b43"
      alt="Card image cap"
    />
    <div class="row">
      <div class="col"></div>
      <div class="col-sm-6 mt-3">
        <form class="contact-form">
          <div class="mb-4">
            <div class="mb-1 form-field font-weight-bold col-2 mx-auto">
              Prijava<br /><br />
            </div>
            <label for="exampleInputEmail1" class="form-label font-weight-bold"
              >Email</label
            >
            <input
              v-model="korisnickoIme"
              type="email"
              required
              class=" input-text js-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-5 form-field">
            <label
              for="exampleInputPassword1"
              class="form-label font-weight-bold"
              >Lozinka</label
            >
            <input
              v-model="lozinka"
              required
              type="password"
              class="input-text js-input"
              id="exampleInputPassword1"
            />
          </div>
          <b-button
            type="button"
            @click="prijava()"
            class="btn btn-success col mb-3"
            style="padding: 9px;"
          >
            PRIJAVA</b-button
          ><br />
          <button
            class="btn btn-lg btn-google btn-block text-uppercase btn-outline mb-2"
            href="#"
            @click="prijavaGoogle()"
            type="button"
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
            LogIn Using Google
          </button>
          <button
            href="#"
            type="button"
            @click="prijavaFacebook()"
            class="fb btn mb-3"
          >
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </button>
          <p>
            <br />
            Nemaš podatke za registraciju?
            <b-link to="/Registracija">Registriraj se!</b-link>
          </p>
          <p>
            Zaboravljena lozinka?
            <b-link to="/NovaLozinka">Zatraži novu lozinku</b-link>
          </p>
        </form>
        <br /><br />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
// import store from "@/store"

export default {
  name: "Prijava",
  data() {
    return {
      korisnickoIme: "",
      lozinka: "",
    };
  },
  methods: {
    prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.korisnickoIme, this.lozinka)
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.$router.replace({ name: "Home" });
        })
        .catch(function(e) {
          console.error("Greška", e);
          alert(e);
        });
    },
    prijavaGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var token = result.credential.accessToken;
          console.log(token);
          var user = result.user;
          console.log(user);
          this.$router.replace("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          alert(errorCode);
          var errorMassage = error.errorMassage;
          console.log(errorMassage);
          var email = error.email;
          console.log(email);
          alert("Korisnik sa istim podacima je već registriran");
          var credential = error.credential;
          console.log(credential);
        });
    },

    prijavaFacebook() {
      var provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          var token = result.credential.accessToken;
          console.log(token);
          var user = result.user;
          console.log(user);
          this.$router.replace("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          alert(errorCode);
          var errorMassage = error.errorMassage;
          console.log(errorMassage);
          var email = error.email;
          console.log(email);
          alert("Korisnik sa istim podacima je već registriran");
          var credential = error.credential;
          console.log(credential);
        });
    },
  },
};
</script>

<style src="../assets/button.css" scoped>

