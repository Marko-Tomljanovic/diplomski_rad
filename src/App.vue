<template>
  <div id="app">
    <div>
      <b-navbar
        class="bojaNavibar"
        toggleable="lg"
        type="dark"
        style="height:110px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      position: fixed; width: 100%; z-index:10;"
      >
        <b-navbar-brand>
          <img src="@/assets/logo.png" alt="logo" style="width:110px"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" center>
            <b-nav-item class="block" to="/">Početna</b-nav-item>
            <b-nav-item class="block" to="/Kategorije">Kategorije</b-nav-item>
            <b-nav-item class="block" to="/Top5">Top 5</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" right>
            <!-- Using 'button-content' slot -->
            <b-nav-item
              v-if="!store.trenutniKorisnik"
              to="/Prijava"
              class="block"
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
                <b-dropdown-item to="#"
                  ><i class="fa fa-user mr-2"></i>Profil</b-dropdown-item
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
    <br /><br /><br /><br /><br /><br />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { firebase } from "@/firebase";
import store from "@/store";

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
  border-bottom: 2px solid rgb(126, 126, 230);
  margin-bottom: -2px;
}
.block:hover {
  border-bottom: 1px dotted rgb(126, 126, 230);
  /* border-style: none none dotted none; */
  margin-bottom: -2px;
}
.nav-link {
  color: rgb(0, 0, 0) !important;
  font-size: 21px;
  font-weight: 450;
}
</style>
