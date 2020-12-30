import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Shop from "../components/Shop.vue";
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/product/:id",
    component: Product,
    name: "Product"
  },
  {
    path: "/cart",
    component: Cart,
    name: "Cart"
  }
];

const router = new VueRouter({ routes });

export default router;
