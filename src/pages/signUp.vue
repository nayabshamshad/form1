<template>
  <div class="container">
    <h2>Sign Up</h2>
    <form class="form">
      <p>Please fill in this form to create an account.</p>
      <div class="cate-list">
        <q-input
          v-model="firstName"
          type="text"
          placeholder="Enter First Name"
          name="F-name"
          label="First Name"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          label="Last Name"
          label-color="black"
          v-model="lastName"
          placeholder="Enter Last Name"
          name="L-name"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="emailInput"
          placeholder="Enter Email"
          name="email"
          label="Email Address"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="password"
          placeholder="Enter Password"
          label="Password"
          label-color="black"
          v-model="passInput"
          name="pwd"
        />
      </div>
      <div class="btn1">
        <q-btn
          :loading="isSubmitting"
          rounded
          color="purple"
          @click="submit"
          type="button"
          >Submit</q-btn
        >
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
      isSubmitting: false,
    };
  },
  mounted() {},
  methods: {
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      if (this.firstName == "" || this.lastName == "") {
        this.$q.notify({
          color: "red",
          message: "Please enter a valid name",
        });
        this.isSubmitting = false
        return
      }
      let form = {
        name: this.firstName + this.lastName,
        email: this.emailInput,
        password: this.passInput,
      };
      await this.$store.dispatch("signUp", form);
      this.isSubmitting = false;
    },
  },
};
</script>

<style></style>
