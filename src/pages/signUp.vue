<template>
  <div class="container">
    <h2>Sign Up</h2>
    <form class="form" @submit.prevent="submit">
      <p>Please fill in this form to create an account.</p>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="emailInput"
          placeholder="Enter Email"
          name="email"
          label="Email Address"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          v-model="firstName"
          type="text"
          placeholder="Enter First Name"
          name="F-name"
          label="First Name"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          label="Last Name"
          label-color="black"
          v-model="lastName"
          placeholder="Enter Last Name"
          name="L-name"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          label="Last Name"
          label-color="black"
          v-model="lastName"
          placeholder="Enter Last Name"
          name="L-name"
        />
      </div>
      <div class="cate-list">
        <q-select
          v-model="departmentName"
          label="Department"
          label-color="black"
          :options="departmentList"
        />
      </div>

      <div class="cate-list">
        <q-input
          type="password"
          placeholder="Enter Password"
          label="Password"
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
          >Submit</q-btn
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailInput: "",
      passInput: "",
      isSubmitting: false,
      phoneNumber: "+40",
      departmentName: "",
    };
  },
  mounted() {
    this.getData();
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
      let form = {
        name: this.firstName + " " + this.lastName,
        email: this.emailInput,
        password: this.passInput,
        phoneNumber: this.phoneNumber,
        department: this.departmentName,
      };
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
};
</script>

<style></style>
