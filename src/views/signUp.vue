<template>
  <form class="form">
    <div class="container">
      <h1>Sign Up ({{ signUpType }})</h1>
      <p>Please fill in this form to create an account.</p>
      <div>
        <label for="F-name"><b>Your Name</b></label>
        <input
          v-model="displayName"
          type="text"
          placeholder="Enter First Name"
        />

        <!-- <label for="L-name"><b>Last Name</b></label>
        <input
          type="text"
          v-model="lastName"
          placeholder="Enter Last Name"
          name="L-name"
        /> -->
      </div>

      <label for="email"><b>Email</b></label>
      <input
        type="text"
        v-model="emailInput"
        placeholder="Enter Email"
        name="email"
      />
      <div v-show="signUpType == 'Team Leader'">
        <label for="pwd"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="passInput"
          name="pwd"
        />
      </div>

      <!-- <p class="para">
        By creating an account you agree to our
        <a href="#">Terms & Privacy</a>.
      </p> -->
      <div>
        <button type="button" class="cancelbtn">Cancel</button>
        <button type="button" @click="signUpUser()" class="signupbtn">
          Sign Up
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      displayName: "",
      emailInput: "",
      passInput: "",
      signUpType: "Team Leader",
    };
  },
  methods: {
    signUpUser() {
      if (this.displayName && this.emailInput && this.passInput) {
        this.$store.dispatch("signUpUser", {
          name: this.displayName,
          email: this.emailInput,
          password: this.passInput,
        });
      }
    },
  },
  computed: {
    activeUser() {
      return this.$store.getters.getActiveUser;
    },
  },
};
</script>

<style></style>
