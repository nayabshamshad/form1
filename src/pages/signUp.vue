<template>
  <div class="container">
    <form class="form">

      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <div>
        <label for="F-name"><b>Fisrt Name</b></label>
        <input v-model="firstName" type="text" placeholder="Enter First Name" name="F-name" />

        <label for="L-name"><b>Last Name</b></label>
        <input type="text" v-model="lastName" placeholder="Enter Last Name" name="L-name" />
      </div>

      <label for="email"><b>Email</b></label>
      <input type="text" v-model="emailInput" placeholder="Enter Email" name="email" />

      <label for="pwd"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" v-model="passInput" name="pwd">
      <div class="btn1">
        <button type="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailInput: "",
      passInput: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>
