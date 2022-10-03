<template>
  <q-card class="my-card full-height sign-up">
    <q-card-section>
      <div class="container">
        <form class="form" @submit.prevent="submit">
          <h4>Înregistrare</h4>
          <p class="linkcolor">
            Ai deja cont?
            <router-link to="/sign-in" class="link">Autentifică-te</router-link>
          </p>

          <div class="cate-list left">
            <label for="uname">Nume</label>
            <q-input
              v-model="firstName"
              type="text"
              name="F-name"
              placeholder="Nume"
              outlined
              label-color="black"
            />
          </div>
          <div class="cate-list right">
            <label for="uname">Prenume</label>
            <q-input
              type="text"
              placeholder="Prenume"
              label-color="black"
              v-model="lastName"
              name="L-name"
              outlined
            />
          </div>
          <div class="cate-list">
            <label>Conferinta</label>
            <q-select
              v-model="departmentName"
              outlined
              label-color="black"
              :options="departmentList"
            />
          </div>
          <div class="cate-list">
            <label for="uname">Număr de telefon</label>
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

          <div class="cate-list">
            <label for="uname"> E-mail</label>
            <q-input
              type="text"
              v-model="emailInput"
              name="email"
              placeholder="Adresa de E-mail"
              label-color="black"
              outlined
            />
          </div>

          <div class="cate-list">
            <label for="pwd">Parola</label>
            <q-input
              :type="isPwd ? 'password' : 'text'"
              placeholder="Parola"
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
            <q-btn :loading="isSubmitting" rounded @click="submit" type="button"
              >Înregistrare</q-btn
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
            Apăsând "Înregistrare", confirm că sunt de acord cu impuse de LEC.
            <span class="termsLink" @click="showTermsDialog = true">
              Termenii și Condiițile
            </span>
          </p>
        </form>
      </div>
    </q-card-section>
  </q-card>
  <q-dialog v-model="showTermsDialog">
    <q-card class="termsAndConditions">
      <q-card-section>
        <h3>Termeni si conditii</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          praesentium consequatur quos vel non ipsa ullam quibusdam! Voluptates
          velit, obcaecati accusantium similique asperiores a alias dolorum
          placeat, blanditiis provident repudiandae ullam? Vel sed ipsa
          expedita, eum ipsum quibusdam veniam ut.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          praesentium consequatur quos vel non ipsa ullam quibusdam! Voluptates
          velit, obcaecati accusantium similique asperiores a alias dolorum
          placeat, blanditiis provident repudiandae ullam? Vel sed ipsa
          expedita, eum ipsum quibusdam veniam ut.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          praesentium consequatur quos vel non ipsa ullam quibusdam! Voluptates
          velit, obcaecati accusantium similique asperiores a alias dolorum
          placeat, blanditiis provident repudiandae ullam? Vel sed ipsa
          expedita, eum ipsum quibusdam veniam ut.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          praesentium consequatur quos vel non ipsa ullam quibusdam! Voluptates
          velit, obcaecati accusantium similique asperiores a alias dolorum
          placeat, blanditiis provident repudiandae ullam? Vel sed ipsa
          expedita, eum ipsum quibusdam veniam ut.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          praesentium consequatur quos vel non ipsa ullam quibusdam! Voluptates
          velit, obcaecati accusantium similique asperiores a alias dolorum
          placeat, blanditiis provident repudiandae ullam? Vel sed ipsa
          expedita, eum ipsum quibusdam veniam ut.
        </p>

      </q-card-section>
    </q-card>
  </q-dialog>
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
      isPwd: true,
      showTermsDialog: false,
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
