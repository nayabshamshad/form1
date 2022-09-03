<template>
  <div v-if="!isEdit" class="container">
    <div class="flex" style="justify-content: flex-end; padding: 0 30%">
      <q-btn round @click="isEdit = !isEdit" color="green" icon="edit"></q-btn>
    </div>
    <h2>Details</h2>
    <form class="form category-form home-only">
      <div class="cate-list-home">
        <label for="club"><b>Name:</b></label>
        <span>{{ dataUser.name }}</span>
      </div>
      <div class="cate-list-home">
        <label for="club"><b>Club:</b></label>
        <span>{{ dataUser.clubName }}</span>
      </div>

      <div class="cate-list-home">
        <label for="date"><b>Birth Date:</b></label>
        <span>{{ dataUser?.dateOfBirth ? dataUser.dateOfBirth : "" }}</span>
      </div>
      <div class="cate-list-home">
        <label for="status"><b>Status:</b></label>
        <span>{{ dataUser.status ? "Active" : "InActive" }}</span>
      </div>
      <div class="cate-list-home chip-container">
        <label for="tags"><b>Specializations:</b></label>
        <div v-if="dataUser.tagList">
          <span v-for="(item, index) in dataUser.tagList" :key="index">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="cate-list-home">
        <label for="telephone no."><b>Phone:</b></label>
        <span>{{ dataUser.phoneNumber }}</span>
      </div>
      <div class="cate-list-home">
        <label for="state"><b>Community:</b></label>
        <span>{{ dataUser.state }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Region"><b>Area:</b></label>
        <span>{{ dataUser.region }} </span>
      </div>
      <div class="cate-list-home">
        <label for="Gender"><b>Gender:</b></label>
        <span>{{ dataUser.gender }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Etnic"><b>Ethnicity:</b></label>
        <span>{{ dataUser.etnic }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Category"><b>Category:</b></label>
        <span>{{ dataUser.category }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Size"><b>Size:</b></label>
        <span>{{ dataUser.size }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Instructor"><b>Year Instructor:</b></label>
        <span>{{ dataUser.Instructor }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Ghid"><b>Year Ghid:</b></label>
        <span>{{ dataUser.Ghid }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Master Ghid"><b>Year Master Ghid:</b></label>
        <span>{{ dataUser.masterGhid }}</span>
      </div>
    </form>
    <div v-if="dataUser.status" class="home-detail">
      <h2>Student List</h2>
      <div class="grid">
        <div
          class="grid-cell"
          v-for="(item, index) in dataUser.teamList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <div class="flex" style="justify-content: flex-end; padding: 0 30%">
      <q-btn round @click="isEdit = !isEdit" color="green" icon="edit"></q-btn>
    </div>
    <form class="form">
      <h2>Edit Details</h2>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="dataUser.clubName"
          placeholder="Club"
          name="Club"
          label="Club"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <label
          style="
            margin-bottom: 0;
            margin-top: 1rem;
            display: block;
            font-size: 16px;
            font-weight: 500;
          "
          >Date of Birth</label
        >
        <q-input
          type="date"
          label-color="black"
          v-model="dataUser.dateOfBirth"
        ></q-input>
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="tagsInput"
          placeholder="Comma seperated"
          name="tags"
          label="Speicalizations you can teach (Max 5)"
          label-color="black"
        />
      </div>

      <div class="cate-list">
        <q-input
          type="tel"
          v-model="dataUser.phoneNumber"
          placeholder="+40......."
          name="phone number"
          mask="phone"
          label="Phone Number"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="dataUser.state"
          placeholder="Community Name"
          label="Community"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="dataUser.region"
          placeholder="Enter Area Name"
          label="Area"
          label-color="black"
        />
      </div>

      <div class="cate-list">
        <q-select
          :options="['Romanian', 'Hungarian']"
          label="Ethnicity"
          label-color="black"
          v-model="dataUser.etnic"
        />
      </div>
      <div class="cate-list">
        <q-select
          v-model="dataUser.category"
          label="Category"
          label-color="black"
          :options="['Licurici', 'Companioni', 'Exploratori']"
        />
      </div>
      <div class="cate-list">
        <q-select
          v-model="dataUser.size"
          :options="sizeOptions"
          label-color="black"
          label="Size"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="dataUser.Instructor"
          label-color="black"
          label="Year of investment as Instructor"
          placeholder="YYYY"
          name="Instructor"
          mask="####"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="dataUser.Ghid"
          placeholder="YYYY"
          label="Year of investment as Ghid"
          label-color="black"
          mask="####"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="dataUser.masterGhid"
          placeholder="YYYY"
          mask="####"
          label-color="black"
          label="Year of investment as Master Guide"
        />
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          padding-right: 2rem;
          margin: 1rem 0;
        "
      >
        <div>
          <label for="status"><b>Status:</b></label>
          <div>
            <q-radio
              v-model="dataUser.status"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              :val="true"
              label="Active"
            />
            <q-radio
              v-model="dataUser.status"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              :val="false"
              label="InActive"
            />
          </div>
        </div>
        <div>
          <label for="Gender"><b>Gender:</b></label>
          <div>
            <q-radio
              v-model="dataUser.gender"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="Male"
              label="Male"
            />
            <q-radio
              v-model="dataUser.gender"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="Female"
              label="Female"
            />
          </div>
        </div>
      </div>
      <div v-if="dataUser.status" class="cate-list">
        <div class="flex" style="justify-content: flex-end; padding: 0 30%">
        </div>
        <div style="flex-wrap: nowrap" class="flex justify-space-between">
          <label for="list"><b>Team Members:</b></label>
          <q-btn @click="addMember" type="button" round color="purple">+</q-btn>
        </div>

        <div
          v-for="(item, index) in teamList"
          :key="index"
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <q-input
            type="text"
            v-model="item.name"
            placeholder="Member Name"
            style="width: 70%"
          />
          <q-btn
            @click="removeMember(index)"
            type="button"
            round
            color="red"
            style="width: 35px; height: 35px"
            >-</q-btn
          >
        </div>
      </div>
      <div class="submit">
        <q-btn
          type="button"
          :loading="isSubmitting"
          @click="submit"
          color="purple"
          class="signupbtn"
          >Submit</q-btn
        >
      </div>
    </form>
  </div>
  <!--  Error Dialog  -->
  <q-dialog v-model="errorDialog">
    <q-card>
      <q-card-section
        ><div class="flex" style="justify-content: flex-end; padding: 0 30%">
          <q-btn
            round
            @click="isEdit = !isEdit"
            color="green"
            icon="edit"
          ></q-btn>
        </div>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ error }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { auth } from "../store/firebase";
export default {
  name: "HomeView",
  components: {},
  methods: {
    addMember() {
      this.teamList.push({ name: "" });
    },
    removeMember(i) {
      if (this.teamList.length > 1) {
        this.teamList.splice(i, 1);
      } else {
        this.errorDialog = true;
        this.error = "Must have at least one team member";
      }
    },
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      let profile;

      profile = { ...this.dataUser };
      profile.teamList = this.teamList;
      if (this.tagsInput != "") {
        if (this.tagsInput.split(",").length > 5) {
          this.error = "You can not select more than five tags!";
          this.errorDialog = true;
          this.isSubmitting = false;
          return;
        }
        profile.tagList = this.tagsInput.split(",");
      }
      profile.isUpdated = true;
      if (!profile.status) {
        profile.teamList = [];
      }
      // Checks before forwarding the request
      var err = false;
      if (profile.status) {
        if (profile.teamList.length < 1) {
          this.error = "You need atleast one team member";
          this.errorDialog = true;
          return;
        }
        profile?.teamList?.forEach((x) => {
          if (x.name == "") {
            err = true;
          }
        });
      }
      if (err) {
        this.isSubmitting = false;
        this.errorDialog = true;
        this.error = "Please format your team member list correctly";
        return;
      }
      if (profile.tagList.length < 1) {
        this.errorDialog = true;
        this.error = "You need atleast one tag";
        this.isSubmitting = false;
        return;
      }
      if (
        profile.dateOfBirth == "" ||
        profile.Instructor == "" ||
        profile.Ghid == "" ||
        profile.masterGhid == "" ||
        profile.region == "" ||
        profile.state == "" ||
        profile.gender == "" ||
        profile.etnic == "" ||
        profile.phoneNumber == "" ||
        profile.clubName == "" ||
        profile.category == "" ||
        profile.size == ""
      ) {
        this.errorDialog = true;
        this.error = "Please recheck your form and fill all details correctly";
        this.isSubmitting = false;
        return;
      }
      await this.$store.dispatch("updateUserProfile", profile);
      this.$store.dispatch("getUserData");
      this.isEdit = false;
      this.isSubmitting = false;
    },
  },
  data() {
    return {
      isEdit: false,
      dataUser: {},
      errorDialog: false,
      error: "",
      isSubmitting: false,
      tagsInput: "",
      sizeOptions: [
        "x-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "XXX-Large",
      ],
      teamList: [{ name: "" }],
    };
  },
  mounted() {
    if (auth.currentUser && this.$store.getters.userData?.isUpdated == false) {
      this.$router.push("/category-list");
    }
  },
  watch: {
    userData: {
      handler: function () {
        if (this.$store.getters.userData?.isUpdated == false) {
          this.$router.push("/category-list");
        }
        this.dataUser = { ...this.userData };
        this.tagsInput = this.dataUser?.tagList?.join(",");
        let teamList = [];
        this.dataUser?.teamList?.forEach((x) => {
          teamList.push(x);
        });
        this.teamList = teamList;
      },
    },
  },
  computed: {
    userData() {
      if (this.$store.getters.userData) {
        return this.$store.getters.userData;
      } else {
        return {};
      }
    },
  },
};
</script>
