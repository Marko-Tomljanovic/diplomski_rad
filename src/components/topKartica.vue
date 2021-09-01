<template>
  <b-link :to="profil">
    <b-card no-body class="overflow-hidden mt-2 mb-2 linija">
      <b-row no-gutters>
        <b-col md="3">
          <div class="hover hover-5">
            <b-card-img :src="src" :alt="zupanija"></b-card-img>
          </div>
        </b-col>
        <b-col>
          <b-card-body :title="title">
            <b-card-text>
              <div class="col-10 mx-auto" style="margin-top: 25px">
                <b-form-rating
                  style="background-color: #f0f0f0"
                  id="rating-5"
                  v-model="rating"
                  stars="5"
                  readonly
                  color="#e2b900"
                  no-border
                  size="lg"
                ></b-form-rating>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-link>
</template>

<script>
export default {
  props: ["profil", "src", "title", "zupanija", "rating"],
  data() {
    return {
      max: 5,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.linija::after {
  content: "";
  width: 100%;
  height: 10px;
  background: #d6b72a;
  position: absolute;
  bottom: -60px;
  left: 0;
  display: block;
  transition: all 0.25s;
  opacity: 0.65;
}
.linija:hover::after {
  bottom: 0px;
}
.card {
  background: #f0f0f0;
}
</style>
