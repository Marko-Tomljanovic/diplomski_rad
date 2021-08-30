<template>
  <div class="container">
      <img
      style="margin-top:-35px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
      class="card-img-top fluid"
      src="https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/kategorije%2Fregistracija.jpg?alt=media&token=8e03ebde-dd05-47ab-951a-57ee8451d92e"
      alt="Card image cap"
    />
    <div class="row">
      <div class="col"></div>
      <div class="col-sm-6"><br>
        <form class="contact-form">
          <div class="mb-4">
            <div class="mb-1 form-field font-weight-bold col-2 mx-auto">
            Registracija<br /><br /></div>
            <label for="exampleInputEmail1" class="form-label font-weight-bold"
              >Email adresa</label
            >
            <input
              v-model="email"
              type="email"
              required
              class="input-text js-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword1" class="form-label font-weight-bold"
              >Lozinka</label
            >
            <input
              v-model="lozinka"
              type="password"
              required
              class="input-text js-input"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword2" class="form-label font-weight-bold"
              >Ponovljena lozinka</label
            >
            <input
              v-model="plozinka"
              type="password"
              required
              class="input-text js-input"
              id="exampleInputPassword2"
            />
          </div>
          <div class="mb-5 form-check">
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
          <button @click="registracija" type="button" class="btn btn-primary col mb-3" style="padding: 9px;">
            REGISTRIRAJ SE!
          </button>
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
            class="fb btn"
          >
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </button>
        </form><br><br>
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

<style src="../assets/button.css" scoped>
