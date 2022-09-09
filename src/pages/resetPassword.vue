<template>
  <div class="container">
    <form class="form" autocomplete="off">
      <h2>Reset Password</h2>
      <div class="cate-list">
        <label for="pwd"><b>Password</b></label>
        <q-input
          type="password"
          placeholder="Enter Password"
          name="pwd"
          v-model="newPass"
        />
      </div>
      <div class="btn1">
        <q-btn
          @click="resetPassword"
          :loading="isSubmitting"
          type="button"
          color="purple"
          rounded
          >Reset Password</q-btn
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  async mounted() {
    if (this.$route?.query?.oobCode) {
      this.$store.dispatch("verifyReset", this.$route.query.oobCode);
    } else {
      this.$router.push("/");
    }
  },
  data() {
    return {
      newPass: "",
      isSubmitting: false,
    };
  },
  methods: {
    async resetPassword() {
      if (this.isSubmitting) {
        return;
      }
      if (this.newPass.length < 6) {
        this.$q.notify({
          message: "Password must be atleast 6 characters long",
          color: "red",
        });
        return;
      }
      this.isSubmitting = true;
      let reset = await this.$store.dispatch("finalizeReset", {
        pass: this.newPass,
        code: this.$route.query.oobCode
      });
      if (reset.err) {
        this.isSubmitting = false;
        return;
      } else {
        this.$q.notify({
          message:
            "Password Reset Complete, you are being redirected to login page",
          color: "green",
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style></style>
