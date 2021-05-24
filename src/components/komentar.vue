<template>
  <div class="card mt-3">
    <h6 class="mb-0 mt-3 px-3">
      {{ naslov }}

      <p class="float-right text-secondary">ocjena: {{ ocjena }}</p>
    </h6>
    <div class="col-sm-12 mb-0 text-secondary">{{ komentar }}</div>
    <p class="text-right text-muted mr-3 mb-0">
      <small>{{ vrijeme }}</small>
    </p>
  </div>
</template>

<script>
export default {
  props: ["naslov", "komentar", "ocjena", "vrijeme"],
};
</script>
