<template>
  <v-app>
    <Navbar></Navbar>
    <Footer/>
    </v-app>
</template>

<script>

import Navbar from "./views/layout/Navbar"
import Footer from "./views/layout/Footer"

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),

  mounted() {
    if (localStorage.getItem("$store.state.cart")) {
      try {
        this.$store.state.cart = JSON.parse(localStorage.getItem("$store.state.cart"));
      } catch (e) {
        localStorage.removeItem("$store.state.cart");
      }
    }
    if (localStorage.getItem("$store.state.cart_count")) {
      try {
        this.$store.state.cart_count = JSON.parse(localStorage.getItem("$store.state.cart_count"));
      } catch (e) {
        localStorage.removeItem("$state.state.cart_count");
      }
    }
  }
};
</script>

