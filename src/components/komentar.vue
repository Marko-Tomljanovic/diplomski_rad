<template>
  <div class="card mt-3">
    <h6 style="margin-left:27px; margin-top: 18px" class="mb-0">
      {{ naslov }}

      <p class="float-right mr-3 text-secondary">ocjena: {{ ocjena }}</p>
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
  props: ["naslov", "komentar", "ocjena", "vrijeme"],
};
</script>
