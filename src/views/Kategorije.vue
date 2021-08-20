<template>
  <div class="container">
    <div class="row">
      <div class="ma">
        <b-link to="/Radovi">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/kategorije%2Fradovi.jpg?alt=media&token=286c55b3-5194-4a75-9084-1a16e04a51e7"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div class="text">Radovi</div>
          </div></b-link
        >
      </div>

      <div class="ma">
        <b-link to="/Izvodaci">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/diplomski-rad-68b67.appspot.com/o/kategorije%2Fizvodaci.jpg?alt=media&token=6e0c74e0-4afe-4b79-b6d5-ea8c3b2c49a1"
            alt="Avatar"
            class="image"
          />
          <div class="overlay">
            <div class="text">Izvođači</div>
          </div></b-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.ma {
  position: relative;
  width: auto;
  box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: 13px;
}

.image {
  display: block;
  width: 550px;
  height: 500px;
}

.overlay {
  position: absolute;
  top: 30%; /* vrati na nulu */
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%; /* vrati na 100% */
  width: 100%;
  opacity: 0.75;
  transition: 0.65s ease;
  background-color: #2980b9;
}
.ma:hover .overlay {
  opacity: 0;
}
.hide:hover {
  display: none;
}
.text {
  color: white;
  font-size: 21px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
