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
  })
};
</script>

