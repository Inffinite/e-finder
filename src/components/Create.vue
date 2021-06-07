<template>
  <div class="create">
    <div class="c-form">
      <div class="c-title">
        <span class="e">e</span>-finder 👜
        <div class="e-subtitle">create account</div>
      </div>
      <div class="c-label">Username</div>
      <div class="c-i-wrapper">
        <input
          v-model="name"
          class="c-input"
          placeholder="Someone"
          type="text"
        />
      </div>
      <div class="c-label">Email</div>
      <div class="c-i-wrapper">
        <input
          v-model="email"
          class="c-input"
          placeholder="someone@gmail.com"
          type="text"
        />
      </div>
      <div class="c-label">Password</div>
      <div class="c-i-wrapper">
        <input
          v-model="password"
          class="c-input"
          placeholder="*****"
          type="password"
        />
      </div>

      <button @click="signin" class="c-btn">Continue</button>

      <button @click="login" class="c-login-btn">Login instead</button>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  created() {
    const token = await localStorage.getItem("token");

    if (token.length > 0) {
      this.$router.push({ name: "Dashboard" });
    }
  },

  methods: {
    login() {
      this.$router.push({ name: "Login" });
    },

    async signin() {
      await store.dispatch("signIn", {
        name: this.name.toLowerCase(),
        email: this.email,
        password: this.password.to,
      });

      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/create.css";
</style>
