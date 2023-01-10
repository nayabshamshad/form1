<template>
  <q-card
    class="my-card full-height sign-in flex flex-col justify-between"
    style="flex-direction: column"
  >
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
    <q-card-section class="full-width">
      <div class="container">
        <form>
          <div class="flex btn1 no- linear-btn-container">
            <q-btn
              style="
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                width: 30% !important;
                border: 1px solid rgb(130 117 117 / 47%) !important;
                margin-top: 0 !important;
                margin-bottom: 0 !important;
                font-weight: 600;
              "
              :style="
                locale == 'en-US'
                  ? ' background-color: #ffffff; color:#000000'
                  : '     color:#FFFFFF'
              "
              @click="changeLanguage('en-US')"
              :label="$t('Romana')"
            />
            <q-btn
              style="
                width: 30% !important;
                border: 1px solid rgba(0, 0, 0, 0.2) !important;
                border-left: 0px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-top: 0 !important;
                margin-bottom: 0 !important;

                font-weight: 600;
              "
              :style="
                locale == 'en-GB'
                  ? ' background-color: #ffffff; color:#000000'
                  : '     color:#FFFFFF'
              "
              @click="changeLanguage('en-GB')"
              :label="$t('Maghiara')"
            />
          </div>
        </form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  data() {
    const { locale } = useI18n({ useScope: "global" });

    return {
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "en-GB", label: "German" },
      ],
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
    changeLanguage(OBJ) {
      this.locale = OBJ;
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
