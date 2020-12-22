<template>
  <v-app>
    <v-container>
      <div class="row">
        <div class="col-md-4 col-sm-5 col-xs-12">
          <v-img
            :src="product.img"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="500px"
          ></v-img>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <h2 class="display-1 mb-0 black--text">{{ product.title }}</h2>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                <strong class="red--text">{{ product.price }} €</strong>
              </p>
              <v-spacer></v-spacer>
              <v-rating
                v-model="rating"
                class=""
                background-color="warning lighten-3"
                color="warning"
                dense
              ></v-rating>
              <span class="body-2 font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{ product.description }}
            </p>
                 <p class="orange--text subtitle-1 font-weight-thin">
             <strong>{{ product.date_posted }}</strong>
            </p>
            <br />
            <p>
              {{ product.description }}
            </p>

            <v-btn
              @click="add_cart(product)"
              class="btn-cart"
              elevation="2"
              rounded
              small
              color="#b4975a"
            >
              <i class="fas fa-shopping-cart"><strong>RESERVER</strong></i>
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
    <v-container>
      <v-card-text class="pa-0 pt-4" tile outlined>
        <p class="subtitle-1 font-weight-light pt-3 text-center">
          YOU MIGHT ALSO LIKE
        </p>
        <v-divider></v-divider>
        <div class="row text-center">
          <div class="col-md-2 col-sm-4 col-xs-12 text-center">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="product.img"
                >
                  <v-card-title>{{ product.title }} </v-card-title>
                </v-img>

                <v-card-text class="text--primary text-center">
                  <div>{{ product.description }}</div>
                  <div>{{ product.date_posted }}</div>
                </v-card-text>

                <div class="text-center">
                  <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12 text-center">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="product.img"
                >
                  <v-card-title>{{ product.title }} </v-card-title>
                </v-img>

                <v-card-text class="text--primary text-center">
                  <div>{{ product.description }}</div>
                  <div>{{ product.date_posted }}</div>
                </v-card-text>

                <div class="text-center">
                  <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12 text-center">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="product.img"
                >
                  <v-card-title>{{ product.title }} </v-card-title>
                </v-img>

                <v-card-text class="text--primary text-center">
                  <div>{{ product.description }}</div>
                  <div>{{ product.date_posted }}</div>
                </v-card-text>

                <div class="text-center">
                  <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12 text-center">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="product.img"
                >
                  <v-card-title>{{ product.title }} </v-card-title>
                </v-img>

                <v-card-text class="text--primary text-center">
                  <div>{{ product.description }}</div>
                  <div>{{ product.date_posted }}</div>
                </v-card-text>

                <div class="text-center">
                  <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12 text-center">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="product.img"
                >
                  <v-card-title>{{ product.title }} </v-card-title>
                </v-img>

                <v-card-text class="text--primary text-center">
                  <div>{{ product.description }}</div>
                  <div>{{ product.date_posted }}</div>
                </v-card-text>

                <div class="text-center">
                  <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-12 text-center">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card :elevation="hover ? 16 : 2">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="product.img"
                >
                  <v-card-title>{{ product.title }} </v-card-title>
                </v-img>

                <v-card-text class="text--primary text-center">
                  <div>{{ product.description }}</div>
                  <div>{{ product.date_posted }}</div>
                </v-card-text>

                <div class="text-center">
                  <v-btn class="ma-2" outlined color="info"> Explore </v-btn>
                </div>
              </v-card>
            </v-hover>
          </div>
        </div>
      </v-card-text>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    product: [],
    rating: 4.5,
  }),
  methods: {
    add_cart() {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(this.product);
      console.log(this.$store.state.cart);
    },
  },
  mounted() {
    {
      this.$axios
        .get(`http://localhost:3000/products/${this.$route.params.id}`)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
    this.$axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style></style>