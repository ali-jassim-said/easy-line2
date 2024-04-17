<template>
  <div class="login">
    <div class="form">
      <form>
        <h1>Sign In</h1>
        <p>Enter your email and password to sign in</p>
        <input class="text" type="text" placeholder="email or Phone number" />
        <input class="pass" type="password" placeholder="Password" />
        <div v-if="loading" class="flex">
          <div class="loading-spinner"></div>
        </div>
        <input
          v-else
          class="button"
          type="button"
          value="Sign in"
          @click="login"
        />
      </form>
    </div>
    <div class="img">
      <img src="../../assets/img/Screenshot 2024-04-05 002234.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  computed: {
    loading() {
      return this.$store.state.login.loading;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("doLogin");
    },
  },
};
</script>

<style>
@import url("../../assets/css/login.css");
</style>
