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
        <input
          ref="imgInput"
          accept="image/*"
          @change="handleImageUpload"
          type="file"
          style="display: none"
        />
        <div class="profile-img-holder q-my-lg">
          <q-card-actions align="right" class="q-mb-md">
            <q-btn rounded @click="selectImage" no-caps color="secondary"
              >Add Profile Picture</q-btn
            >
          </q-card-actions>
          <div
            v-if="previewImage"
            class="add-img q-mx-auto"

          >
            <q-btn @click="removeImg()" color="red" round size="sm">-</q-btn>
            <img
              class="add-event-img"
              :src="previewImage"
              alt=""
            />
          </div>
        </div>
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
import { storage } from "../store/firebase.js";
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
      previewImage: "",
      file: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleImageUpload(e) {
      const file = e.target.files[0];
      this.previewImage = URL.createObjectURL(file);
      this.file = file;
    },
    selectImage() {
      this.$refs.imgInput.click();
    },
    removeImg() {
      this.imgUrl = "";
      this.previewImage = "";
      this.file = null;
    },
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      if (this.previewImage !== "") {
        const img_name = new Date() + "-" + this.file.name;
        await storage
          .child(img_name)
          .put(this.file, {
            contentType: this.file.type,
          })
          .then((snapshot) => {
            return snapshot.ref.getDownloadURL();
          })
          .then((url) => {
            this.imgUrl = url;
          });
      }
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
      let form = {
        name: this.firstName + " " + this.lastName,
        email: this.emailInput,
        password: this.passInput,
        phoneNumber: this.phoneNumber,
        department: this.departmentName,
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
          return x.departmentName;
        });
    },
  },
};
</script>

<style></style>
