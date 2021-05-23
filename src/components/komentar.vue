<template>
  <div class="card mt-3">
    <h6 class="mb-1 mt-3 px-3">
      {{ naslov }}
      <p class="float-right text-secondary">ocjena: {{ ocjena }}</p>
    </h6>
    <div class="col-sm-9 mb-3 text-secondary">{{ komentar }}</div>
  </div>
</template>

<script>
export default {
  props: ["naslov", "komentar", "ocjena"],
};
</script>
