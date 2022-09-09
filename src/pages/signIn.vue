<template>
  <div class="container">
    <form @submit.prevent="loginUser" class="form" autocomplete="off">
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
        <q-btn
          @click="loginUser"
          :loading="isSubmitting"
          type="button"
          color="purple"
          rounded
          >Login</q-btn
        >
      </div>
      <span class="pwd"
        >Don't have an account?
        <router-link to="/sign-up">Register Now</router-link>
        <button
          type="button"
          style="
            background: none;
            outline: none;
            border: none;
            display: block;
            color: blue;
            cursor: pointer;
          "
          @click="forgotPassword"
        >
          Forgot Password?
        </button>
      </span>
    </form>
  </div>
  <!-- Forgot Dialog -->
  <q-dialog v-model="forgotDialog">
    <q-card style="width: 100%">
      <q-card-section
        ><div
          class="flex"
          style="justify-content: flex-end; padding: 0 30%"
        ></div>
        <div class="text-h6">Forgot Your Password?</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>Please enter your email address</p>
        <q-input v-model="forgotEmail" type="email"></q-input>
        <div class="flex justify-center">
          <q-btn
            @click="sendResetEmail"
            rounder
            style="margin-top: 1rem"
            :loading="sendingEmail"
            color="purple"
            >Send Reset Email</q-btn
          >
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPass: "",
      isSubmitting: false,
      forgotDialog: false,
      forgotEmail: "",
      sendingEmail: false,
      forgotCode: "",
    };
  },
  mounted() {},
  methods: {
    async confirmReset() {
      const reset = await this.$store.dispatch("confirmReset", this.forgotCode);
    },
    async sendResetEmail() {
      if (this.sendingEmail) {
        return;
      }
      this.sendingEmail = true;
      const reset = await this.$store.dispatch(
        "sendResetEmail",
        this.forgotEmail
      );
      if (reset.err) {
        this.sendingEmail = false;
        return;
      } else {
        this.$q.notify({
          message:
            "Password reset email has been sent, please be sure to check your spam folder as well",
          color: "green",
        });
        setTimeout(() => {
          this.forgotDialog = false;
        }, 1000);
      }
      this.sendingEmail = false;
    },
    async forgotPassword() {
      this.forgotEmail = this.userEmail;
      this.forgotDialog = true;
    },
    async loginUser() {
      this.forgotDialog = false;
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      await this.$store.dispatch("signInUser", {
        email: this.userEmail,
        password: this.userPass,
      });
      this.isSubmitting = false;
    },
  },
};
</script>

<style></style>
