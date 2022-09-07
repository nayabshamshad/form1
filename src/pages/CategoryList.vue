<template>
  <div class="container">
    <form class="form">
      <h2>Step 2</h2>

      <div class="cate-list">
        <q-input
          type="text"
          v-model="userInfo.clubName"
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
          v-model="userInfo.dateOfBirth"
        ></q-input>
        <!-- <q-input class="q-input" filled v-model="userInfo.dateOfBirth" mask="date" :rules="['date']">
      <template  v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="userInfo.dateOfBirth" minimal>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input> -->
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
          type="text"
          v-model="userInfo.state"
          placeholder="Community Name"
          label="Community"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="userInfo.region"
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
          v-model="userInfo.etnic"
        />
      </div>
      <div class="cate-list">
        <q-select
          v-model="userInfo.category"
          label="Category"
          label-color="black"
          :options="['Licurici', 'Companioni', 'Exploratori']"
        />
      </div>
      <div class="cate-list">
        <q-select
          v-model="userInfo.size"
          :options="sizeOptions"
          label-color="black"
          label="Size"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="userInfo.Instructor"
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
          v-model="userInfo.Ghid"
          placeholder="YYYY"
          label="Year of investment as Ghid"
          label-color="black"
          mask="####"
        />
      </div>
      <div class="cate-list">
        <q-input
          type="text"
          v-model="userInfo.masterGhid"
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
              v-model="userInfo.status"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              :val="true"
              label="Active"
            />
            <q-radio
              v-model="userInfo.status"
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
              v-model="userInfo.gender"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="Male"
              label="Male"
            />
            <q-radio
              v-model="userInfo.gender"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="Female"
              label="Female"
            />
          </div>
        </div>
      </div>
      <div v-if="userInfo.status" class="cate-list">
        <div style="flex-wrap: nowrap" class="flex justify-space-between">
          <label for="list"><b>Team Members:</b></label>
          <q-btn @click="addMember" type="button" round color="purple">+</q-btn>
        </div>

        <div
          v-for="(item, index) in userInfo.teamList"
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

  <!-- Error Dialog -->
  <q-dialog v-model="errorDialog">
    <q-card>
      <q-card-section>
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
export default {
  name: "CategoryListView",
  components: {},
  data() {
    return {
      userInfo: {
        teamList: [{ name: "" }],
        dateOfBirth: "2022-03-21",
        Instructor: "",
        Ghid: "",
        masterGhid: "",
        region: "",
        state: "",
        gender: "Male",
        etnic: "",
        tagList: [],
        clubName: "",
        status: false,
        category: "",
        size: "",
        isUpdated: false,
      },
      tagsInput: "",
      isSubmitting: false,
      sizeOptions: [
        "x-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "XXX-Large",
      ],
      error: "There was an unexpected error",
      errorDialog: false,
    };
  },
  methods: {
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      let profile;

      profile = { ...this.userInfo };
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
        profile.teamList.forEach((x) => {
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
        profile.region == "" ||
        profile.state == "" ||
        profile.gender == "" ||
        profile.etnic == "" ||
        profile.clubName == "" ||
        profile.category == "" ||
        profile.size == ""
      ) {
        this.errorDialog = true;
        this.error = "Please recheck your form and fill all details correctly";
        this.isSubmitting = false;
        return;
      }
      if (
        profile.Instructor.length !== 4 ||
        profile.Ghid.length !== 4 ||
        profile.masterGhid.length !== 4
      ) {
        this.$q.notify({
          color: 'red',
          message: "Years must be formatted correctly",
        });
        this.isSubmitting = false;
        return;
      }
      if (
        profile.Instructor > profile.Ghid ||
        profile.Ghid > profile.masterGhid ||
        profile.Instructor > profile.masterGhid
      ) {
        this.$q.notify({
          color: 'red',
          message:
            "Please recheck the order of your investments, instructor investment cannot be done before Ghid and master Ghid cannot be completed before Ghid",
        });
        this.isSubmitting = false;
        return;
      }
      await this.$store.dispatch("updateUserProfile", profile);
      this.isSubmitting = false;
      this.$router.push("/");
    },
    addMember() {
      this.userInfo.teamList.push({ name: "" });
    },
    removeMember(i) {
      if (this.userInfo.teamList.length > 1) {
        this.userInfo.teamList.splice(i, 1);
      } else {
        this.errorDialog = true;
        this.error = "Must have at least one team member";
      }
    },
  },
  mounted() {
    if (this.storeUserInfo?.isUpdated) {
      this.$router.push("/");
    }
  },
  computed: {
    storeUserInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>
