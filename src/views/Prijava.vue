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
  </div>
  <div class="mb-3 form-check">
    <input
    type="checkbox" 
    class="form-check-input" 
    id="exampleCheck1"
    >
    <label class="form-check-label" for="exampleCheck1">Zapamti me</label>
  </div>
  <button 
  type="button" 
  @click="prijava"
  class="btn btn-primary"
  >Prijavi se</button>
</form>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>
</template>



<script>
import {firebase} from "@/firebase"

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
      });
      }
    }
  }
</script>


<style>

</style>