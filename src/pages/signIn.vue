<template>
  <q-card class="my-card full-height sign-in">
    <q-card-section>
      <div class="container">
        <form @submit.prevent="loginUser" class="form" autocomplete="off">
          <!-- <h2 class="text-center showMobile text-bold q-mb-lg q-pb-lg">LEC</h2> -->
          <img
            style="
              margin-left: 38%;
              margin-right: auto;
              margin-bottom: 10%;
              width: 25%;
            "
            src="../assets/lectin-mic.png"
          />
          <h4>{{ $t("autentificare") }}</h4>
          <p>
            {{ $t("dontHaveAccount") }}
            <router-link to="/sign-up" class="link">{{
              $t("registerNow")
            }}</router-link>
          </p>
          <div class="cate-list">
            <label for="uname"> {{ $t("emails") }}</label>
            <q-input
              outlined
              v-model="userEmail"
              type="text"
              :placeholder="$t('adresadeE-mail')"
              name="uname"
            />
          </div>
          <div class="cate-list">
            <label for="pwd">{{ $t("parola") }}</label>
            <q-input
              outlined
              :placeholder="$t('parola')"
              name="pwd"
              v-model="userPass"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="btn1">
            <q-btn
              @click="loginUser"
              :loading="isSubmitting"
              class="q-btn-item"
              type="button"
              >{{ $t("conectare") }}</q-btn
            >
          </div>
          <span class="pwd">
            <button
              style="font-size: 12px"
              type="button"
              class="link"
              @click="forgotPassword"
            >
              {{ $t("amUitatParola") }}
            </button>
          </span>
        </form>
      </div>
    </q-card-section>
  </q-card>
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
      isPwd: true,
    };
  },
  mounted() {},
  methods: {
    async confirmReset() {
      const reset = await this.$store.dispatch("confirmReset", this.forgotCode);
    },

    forgotPassword() {
      this.$router.push("/send-reset-link");
    },
    async loginUser() {
      this.forgotDialog = false;
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      await this.$store.dispatch("signInUser", {
        email: this.userEmail.trim(),
        password: this.userPass,
      });
      this.isSubmitting = false;
    },
  },
};
</script>
