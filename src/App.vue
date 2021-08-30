<template>
  <div id="app">
    <div>
      <b-navbar
        class="bojaNavibar"
        toggleable="lg"
        type="dark"
        style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      position: fixed; width: 100%; z-index:10;"
      >
        <b-navbar-brand
          ><a href="/">
            <img
              src="@/assets/logo.png"
              alt="logo"
              style="width:150px; border-bottom:none"/></a
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav style="margin-left:auto">
            <b-nav-item class="block" to="/">
              <b-icon class="mr-2" style="color:#b96329" icon="house"></b-icon
              >POČETNA</b-nav-item
            >
            <b-nav-item class="block" to="/Kategorije"
              ><b-icon
                class="mr-2"
                style="color:#b96329"
                icon="bookmarks"
              ></b-icon
              >KATEGORIJE</b-nav-item
            >
            <b-nav-item class="block" to="/Top5"
              ><b-icon class="mr-2" style="color:#b96329" icon="star"></b-icon
              >TOP 5</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" right>
            <!-- Using 'button-content' slot -->
            <b-nav-item
              v-if="!store.trenutniKorisnik"
              to="/Prijava"
              class="block"
              ><b-icon
                class="mr-1"
                style="color:#b96329"
                icon="chevron-bar-right"
              ></b-icon
              >Prijava</b-nav-item
            >

            <div @mouseover="onOver" @mouseleave="onLeave">
              <b-nav-item-dropdown
                v-if="store.trenutniKorisnik"
                ref="dropdown"
                right
                no-caret
                class="mr-4 mt-2"
              >
                <template slot="button-content">
                  <i
                    style="color:#2677a7;"
                    class="fa fa-user-circle-o fa-2x"
                    aria-hidden="true"
                  ></i>
                </template>
                <b-dropdown-item
                  :to="`/profilKorisnika/${store.trenutniKorisnik}`"
                  ><i class="fa fa-user mr-2"></i
                  >{{ store.trenutniKorisnik }}</b-dropdown-item
                >
                <b-dropdown-item to="/NoviIzvodac"
                  ><i class="fa fa-plus-circle  mr-2"></i>Nova
                  firma</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item @click.prevent="odjava"
                  ><i class="fa fa-sign-out mr-2"></i>Odjava</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <chatbot v-if="!store.trenutniKorisnik"></chatbot>

    <br /><br /><br /><br /><br /><br />
    <transition name="router-anim" enter-active-class="animated fadeIn">
      <router-view
    /></transition>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { firebase } from "@/firebase";
import store from "@/store";
import chatbot from "@/components/chatbot.vue";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("**********", user.email);
    store.trenutniKorisnik = user.email;
  } else {
    console.log("No user");
    store.trenutniKorisnik = null;
  }
});

export default {
  name: "app",
  data() {
    return {
      showProducts: false,
      store,
    };
  },
  components: {
    Footer,
    chatbot,
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Prijava" });
        });
    },
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

.navibarM {
  position: fixed;
  top: 0;
  width: 100%;
}
.bojaNavibar {
  background: linear-gradient(120deg, white, 50%, #e0e0e0);
}
body {
  background-color: #ffffff;
}
.mojstil {
  color: #ffffff;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode",
    "Lucida Sans", Tahoma, sans-serif;
}
.router-link-exact-active {
  /* background-color: rgb(147, 172, 240); */
  border-bottom: 3.5px solid #b96329;
  margin-bottom: -3.5px;
}
.block:hover {
  /* border-bottom: 1px dotted rgb(126, 126, 230); */
  /* border-style: none none dotted none; */
  margin-bottom: -2px;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
}
.nav-link {
  color: #2677a7 !important;
  font-size: 19px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  opacity: 0.85;
}
.page {
  position: fixed;
  width: inherit;
}
@keyframes fadeInOpacity {
  0% {
    opacity: 0.55;
  }
  100% {
    opacity: 1;
  }
}
@media only screen and (max-width: 650px) {
  .collapse {
    background-color: hsla(231, 29%, 86%, 0.89);
    border-radius: 16px;
  }
}
</style>
