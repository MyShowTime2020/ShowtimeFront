<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="success"
      dark
    >
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none"
          ><v-icon>mdi-truck</v-icon>&nbsp;Shop</a
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

      <router-link class="nav-item nav-link" :to="{ name: 'Login' }">
        <v-btn icon> <v-icon>mdi-account-circle</v-icon></v-btn>
      </router-link>

      <v-btn v-on="on" icon>
        <v-badge content="" value="" color="green" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn v-on="on" href="/cart" icon>
        <v-badge content="" value="" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
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
              <span>Shop</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <router-link
              :to="{ name: 'Shop' }"
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-card>
        </v-menu>
        <a href="/product" class="v-btn">
          <span>Product</span>
        </a>
        <v-btn href="/blog">
          <span>Blog</span>
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
        { title: "Concert" },
        { title: "" },
        { title: "" },
        { title: "" },
        { title: "" },
      ],
      activeBtn: 1,
    };
  },
};
</script>