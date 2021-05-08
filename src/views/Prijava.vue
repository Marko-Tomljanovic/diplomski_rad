<template>
  <div class="container">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col-6">
      <form>
  <div class="mb-3">Prijavi se <br><br>
    <label for="exampleInputEmail1" class="form-label">Email adresa</label>
    <input 
    v-model="korisnickoIme"
    type="email" 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Lozinka</label>
    <input
    v-model="lozinka"
    type="password" 
    class="form-control" 
    id="exampleInputPassword1"
    >
  </div><br>
  <button 
  type="button" 
  @click="prijava()"
  class="btn btn-primary"
  >Prijava</button><br><br>
  <button 
  type="button" 
  @click="prijavaGoogle()"
  class="btn btn-primary"
  >Prijava preko Google</button><br><br>
   <button 
  type="button" 
  @click="prijavaFacebook()"
  class="btn btn-primary"
  >Prijava Facebook</button>
</form>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>
</template>



<script>
import {firebase} from "@/firebase"
// import store from "@/store"

export default {
  name:'Prijava',
  data(){
    return{
      korisnickoIme:'',
      lozinka:''
    }
  },
  methods:{
    prijava(){
      firebase.auth().signInWithEmailAndPassword(this.korisnickoIme, this.lozinka)
      .then((result) => {
        console.log('Uspješna prijava', result);
        this.$router.replace({ name: 'Home' });
      })
      .catch(function(e){
          console.error('Greška',e);
          alert(e);
      });
      },

//     prijavaGoogle(){
//     // Using a redirect.
// firebase.auth()
//     .getRedirectResult()
//     .then((result) => {
//   if (result.credential) {
//     // This gives you a Google Access Token.
//       store.token = result.credential.accessToken;
//       this.$router.replace({ name: "/" });
//     }
//       store.trenutniKorisnik = result.user;
//       this.$router.replace({ name: "/" });
// });
// // Start a sign in process for an unauthenticated user.
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('profile');
//     provider.addScope('email');
//     firebase.auth().signInWithRedirect(provider);
//   },

   prijavaGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      console.log(token);
      var user = result.user;
      console.log(user);
      this.$router.replace('/');
 
}).catch((error) => {
  var errorCode = error.code;
  var errorMassage = error.errorMassage;
  console.log(errorMassage + errorCode);
  var email = error.email;
  alert(email);
  var credential = error.credential;
  alert(credential);
})
  },
  
  prijavaFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      console.log(token);
      var user = result.user;
      console.log(user);
      this.$router.replace('/');
 
}).catch((error) => {
  var errorCode = error.code;
  var errorMassage = error.errorMassage;
  console.log(errorMassage + errorCode);
  var email = error.email;
  alert(email);
  var credential = error.credential;
  alert(credential);
})
  }
  }
}
</script>