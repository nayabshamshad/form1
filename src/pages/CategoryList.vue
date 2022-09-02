<template>
  <div class="container">
    <form class="form">
      <h2>Step 2</h2>

      <div class="cate-list">
        <label for="club"><b>Club:</b></label>
        <q-input
          type="text"
          v-model="userInfo.clubName"
          placeholder="Club"
          name="Club"
        />
      </div>
      <div class="cate-list">
        <label for="date"><b>Date:</b></label>
        <q-input class="q-input" filled v-model="eventDate" mask="date" :rules="['date']">
      <template  v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="eventDate" minimal>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
      </div>
      <div class="cate-list">
        <label for="tags"><b>Tags: </b>(comma separated, max 5)</label>
        <q-input type="text" v-model="tagsInput" placeholder="Tags" name="tags" />
      </div>
      <div class="cate-list">
        <label for="status"><b>Status:</b></label>
        <input
          type="radio"
          name="status"
          v-model="userInfo.status"
          id="radio1"
          :value="true"
        />
        Active
        <input
          type="radio"
          name="status"
          id="radio2"
          v-model="userInfo.status"
          :value="false"
        />Inactive
      </div>
      <div class="cate-list">
        <label for="telephone no."><b>Telephone No.</b></label>
        <q-input
          type="text"
          v-model="userInfo.phoneNumber"
          placeholder="+40......."
          name="phone number"
        />
      </div>
      <div class="cate-list">
        <label for="state"><b>State:</b></label>
        <q-input
          type="text"
          v-model="userInfo.state"
          placeholder="State"
          name="State"
        />
      </div>
      <div class="cate-list">
        <label for="Region"><b>Region:</b></label>
        <q-input
          type="text"
          v-model="userInfo.region"
          placeholder="Region"
          name="region"
        />
      </div>
      <div class="cate-list">
        <label for="Gender"><b>Gender:</b></label>
        <input
          v-model="userInfo.gender"
          type="radio"
          id="Gender"
          name="gender"
          value="Male"
        />
        <label for="maleRadio"> Male </label>
        <input
          v-model="userInfo.gender"
          type="radio"
          name="gender"
          id="maleRadio"
          value="Female"
        />
        Female
      </div>
      <div class="cate-list">
        <label for="Etnic"><b>Etnic:</b></label>
        <select v-model="userInfo.etnic">
          <option value="Etnic">Etnic</option>
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
      <div class="cate-list">
        <label for="Category"><b>Category:</b></label>
        <select v-model="userInfo.category">
          <option value="Category">Category</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
      </div>
      <div class="cate-list">
        <label for="Size"><b>Size:</b></label>
        <select class="select" v-model="userInfo.size">
          <option value="Size">Size</option>
          <option value="Xsmall">Xsmall</option>
          <option value="small">Small</option>
          <option value="Large">Large</option>
          <option value="XLarge">XLarge</option>
          <option value="XXLarge">XXLarge</option>
          <option value="XXXLarge">XXXLarge</option>
        </select>
      </div>
      <div class="cate-list">
        <label for="Instructor"><b>Instructor:</b></label>
        <q-input
          type="text"
          v-model="userInfo.Instructor"
          placeholder="Instructor"
          name="Instructor"
        />
      </div>
      <div class="cate-list">
        <label for="Ghid"><b>Ghid:</b></label>
        <q-input
          type="text"
          v-model="userInfo.Ghid"
          placeholder="Ghid"
          name="Ghid"
        />
      </div>
      <div class="cate-list">
        <label for="Master Ghid"><b>Master Ghid:</b></label>
        <q-input
          type="text"
          v-model="userInfo.masterGhid"
          placeholder="Master Ghid"
          name="Master Ghid"
        />
      </div>
      <div class="cate-list">
        <label for="list"><b>List:</b></label>

        <div v-for="(item, index) in userInfo.teamList" :key="index">
          <q-input
            class="input"
            type="text"
            v-model="item.name"
            placeholder="list"
            name=""
          />
        </div>
        <button @click="addMember" type="button" class="btnplus">+</button>
      </div>
      <div class="submit">
        <button type="button" @click="submit" class="signupbtn">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CategoryListView",
  components: {},
  data() {
    return {
      userInfo: {
        isAuthorized: false,
        teamList: [{ name: "" }],
        dateOfBirth: "",
        Instructor: "",
        Ghid: "",
        masterGhid: "",
        region: "",
        state: "",
        gender: "",
        etnic: "",
        phoneNumber: "",
        tagList: [],
        clubName: "",
        status: false,
        category: "",
        size: "",
        isUpdated: false,
      },
      tagsInput: "",
    };
  },
  methods: {
    submit() {
      let profile;
      profile = { ...this.userInfo };
      if (this.tagsInput != "") {
        profile.tagList = this.tagsInput.split(",");
      }
      profile.isUpdated = true;
      // Checks before forwarding the request
      var err = false;
      profile.teamList.forEach((x) => {
        if (x.name == "") {
          console.log("list error");
          err = true;
        }
      });
      if (err) {
        return;
      }
      if (profile.tagList.length < 1) {
        console.log("taglist error");
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
        console.log("string error");
        return;
      }
      this.$store.dispatch("updateUserProfile", profile);
    },
    addMember() {
      this.userInfo.teamList.push({ name: "" });
    },
  },
  mounted() {
    if (this.storeUserInfo?.isUpdated) {
      this.$router.push("/");
    }
  },
  watch: {
    storeUserInfo: {
      handler: function () {
        if (this.storeUserInfo?.isUpdated) {
          this.$router.push("/");
        }
      },
    },
  },
  computed: {
    storeUserInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>
