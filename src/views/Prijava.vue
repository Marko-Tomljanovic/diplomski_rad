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
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <br />
          <button type="button" @click="prijava()" class="btn btn-success">
            Prijava</button
          ><br /><br />

          <Button
            class="btn btn-lg btn-google btn-block text-uppercase btn-outline"
            href="#"
            @click="prijavaGoogle()"
            type="button"
            ><img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
            />
            Signup Using Google</Button
          >

          <Button
            href="#"
            type="button"
            @click="prijavaFacebook()"
            class="fb btn"
          >
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </Button>
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
          alert("Korisnik sa" + email + "adresom je već registriran");
          var credential = error.credential;
          alert(credential);
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
          alert("Korisnik sa" + email + "adresom je već registriran");
          var credential = error.credential;
          alert(credential);
        });
    },
  },
};
</script>

<style scoped>
.btn-google {
  color: #545454;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #ddd;
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
}
.fb {
  background-color: #3b5998;
  color: white;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}
</style>
