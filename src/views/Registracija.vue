<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <form>
          <div class="mb-3">
            Registriraj se!<br /><br />
            <label for="exampleInputEmail1" class="form-label"
              >Email adresa</label
            >
            <input
              v-model="email"
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
              type="password"
              required
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword2" class="form-label"
              >Ponovljena lozinka</label
            >
            <input
              v-model="plozinka"
              type="password"
              required
              class="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              v-model="prihvati"
              type="checkbox"
              class="form-check-input"
              id="Check1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Prihvaćam uvjete korištenja
            </label>
          </div>
          <button @click="registracija" type="button" class="btn btn-primary">
            Registriraj se!
          </button>
          <button
            class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
            href="#"
            @click="prijavaGoogle()"
            type="button"
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />
            Signup Using Google
          </button>
          <button
            href="#"
            type="button"
            @click="prijavaFacebook()"
            class="fb btn"
          >
            <i class="fa fa-facebook fa-fw"></i> Sign up with Facebook
          </button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      lozinka: "",
      plozinka: "",
      prihvati: false,
    };
  },
  methods: {
    registracija() {
      if (this.lozinka != this.plozinka) {
        alert("Lozinke nisu iste!");
      } else if (this.prihvati == false) {
        alert("Potrebno je prihvatiti uvijete korištenja");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.lozinka)
          .then(() => {
            this.$router.replace({ name: "Home" });

            console.log("Uspiješna registracija");
          })
          .catch(function(error) {
            console.error("Došlo je do greške", error);
            alert(error);
          });
      }
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
