<template>
  <div class="container">
    <h2>{{ $t("signUp") }}</h2>
    <form class="form" @submit.prevent="submit">
      <p>{{ $t("pleaseFillForm") }}</p>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="emailInput"
          :placeholder="$t('enterEmail')"
          name="email"
          :label="$t('emailAddress')"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          v-model="firstName"
          type="text"
          :placeholder="$t('enterFirstName')"
          name="F-name"
          :label="$t('firstName')"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          :label="$t('lastName')"
          label-color="black"
          v-model="lastName"
          :placeholder="$t('enterLastName')"
          name="L-name"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          :label="$t('departmentName')"
          label-color="black"
          :placeholder="$t('enterDepartmentName')"
          name="Department-Name"
          v-model="departmentName"
        ></q-input>
      </div>
      <div class="cate-list">
        <q-input
          mask="+40 #### #####"
          color="black"
          :label="$t('phoneNumber')"
          label-color="black"
          v-model="phoneNumber"
        ></q-input>
      </div>
      <div class="cate-list">
        <q-input
          type="password"
          :placeholder="$t('enterPassword')"
          :label="$t('password')"
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
          >{{ $t('submit') }}</q-btn
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Department SignUp",
  data() {
    return {
      isSubmitting: false,
      firstName: "",
      lastName: "",
      passInput: "",
      emailInput: "",
      departmentName: "",
      phoneNumber: "",
    };
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
          message: "Please enter a valid name",
        });
        this.isSubmitting = false;
        return;
      }
      if (this.phoneNumber.length !== 14) {
        this.$q.notify({
          message: "Phone Number must be formatted correctly",
          color: "red",
        });
        this.isSubmitting = false;
        return;
      }
      if (this.departmentName === "") {
        this.$q.notify({
          color: "red",
          message: "Please select a valid department",
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
      };
      await this.$store.dispatch("signUpDepartment", form);
      this.isSubmitting = false;
    },
  },
};
</script>
