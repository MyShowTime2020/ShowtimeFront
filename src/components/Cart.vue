<template>
  <v-app>
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">
        VOS RESERVATIONS
      </p>
      <v-container style="padding-left: 20rem;">
        <v-col :cols="12" md="9" sm="12">
          <v-simple-table>
            <template>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Item</th>
                      <th class="text-left">Name/Description</th>
                      <th class="text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in cart" :key="product.id">
                      <v-list-item-avatar>
                        <v-img
                          :src="product.img"
                          :alt="`image de ${product.title}`"
                        ></v-img>
                      </v-list-item-avatar>
                      <td>
                        <span class="black--text"
                          >{{ product.title }} <br
                        /></span>
                        <span class="orange--text">
                          {{ product.description }}
                        </span>
                      </td>
                      <td>
                        <span class="red--text">{{ product.price }}€</span>
                      </td>
                      <td>
                        <btn style="cursor: pointer" @click="deleteOne()"
                          >x
                        </btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-simple-table>
        </v-col>

        <v-col
          cols="12"
          md="9"
          sm="12"
          class="grey lighten-2"
          style="align-text: center"
        >
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td class="text-left red--text" style="width: 0px">
                    <strong>TOTAL:</strong>
                  </td>
                  <td class="text-right" style="width: 50px">
                    <b>{{ totalPrice }} €</b>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="pt-5 text-center">
            <v-btn color="error" @click="deleteAll()">Delete All</v-btn>
            <br />
            <v-btn class="primary white--text mt-5" outlined
              >PROCEED TO PAY</v-btn
            >
          </div>
        </v-col>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    deleteOne() {
      this.$store.state.cart_count -= 1;
      this.$store.state.cart.pop(this.product);
    },
    deleteAll() {
      this.$store.state.cart.splice(this.products);
      this.$store.state.cart_count = 0;
    },
  },
  computed: {
    cart: function () {
      return this.$store.state.cart;
    },

    totalPrice() {
      return this.$store.state.cart.reduce((acc, product) => {
        acc += product.price;
        return acc;
      }, 0);
    },
  },
};
</script>

<style></style>
