<template>
  <v-container>
    <v-card>
      <form @submit.prevent="checkform">
        <v-card-title>Sign In</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Enter E-mail"
              prepend-icon="mdi-email"
            />
            <span>{{ mailerror }}</span>
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              :rules="passwordRules"
              v-model="password"
              label="Enter password"
              prepend-icon="mdi-lock"
            >
              <template v-slot:append>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      color="primary"
                      dark
                      v-on="on"
                      @click="changepwdtype()"
                      >{{ eyestatus }}</v-icon
                    >
                  </template>
                  <span
                    >Attention your password is visible</span
                  >
                </v-tooltip>
              </template>
            </v-text-field>
            {{ passerror }}
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="info">Login</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import { server } from "../helper";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      mailerror: "",
      passerror: "",
      eyestatus: "mdi-eye-off",
      showPassword: false,
      emailRules: [
        (v) => /.+@.+/.test(v) || "The e-mail must contain @",
      ],
      passwordRules: [
        (v) =>
          v.length > 6 || "The password must be more than 6 characters"
      ]
    };
  },
  methods: {
    changepwdtype() {
      if (this.showPassword == false && this.eyestatus == "mdi-eye-off") {
        this.showPassword = true;
        this.eyestatus = "mdi-eye";
      } else {
        this.showPassword = false;
        this.eyestatus = "mdi-eye-off";
      }
    },
    validEmail(email) {
      let mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mail.test(email);
    },
    checkform() {
      if (this.email == null || this.email == "") {
        this.mailerror = "Please enter your e-mail";
      } else if (!this.validEmail(this.email)) {
        this.errormail = "You must enter a valid e-mail";
      } else if (
        this.password == null ||
        this.password == "" ||
        this.password.length < 6
      ) {
        this.passerror =
          "The password must be at least 6 characters";
      } else {
        let form = {
          email: this.email,
          password: this.password
        };
        this.signin(form);
      }
    },
    signin(form) {
      let body = JSON.stringify(form);
      this.axios
        .post(`${server.baseURL}/user/login`, body, {
          headers: {
            "Content-type": "application/json"
          },
        })
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_Profil", response.data.data);
            this.$store.commit("AUTH", true);
            this.$router.push("/dashboard");
          } else {
            throw new Error(
              "Error during the creation of you account"
            );
          }
        })
        .catch((error) => {
          this.$store.commit("ERROR", error.message);
        });
    }
  }
};
</script>

<style></style>