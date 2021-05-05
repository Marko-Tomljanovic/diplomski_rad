<template>
  <div class="home">
    <div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
       <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Tražiš izvođače ?</label>
    <input v-model="pojam" type="email" class="form-control" id="search" aria-describedby="SearchCon">
  </div>
  <button type="button" class="btn btn-primary">Pretraži</button>  
</form>
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>


 <br><br> Provjera:  {{ pojam }}
  </div>
</template>


<script>
export default {
  name: 'home',
  data(){
    return{
      pojam:''
    }
  }
}
</script>
