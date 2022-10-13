<template>
  <q-card class="my-card center-card" style="height: 100vh">
    <q-card-section>
      <h2 class="text-center text-weight-bold reset-lec">LEC</h2>
      <div class="reset-icon">
        <q-icon
          name="west"
          size="xl"
          class="linkcolor cursor-pointer"
          @click="$router.go(-1)"
        ></q-icon>
      </div>
      <div class="container">
        <form class="form" autocomplete="off">
          <h4 class="reset-pwd-h4">Resetare parola</h4>
          <div class="cate-list">
            <label for="pwd">Parola nouă</label>
            <q-input
            outlined
              type="password"
              name="pwd"
              v-model="newPass"
              placeholder="Introduce o parolă nouă"
            />
          </div>
          <div class="btn1">
            <q-btn
              @click="resetPassword"
              :loading="isSubmitting"
              type="button"
              rounded
              >RESETARE PAROLĂ</q-btn
            >
          </div>
        </form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  async mounted() {
    // if (this.$route?.query?.oobCode) {
    //   this.$store.dispatch("verifyReset", this.$route.query.oobCode);
    // } else {
    //   this.$router.push("/");
    // }
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
          message: "Parola trebuie să aibă minim 6 caaractere.",
          color: "red",
        });
        return;
      }
      this.isSubmitting = true;
      let reset = await this.$store.dispatch("finalizeReset", {
        pass: this.newPass,
        code: this.$route.query.oobCode,
      });
      if (reset.err) {
        this.isSubmitting = false;
        return;
      } else {
        this.$q.notify({
          message: "Parola a fost resetata, te rugăm să te autentifici.",
          color: "green",
          icon: 'report_gmailerrorred'
        });
        this.$router.push("/");
      }
    },
  },
};
</script>
<style></style>
