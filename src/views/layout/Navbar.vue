<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="grey darken-4"
      dark
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-truck</v-icon>&nbsp;SHOWTIME</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />

      <router-link
        style="text-decoration: none"
        class="nav-item nav-link"
        :to="{ name: 'SignIn' }"
      >
        <v-btn icon> <v-icon>mdi-account-circle</v-icon></v-btn>
      </router-link>

      <router-link
        style="text-decoration: none"
        class="nav-item nav-link"
        :to="{ name: 'SignUp' }"
      >
        <v-btn icon> <v-icon>mdi-account-plus</v-icon></v-btn>
      </router-link>

      <v-btn v-on="on" icon>
        <v-badge content="2" value="2" color="orange" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" icon
        ><router-link :to="{ name: 'Cart' }" class="white--text">
          <v-badge>
            <v-icon>mdi-cart</v-icon>
          </v-badge></router-link
        >
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <a href="/" class="v-btn">
          <span>Home</span>
        </a>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Réservation</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item v-for="(item, index) in items" :key="index"
              ><router-link
                class="orange--text"
                style="text-decoration: none"
                :to="{ name: 'Shop' }"
                >{{ item.title }}</router-link
              >
            </v-list-item>
          </v-card>
        </v-menu>
        <a href="/product" class="v-btn">
          <span>Product</span>
        </a>
        <v-btn>
          <span>Contact</span>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
    <router-view />
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Spectacles" }
        /*   { title: "" },
        { title: "" },
        { title: "" },
        { title: "" }, */
      ],
      activeBtn: 1
    };
  },
  computed: {
    cartcount() {
      return this.$store.state.cart_count;
    }
  },
  methods: {
    go_to_cart() {
      this.$router.push("/cart");
    }
  }
};
</script>
