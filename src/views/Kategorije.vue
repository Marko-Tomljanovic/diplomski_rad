<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <b-link class="ma" to="/Radovi">
          <b-img
            src="https://picsum.photos/600/500"
            fluid
            alt="Kategrije radova"
          ></b-img>
          <div class="overlay">
            <div class="text">Radovi</div>
          </div>
        </b-link>
      </div>
      <div class="col-sm">
        <b-link class="ma" to="#">
          <b-img
            src="https://picsum.photos/600/500"
            fluid
            alt="Kategrije izvođača"
          ></b-img>
          <div class="overlay">
            <div class="text">Izvođači</div>
          </div>
        </b-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 13px;
  right: 0;
  height: 100%;
  width: 95.5%;
  opacity: 0;
  transition: 0.6s ease;
  background-color: #5769bb;
}

.ma:hover .overlay {
  opacity: 0.8;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
