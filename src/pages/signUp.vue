<template>
  <q-card class="sign-up-container my-card full-height sign-up">
    <q-card-section>
      <div class="container">
        <form class="form" @submit.prevent="submit">
          <div class="showMobile flex"></div>
          <img
            class="showMobile"
            style="margin-left: auto; margin-right: auto; width: 25%"
            src="../assets/lectin-mic.png"
          />
          <!-- <h2 class="text-center showMobile text-bold q-mb-lg">LEC</h2> -->
          <h4 class="text-center">{{ $t("inregistrare") }}</h4>
          <p>
            {{ $t("aiDejaCont") }}
            <router-link to="/sign-in" class="link">{{
              $t("autentificaTe")
            }}</router-link>
          </p>

          <div class="cate-list left">
            <label for="uname">{{ $t("nume") }}</label>

            <q-input
              v-model="firstName"
              type="text"
              name="F-name"
              :placeholder="$t('nume')"
              outlined
              label-color="black"
            />
          </div>
          <div class="cate-list right">
            <label for="uname">{{ $t("prenume") }}</label>
            <q-input
              type="text"
              :placeholder="$t('prenume')"
              label-color="black"
              v-model="lastName"
              name="L-name"
              outlined
            />
          </div>
          <div class="cate-list">
            <label>{{ $t("conferinta") }}</label>
            <q-select
              :label="$t('conferinta')"
              label-color="gray"
              v-model="departmentName"
              outlined
              :options="departmentList"
            />
          </div>
          <div class="cate-list">
            <label for="uname">{{ $t("numarDeTelefon") }}</label>
            <q-input
              type="tel"
              v-model="phoneNumber"
              placeholder="+40"
              name="phone number"
              mask="+40 #### #####"
              label-color="black"
              outlined
            />
          </div>
          <div v-show="categoryMode" class="cate-list q-mb-none" >
            <label
              for="uname"
              style="display: block; width: 20px; padding-left: 4px"
              >{{ $t("categoria") }}</label
            >
            <div class="linear-btn-container flex">
              <q-btn
                :label="$t('licurici')"
                style="margin-top: 0 !important;margin-bottom: 0 !important;"
                @click="category = 'Licurici'"
                :class="category === 'Licurici' ? 'selected' : ''"
              />

              <q-btn
                 :label="$t('exploratori')"
                 style="margin-top: 0 !important;margin-bottom: 0 !important;"
                @click="category = 'Exploratori'"
                val="Exploratori"
                :class="category === 'Exploratori' ? 'selected' : ''"
              />
              <q-btn

                val="Companioni"
                :label="$t('companioni')"
                style="margin-top: 0 !important;margin-bottom: 0 !important;"
                class="q-my-none"
                @click="category = 'Companioni'"
                :class="category === 'Companioni' ? 'selected' : ''"
              />
            </div>
          </div>

          <div class="cate-list">
            <label for="uname">{{ $t("emails") }}</label>
            <q-input
              type="text"
              v-model="emailInput"
              name="email"
              :placeholder="$t('adresadeE-mail')"
              label-color="black"
              outlined
            />
          </div>

          <div class="cate-list">
            <label for="pwd">{{ $t("parola") }}</label>
            <q-input
              :type="isPwd ? 'password' : 'text'"
              :placeholder="$t('parola')"
              label-color="black"
              v-model="passInput"
              name="pwd"
              outlined
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
              :loading="isSubmitting"
              rounded
              @click="submit"
              type="button"
              >{{ $t("inregistrare") }}</q-btn
            >
          </div>
          <!-- <span class="pwd"
        >Apăsând "Înregistrare", confirm că sunt de acord cu  Termenii și Condiițile impuse de LEC.
        <button
          type="button"
          class="link"
          @click="forgotPassword"
        >

        </button>
      </span> -->
          <p class="paragraph">
            {{ $t("initialTextTerms") }}
            <span class="termsLink" @click="showTermsDialog = true">
              {{ $t("termsAndConditions") }}
            </span>
            {{ $t("afterTextTerms") }}
          </p>
        </form>
      </div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="showTermsDialog">
    <termsAndConditions />
  </q-dialog>
</template>

<script>
import termsAndConditions from "../components/termsAndConditions.vue";
export default {
  components: { termsAndConditions },
  data() {
    return {
      firstName: "",
      category: '',
      lastName: "",
      emailInput: "",
      passInput: "",
      isSubmitting: false,
      phoneNumber: "+40",
      departmentName: "",
      imgUrl: "",
      isPwd: true,
      showTermsDialog: false,
      categoryMode: false,
    };
  },

  mounted() {
    this.getData();
    if (this.$route.query?.mode && this.$route.query.mode === "categoryLead") {
      this.categoryMode = true;
    }
  },
  methods: {
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;

      if (this.firstName == "" || this.lastName == "") {
        this.$q.notify({
          color: "red",
          message: this.$t("validName"),
        });
        this.isSubmitting = false;
        return;
      }
      if (this.phoneNumber.length !== 14) {
        this.$q.notify({
          message: this.$t("validNumber"),
          color: "red",
        });
        this.isSubmitting = false;
        return;
      }
      if (this.departmentName === "") {
        this.$q.notify({
          message: this.$t("departmentError"),
          color: "red",
        });
        this.isSubmitting = false;
        return;
      }
      let form = {
        name: this.firstName + " " + this.lastName,
        email: this.emailInput,
        password: this.passInput,
        phoneNumber: this.phoneNumber,
        department: this.departmentName,
        imgUrl: this.imgUrl,
        category: undefined
      };
      if(this.categoryMode) {
        form.category = this.category;
      }
      await this.$store.dispatch("signUp", form);
      this.isSubmitting = false;
    },
    async getData() {
      await this.$store.dispatch("getUserList");
    },
  },
  computed: {
    departmentList() {
      return this.$store.getters.userList
        .filter((x) => {
          return x.role === "department";
        })
        .map((x) => {
          return x.departmentName;
        });
    },
  },
  watch: {
    "$route.query.mode": {
      handler: function (a) {
        if (a && a === "categoryLead") {
          this.categoryMode = true;
        } else {
          this.categoryMode = false;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style></style>
