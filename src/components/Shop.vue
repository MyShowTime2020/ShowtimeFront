<template>
  <v-app>
    <v-container class="pt-12"> </v-container>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#fff'"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                append-icon="mdi-star"
                label="4 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="3 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="2 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="1 & above"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              v-for="product in products"
              :key="product.id"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="400px"
                    :src="product.img"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%"
                      >
                        <router-link
                          :to="{ name: 'Product', params: { id: product.id } }"
                        >
                          <v-btn v-if="hover" outlined>VIEW</v-btn>
                        </router-link>
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <router-link
                        class="black--text"
                        :to="{ name: 'Product', params: { id: product.id } }"
                      >
                        {{ product.title }}
                      </router-link>
                    </div>
                    <div>
                      <strong class="red--text"> {{ product.price }} €</strong>
                    </div>
                    <div>
                      <div>
                        <strong class="orange--text">{{
                          product.description
                        }}</strong
                        ><br />
                        {{ product.date_posted }}
                      </div>
                      <br />
                      <v-btn
                        @click="add_cart(product)"
                        class="btn-cart"
                        elevation="2"
                        rounded
                        small
                        color="#b4975a"
                      >
                        <i class="fas fa-shopping-cart"
                          ><strong>RESERVATION</strong></i
                        >
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    message: "SHOP",
    products: null,
    loading: true,
    errored: false,
    items: [
      {
        id: 1,
        name: "Category",
        children: [
          { id: 2, name: "Humour" },
          { id: 3, name: "Jazz" },
          { id: 4, name: "Pop" },
          { id: 5, name: "Rock" }
        ]
      }
    ]
  }),
  mounted() {
    this.$axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.products = response.data;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    add_cart(product) {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(product);
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
