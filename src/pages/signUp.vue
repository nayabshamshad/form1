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
        <q-select
          v-model="departmentName"
          label="Department"
          label-color="black"
          :options="departmentList"
        />
      </div>
      <div class="cate-list">
        <q-input
          mask="+40 #### #####"
          color="black"
          label="Phone Number"
          label-color="black"
          v-model="phoneNumber"
        ></q-input>
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
          >Submit</q-btn
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
