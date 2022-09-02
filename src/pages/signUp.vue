<template>
  <div class="container">
    <form class="form">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <div class="cate-list">
        <label for="F-name"><b>Fisrt Name</b></label>
        <q-input
          v-model="firstName"
          type="text"
          placeholder="Enter First Name"
          name="F-name"
        />
      </div>
      <div class="cate-list">
        <label for="L-name"><b>Last Name</b></label>
        <q-input
          type="text"
          v-model="lastName"
          placeholder="Enter Last Name"
          name="L-name"
        />
      </div>
      <div class="cate-list">
        <label for="email"><b>Email</b></label>
        <q-input
          type="text"
          v-model="emailInput"
          placeholder="Enter Email"
          name="email"
        />
      </div>
      <div class="cate-list">
        <label for="pwd"><b>Password</b></label>
        <q-input
          type="password"
          placeholder="Enter Password"
          v-model="passInput"
          name="pwd"
        />
      </div>
      <div class="btn1">
        <button @click="submit" type="button">Submit</button>
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
  mounted() {},
  methods: {
    submit() {
      let form = {
        name: this.firstName + this.lastName,
        email: this.emailInput,
        password: this.passInput,
      };
      this.$store.dispatch("signUp", form);
    },
  },
};
</script>

<style></style>
