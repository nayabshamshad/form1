<template>
  <div class="container">
    <h2>Înregistrare</h2>
    <form class="form" @submit.prevent="submit">
      <div class="cate-list">
        <q-input
          v-model="firstName"
          type="text"
          name="F-name"
          label="Nume"
          label-color="black"
        />
      </div>

      <div class="cate-list">
        <q-input
          type="text"
          label="Prenume"
          label-color="black"
          v-model="lastName"
          name="L-name"
        />
      </div>

      <div class="cate-list">
        <q-select
          v-model="departmentName"
          label="Conferința"
          label-color="black"
          :options="departmentList"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="tel"
          v-model="phoneNumber"
          placeholder="+40"
          name="phone number"
          mask="+40 #### #####"
          label="Număr de telefon"
          label-color="black"
        />
      </div>

      <div class="cate-list">
        <q-input
          type="text"
          v-model="emailInput"
          name="email"
          label="Adresă de E-mail"
          label-color="black"
        />
      </div>

      <div class="cate-list">
        <q-input
          type="password"
          label="Parolă"
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
          >Trimite</q-btn
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
      imgUrl: "",
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
          message: "Te rugăm să introduci un nume valid.",
        });
        this.isSubmitting = false;
        return;
      }
      if (this.phoneNumber.length !== 14) {
        this.$q.notify({
          message: "Te rugăm să introduci un număr de telefon valid.",
          color: "red",
        });
        this.isSubmitting = false;
        return;
      }
      if (this.departmentName === "") {
        this.$q.notify({
          message: "Please select a department",
          color: "red",
        });
        return;
      }
      let form = {
        name: this.firstName + " " + this.lastName,
        email: this.emailInput,
        password: this.passInput,
        phoneNumber: this.phoneNumber,
        department: { department: this.departmentName },
        imgUrl: this.imgUrl,
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
          return x.departmentName
        });
    },
  },
};
</script>

<style></style>
