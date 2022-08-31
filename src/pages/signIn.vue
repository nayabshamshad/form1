<template>

  <div class="container">
    <form class="form">
      <h2>Log In</h2>
      <label for="uname"><b>Username</b></label>
      <input v-model="userEmail" type="text" placeholder="Enter Email Address" name="uname" />

      <label for="pwd"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="pwd" v-model="userPass" />
      <div class="btn1">
        <button @click="loginUser" type="button">Login</button>
      </div>
      <span class="pwd">Forgot <a href="#">password?</a></span>

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
  methods: {
    loginUser() {
      this.$swal({
        title: "Pending",
        icon: "success",
        text: "Your request is pending approval",
      });
    },
  },
};
</script>

<style>
</style>
