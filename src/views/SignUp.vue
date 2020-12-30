<template>
  <v-container>
    <v-card>
      <form @submit.prevent="signup">
        <v-card-title>Je m'inscris</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="form.fullName"
              label="Nom d'utilisateur"
              prepend-icon="mdi-account-circle"
            />
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="Adresse électronique"
            />
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field v-model="form.password" label="Mot de passe">
              <template v-slot:append>
                <v-tooltip bottom>
                  <template> </template>
                </v-tooltip>
              </template>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="success">S'inscrire</v-btn>
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
      console.log(body);
      this.axios
        .post(`${server.baseURL}/user`, body, {
          headers: {
            "Content-type": "application/json"
          }
        })
        .then((response) => {
          console.log(response);
          if (response.status == 201) {
            this.$store.commit("SET_Profil", response.data.data);
            this.$store.commit("AUTH", true);
            this.$store.commit("SUCCES", response.data.message);
            this.$router.push("/dashboard");
          } else {
            throw new Error(
              "un problème est survenu lors de l'enregistrement de votre compte"
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
