<template>
  <q-card class="reset-card">
    <q-card-section>
      <q-icon
        name="west"
        size="xl"
        class="linkcolor cursor-pointer"
        style="margin-left: 11%"
        @click="$router.go(-1)"
      ></q-icon>
      <img
        class="showMobile"
        style="margin-left: auto; margin-right: auto; width: 25%"
        src="../assets/lectin-mic.png"
      />
      <!-- <h2 class="text-center text-weight-bold reset-lec">LEC</h2> -->
      <div class="reset-icon"></div>
    </q-card-section>

    <q-card-section
      ><div
        class="flex"
        style="justify-content: flex-end; padding: 0 30%"
      ></div>
      <h5 class="text-center text-weight-bold reset-h5">{{ $t('resetareParola') }}</h5>
    </q-card-section>

    <q-card-section class="q-pt-none q-px-lg q-mx-lg">
      <p class="q-mx-auto text-center hide">{{ $t('introdu') }}</p>
      <p class="q-mb-lg text-weight-bold reset-label">{{ $t('emails') }}</p>
      <q-input
        outlined
        v-model="forgotEmail"
        type="email"
        class="reset-input"
      ></q-input>
      <div class="flex justify-center">
        <q-btn
          class="bg-linkcolor reset-btn"
          @click="sendResetEmail"
          rounder
          :loading="sendingEmail"
          >{{ $t('resetare') }}</q-btn
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
           this.$t('resetMessage'),
          color: "green",
          icon: "report_gmailerrorred",
        });
        setTimeout(() => {
          this.$router.push("/sign-in");
        }, 5000);
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
