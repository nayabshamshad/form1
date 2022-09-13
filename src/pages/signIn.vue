<template>
  <div class="container">
    <form @submit.prevent="loginUser" class="form" autocomplete="off">
      <h2>Autentificare</h2>
      <div class="cate-list">
        <label for="uname"><b>Adresa ta de E-mail</b></label>
        <q-input
          v-model="userEmail"
          type="text"
          placeholder="Adresa de E-mail"
          name="uname"
        />
      </div>
      <div class="cate-list">
        <label for="pwd"><b>Parola</b></label>
        <q-input
          type="password"
          placeholder="Parola"
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
          >Conectare</q-btn
        >
      </div>
      <span class="pwd"
        >Utilizator nou?
        <router-link to="/sign-up">Înregistrare</router-link>
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
          Am uitat parola
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
        <div class="text-h6">Resetare parolă</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>Introduce adresa de E-mail</p>
        <q-input v-model="forgotEmail" type="email"></q-input>
        <div class="flex justify-center">
          <q-btn
            @click="sendResetEmail"
            rounder
            style="margin-top: 1rem"
            :loading="sendingEmail"
            color="purple"
            >Resetare</q-btn
          >
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Ieșire" color="primary" v-close-popup />
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
