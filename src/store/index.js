import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    products: [],
    cart_count: 0,
    cart: [],
    profil: "",
    categories: [],
    message: "",
    created: false,
    errored: false,
    authenticated: false
  },
  getters: {
    SET_Products(state, products) {
      state.products = products;
    },

    UPDATE_Products(state, products) {
      state.products.push(products);
    }
  },
  mutations: {
    SET_Profil(state, profil) {
      state.profil = profil;
    },
    AUTH(state, auth) {
      state.authenticated = auth;
    },
    SUCCES(state, message) {
      state.message = message;
      state.created = true;
    },
    ERROR(state, message) {
      state.message = message;
      state.errored = true;
    },
    LOGOUT(state) {
      state.profil = "";
      state.authenticated = false;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get(`http://localhost:3000/products`, {}).then((response) => {
        commit("SET_Products", response.data);
      });
    },
    changeProducts() {
      axios.post("http://localhost:3000/products", {
        body: JSON.stringify(
          { title: "foo", body: "bar", userId: 1 }
        )
      }).then((response) => {
        this.commit("UPDATE_Products", response.data);
      });
    }
  },
  modules: {}
});
