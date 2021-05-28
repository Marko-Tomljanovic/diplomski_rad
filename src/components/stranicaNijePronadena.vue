<template>
  <div class="container"><h5 class="col-2 mx-auto">404 error</h5></div>
</template>

<script>
export default {
  name: "stranicaNijePronadena",
  mounted() {
    this.$swal
      .fire({
        icon: "error",
        title: "404 error",
        text: "Stranica nije pronađena! Vratite se na početnu stranicu.",
        footer:
          "<a href=https://en.wikipedia.org/wiki/HTTP_404>Što je 404 erorr</a>",
        allowOutsideClick: false,
        confirmButtonText: "Povratak",
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.replace("/");
        }
      });
  },
};
</script>
