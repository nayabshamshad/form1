<template>
  <div class="container">
    <form class="form" autocomplete="off">
      <h2>Log In</h2>
      <div class="cate-list">
        <label for="uname"><b>Username</b></label>
        <q-input
          v-model="userEmail"
          type="text"
          placeholder="Enter Email Address"
          name="uname"
        />
      </div>
      <div class="cate-list">
        <label for="pwd"><b>Password</b></label>
        <q-input
          type="password"
          placeholder="Enter Password"
          name="pwd"
          v-model="userPass"
        />
      </div>
      <div class="btn1">
        <q-btn @click="loginUser" type="button" color="purple" rounded>Login</q-btn>
      </div>
      <span class="pwd"
        >Don't have an account?
        <router-link to="/sign-up">Register Now</router-link></span
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPass: "",
    };
  },
  mounted() {},
  methods: {
    async loginUser() {
      await this.$store.dispatch("signInUser", {
        email: this.userEmail,
        password: this.userPass,
      });
    },
  },
};
</script>

<style></style>
