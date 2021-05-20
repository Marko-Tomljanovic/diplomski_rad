<template>
  <div class="ma">
    <b-link :to="adresa">
      <img :src="src" alt="Avatar" class="image" />
      <div class="overlay">
        <div class="text">{{ radovi }}</div>
      </div></b-link
    >
  </div>
</template>

<script>
export default {
  props: ["src", "radovi", "adresa"],
};
</script>

<style scoped>
.ma {
  position: relative;
  width: 150px;
  margin-left: 12px;
  margin-top: 15px;
}

.image {
  display: block;
  width: 150px;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
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
