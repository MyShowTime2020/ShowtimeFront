<template>
  <v-app>
    <Navbar />


    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Navbar from "./views/layout/Navbar"

export default {
  name: "App",

  components: {
    HelloWorld,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
