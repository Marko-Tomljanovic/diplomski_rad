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
              @keyup.enter="registracija"
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
              :type="vidiLozinku"
              @keyup.enter="registracija"
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
              :type="vidiLozinku"
              @keyup.enter="registracija"
              required
              class="input-text js-input"
              id="exampleInputPassword2"
            />
          </div>
              <div class="mb-3 form-check">
            <input
              v-model="vidiPass"
              type="checkbox"
              class="form-check-input"
              id="Check2"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Prikaži lozinku
            </label>
          </div>
          <div class="mb-4 form-check">
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
import store from "@/store";

export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      lozinka: "",
      plozinka: "",
      prihvati: false,
      vidiPass: false,
      store
    };
  },
  methods: {
    registracija() {
      if (this.lozinka != this.plozinka) {
        this.$swal.fire({
          icon: "warning",
          title: "Lozinke nisu jednake",
        });
      } else if (this.prihvati == false) {
         this.$swal.fire({
          icon: "warning",
          title: "Potrebno je prihvatiti uvijete korištenja",
        });
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.lozinka)
          .then(() => {
             firebase
              .auth()
              .currentUser.sendEmailVerification()
          }).then(() => {
            firebase
        .auth()
        .signOut()
          }).then(() => {
          this.alertReg();
           })
          .catch(function(error) {
            console.error("Došlo je do greške", error);
            alert(error);
          });
      }
    },

    alertReg(){
        this.$swal.fire({
        title: 'Verificirajte Email i krenite sa ocjenjivanjem! ',
        showDenyButton: true,
        confirmButtonText: 'Verificiran Email',
        denyButtonText: `Kasnije`,
      }).then((result) => {
        if (result.isConfirmed) {
        this.prijava();
        } else if (result.isDenied) {
          console.log("Email nije verificiran!");
        }
      })
    },

     prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.lozinka)
        .then((result) => {
          if (firebase.auth().currentUser.emailVerified) {
          console.log("Uspješna prijava", result);
          this.$router.replace({ name: "Home" });
          this.uspjesnaPrijava();
          } else {
            firebase
              .auth()
              .signOut()
              .then(() => {
               this.alertReg();
              });
          }
        }).catch((e) => {
          console.error("Greška", e);
          console.log(e);
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
          this.uspjesnaRegistracija();
        })
        .catch((error) => {
          var errorCode = error.code;
          alert(errorCode);
          var errorMassage = error.errorMassage;
          console.log(errorMassage);
          var email = error.email;
          console.log(email);
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
          this.uspjesnaRegistracija();
        })
        .catch((error) => {
          var errorCode = error.code;
          alert(errorCode);
          var errorMassage = error.errorMassage;
          console.log(errorMassage);
          var email = error.email;
          console.log(email);
          var credential = error.credential;
          console.log(credential);
        });
    },
     uspjesnaRegistracija(){
         this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Uspješno ste prijavljeni!",
              showConfirmButton: false,
              timer: 1820,
            });
    },
    uspjesnaPrijava(){
      this.$swal.fire({
           position: "top-end",
           icon: "success",
           title: "Uspješno ste prijavljeni!",
           showConfirmButton: false,
           timer: 1820,
         });
 }
  },
    computed: {
    vidiLozinku() {
      return this.store.funkPass(this.vidiPass)
    },
  },
};
</script>

<style src="../assets/button.css" scoped>
