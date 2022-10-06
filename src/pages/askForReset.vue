<template>
  <q-card class="center-card" style="height: 100vh; padding-top: 10rem">
<q-card-section>
  <div><q-icon name="west" size="xl" class="linkcolor cursor-pointer" @click="$router.go(-1)" ></q-icon></div>
</q-card-section>

    <q-card-section
      ><div
        class="flex"
        style="justify-content: flex-end; padding: 0 30%"
      ></div>
      <h5 class="text-center text-weight-bold">Resetare parolă</h5>
    </q-card-section>

    <q-card-section class="q-pt-none q-px-lg q-mx-lg">
      <p class="q-mx-auto text-center">Introduce adresa de E-mail</p>
      <p class="q-mb-lg text-weight-bold">E-mail</p>
      <q-input outlined v-model="forgotEmail" type="email"></q-input>
      <div class="flex justify-center">
        <q-btn
          class="bg-linkcolor"
          @click="sendResetEmail"
          rounder
          style="margin-top: 1rem"
          :loading="sendingEmail"
          >Resetare</q-btn
        >
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      forgotEmail: "",
      sendingEmail: false,
    };
  },
  methods: {
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
            "E-mail pentru resetarea parolei a fost trimis, te rugăm să verifici și in folder-ul Spam.",
          color: "green",
        });
        setTimeout(() => {
          this.forgotDialog = false;
        }, 1000);
      }
      this.sendingEmail = false;
    },
  },
  mounted() {
    if (this.$store.getters.isAuthenticated) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
