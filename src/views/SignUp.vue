<template>
  <v-container>
    <v-card>
      <form @submit.prevent="signup">
        <v-card-title>Create Account</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="form.fullName"
              label="User Name"
              prepend-icon="mdi-account-circle"
            />
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
            />
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field v-model="form.password" label="Password">
              <template v-slot:append>
                <v-tooltip bottom>
                  <template> </template>
                </v-tooltip>
              </template>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="success">Create account</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import { server } from "../helper";
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signup() {
      let body = JSON.stringify(this.form);
      this.axios
        .post(`${server.baseURL}/user`, body, {
          headers: {
            "Content-type": "application/json"
          }
        })
        .then((response) => {
          if (response.status == 201) {
            this.$store.commit("SET_Profil", response.data.data);
            this.$store.commit("AUTH", true);
            this.$store.commit("SUCCES", response.data.message);
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
