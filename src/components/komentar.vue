<template>
  <div class="card mt-3">
    <h6 style="margin-left:27px; margin-top: 18px" class="mb-0">
      {{ naslov }}
      <b-form-rating
        style="margin-top:-8px"
        class="w-25 h-25 mr-5 float-right"
        id="rating-5"
        show-value
        v-model="ocjena"
        stars="5"
        readonly
        color="#e2b900"
        no-border
        size="lg"
      ></b-form-rating>
      <b-form-rating
        icon-empty="cash"
        icon-full="capslock-fill"
        style="margin-top:-4px;margin-right:10px"
        class="w-25 h-25 mr-4 float-right"
        id="rating-5"
        show-value
        readonly
        v-model="ocjenaCijene"
        stars="3"
        variant="success"
        no-border
        size="lg"
      ></b-form-rating>
    </h6>
    <div
      style="margin-left:23px; text-align: justify;"
      class="mb-0 col-11  text-secondary"
    >
      {{ komentar }}
    </div>
    <p class="text-right text-muted mr-3 mb-1">
      <small>{{ vrijeme }}</small>
    </p>
  </div>
</template>

<script>
export default {
  props: ["naslov", "komentar", "ocjena", "ocjenaCijene", "vrijeme"],
};
</script>
