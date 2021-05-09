<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <form>
          <div class="mb-3">
            Prijavi se <br /><br />
            <label for="exampleInputEmail1" class="form-label"
              >Email adresa</label
            >
            <input
              v-model="korisnickoIme"
              type="email"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Lozinka</label
            >
            <input
              v-model="lozinka"
              required
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <b-button type="button" @click="prijava()" class="btn btn-success">
            Prijava</b-button
          ><br />
          <button
            class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
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
            class="fb btn"
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

<style scoped>
@import "../assets/button.css";
</style>
