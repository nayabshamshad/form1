<template>
  <form>
    <div class="container">
      <h2>Log In</h2>
      <label for="uname"><b>Username</b></label>
      <input
        v-model="userEmail"
        type="text"
        placeholder="Enter Email Address"
        name="uname"
      />

      <label for="pwd"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="pwd"
        v-model="userPass"
      />

      <button @click="loginUser" type="button">Login</button>
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="pwd">Forgot <a href="#">password?</a></span>
    </div>
  </form>
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

<style></style>
