<template>
  <div class="create">
    <div class="c-form">
      <div class="c-title">
        <span class="e">e</span>-finder 👜
        <div class="e-subtitle">Login to your account</div>
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
      <div class="c-label">Password</div>
      <div class="c-i-wrapper">
        <input
          v-model="password"
          class="c-input"
          placeholder="*****"
          type="password"
        />
      </div>

      <button @click="login" class="c-btn">Continue</button>

      <button @click="create" class="c-login-btn">Create Account</button>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },

  async created() {
    const token = await localStorage.getItem("token");

    if (token.length > 0) {
      this.$router.push({ name: "Dashboard" });
    }
  },

  methods: {
    create() {
      this.$router.push({ name: "Home" });
    },

    async login() {
      await store.dispatch("login", {
        name: this.name.toLowerCase,
        password: this.password,
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
