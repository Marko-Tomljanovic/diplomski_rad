<template>
  <section class="py-4 row">
    <div class="container">
      <blockquote
        class="blockquote blockquote-custom bg-white p-5 rounded shadow-lg border"
        style="min-height: 265px;"
      >
        <div class="blockquote-custom-icon bg-info shadow-sm">
          <i class="fa fa-quote-left text-white"></i>
        </div>
        <b-form-rating
          icon-empty="heart"
          icon-full="heart-fill"
          style="margin-top:-10px"
          id="rating-5"
          readonly
          v-model="ocjena"
          stars="5"
          variant="danger"
          no-border
          size="lg"
        ></b-form-rating>
        <p class="mb-0 mt-2 font-italic">
          {{ textZadovoljstvaKorisnika }}
        </p>
        <footer class="blockquote-footer pt-4 mt-4 border-top">
          {{ vrijemeObjaveZadovoljstva }}
        </footer>
      </blockquote>
    </div>
  </section>
</template>

<script>
export default {
  name: "zadovoljstvoKorisnika",
  props: ["textZadovoljstvaKorisnika", "vrijemeObjaveZadovoljstva", "ocjena"],
};
</script>

<style scoped>
.blockquote-custom {
  position: relative;
  font-size: 1.1rem;
}

.blockquote-custom-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  left: 50px;
}
</style>
