<template>
  <div class="container">
  <div class="row">
    <div class="col">
     
    </div>
    <div class="col-6">
      <form>
  <div class="mb-3">Registriraj se!<br><br>
    <label for="exampleInputEmail1" class="form-label">Email adresa</label>
    <input 
    v-model="email" 
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
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Ponovljena lozinka</label>
    <input 
    v-model="plozinka" 
    type="password" 
    class="form-control" 
    id="exampleInputPassword2"
    >
  </div>
  <div class="mb-3 form-check">
    <input
    v-model="prihvati"
     type="checkbox" 
     class="form-check-input" 
     id="Check1"
     >
    <label 
      class="form-check-label" 
      for="exampleCheck1"
      >Prihvaćam uvjete korištenja
    </label>
  </div>
  <button 
  @click="registracija" 
  type="button" 
  class="btn btn-primary"
  >Registriraj se!</button>
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
  name:"Registracija",
data(){
  return{
    email:'',
    lozinka:'',
    plozinka:'',
    prihvati: false,
  };
},
methods: {
  registracija(){
     if(this.prihvati == true){
firebase
    .auth()
    .createUserWithEmailAndPassword(this.email, this.lozinka)
    .then(() => {
        this.$router.replace({ name: 'Home' });

        console.log('Uspiješna registracija');
      }).catch(function(error){
        console.error("Došlo je do greške", error);
      });
    }else{
      alert('Potrebno je prihvatiti uvijete korištenja')
    }
    
  }
}
}
</script>



<style>

</style>