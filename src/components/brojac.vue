<template>
  <div>
    <section
      class="wow fadeIn animated"
      style="visibility: visible; animation-name: fadeIn; color:#b96329"
    >
      <div class="container">
        <div class="row">
          <!-- counter -->
          <div
            class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
            data-wow-duration="300ms"
            style="visibility: visible; animation-duration: 300ms; animation-name: fadeInUp;"
          >
            <i class="fa fa-address-card medium-icon"></i>
            <span id="anim-number-pizza" class="counter-number"></span>
            <span
              class="timer counter alt-font appear"
              data-to="980"
              data-speed="7000"
              >{{ brojIzvodaca }}</span
            >
            <p class="counter-title">Izvođača radova</p>
          </div>
          <!-- end counter -->
          <!-- counter -->
          <div
            class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
            data-wow-duration="300ms"
            style="visibility: visible; animation-duration: 300ms; animation-name: fadeInUp;"
          >
            <i class="fa fa-home medium-icon"></i>
            <span id="anim-number-pizza" class="counter-number"></span>
            <span
              class="timer counter alt-font appear"
              data-to="980"
              data-speed="7000"
              >{{ brojGradova }}</span
            >
            <p class="counter-title">Različitih gradova</p>
          </div>
          <!-- end counter -->
          <!-- counter -->
          <div
            class="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated"
            data-wow-duration="600ms"
            style="visibility: visible; animation-duration: 600ms; animation-name: fadeInUp;"
          >
            <i class="fa fa-heart medium-icon"></i>
            <span
              class="timer counter alt-font appear"
              data-to="980"
              data-speed="7000"
              >{{ brojZadovoljnihKomentara }}</span
            >
            <span class="counter-title">Korisnika se sviđa stranica</span>
          </div>
          <!-- end counter -->
          <!-- counter -->
          <div
            class="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated"
            data-wow-duration="900ms"
            style="visibility: visible; animation-duration: 900ms; animation-name: fadeInUp;"
          >
            <i class="fa fa-comments medium-icon"></i>
            <span
              class="timer counter alt-font appear"
              data-to="810"
              data-speed="7000"
              >{{ brojKomentara }}</span
            >
            <span class="counter-title">Ukupno komentara</span>
          </div>
          <!-- end counter -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: [
    "brojIzvodaca",
    "brojKomentara",
    "brojZadovoljnihKomentara",
    "brojGradova",
  ],
};
</script>

<style scoped>
.counter-section i {
  display: block;
  margin: 0 0 10px;
}

.counter-section span.counter {
  font-size: 45px;
  color: #b96329;
  line-height: 60px;
  display: block;
  font-family: "Oswald", sans-serif;
  letter-spacing: 2px;
}

.counter-title {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.counter-icon {
  top: 25px;
  position: relative;
}

.counter-style2 .counter-title {
  letter-spacing: 0.55px;
  float: left;
}

.counter-style2 span.counter {
  letter-spacing: 0.55px;
  float: left;
  margin-right: 10px;
}

.counter-style2 i {
  float: right;
  line-height: 26px;
  margin: 0 10px 0 0;
}

.counter-subheadline span {
  float: right;
}

.medium-icon {
  font-size: 50px !important;
  margin-bottom: 15px !important;
}

.container {
  margin-top: 65px;
}
</style>
