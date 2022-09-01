<template>
  <div class="container">
    <button type="button" class="btn">Sign Out</button>
    <form class="form">
      <h2>Step 2</h2>

      <div>
        <label for="club"><b>Club:</b></label>
        <input
          type="text"
          v-model="userInfo.clubName"
          placeholder="Club"
          name="Club"
        />
      </div>
      <div>
        <label for="date"><b>Date:</b></label>
        <input
          type="date"
          v-model="userInfo.dateOfBirth"
          id="date"
          name="date"
        />
      </div>
      <div>
        <label for="tags"><b>Tags: </b>(comma separated, max 5)</label>
        <input type="text" v-model="tagsInput" placeholder="Tags" name="tags" />
      </div>
      <div class="cate-list">
        <label for="status"><b>Status:</b></label> &nbsp; &nbsp;
        <input
          type="radio"
          name="status"
          v-model="userInfo.status"
          :value="true"
        />
        Active
        <input
          type="radio"
          name="status"
          v-model="userInfo.status"
          :value="false"
        />Inactive
      </div>
      <div class="cate-list">
        <label for="telephone no."><b>Telephone No.</b></label>
        <input
          type="text"
          v-model="userInfo.phoneNumber"
          placeholder="+40......."
          name="phone number"
        />
      </div>
      <div class="cate-list">
        <label for="state"><b>State:</b></label>
        <input
          type="text"
          v-model="userInfo.state"
          placeholder="State"
          name="State"
        />
      </div>
      <div class="cate-list">
        <label for="Region"><b>Region:</b></label>
        <input
          type="text"
          v-model="userInfo.region"
          placeholder="Region"
          name="region"
        />
      </div>
      <div class="cate-list">
        <label for="Gender"><b>Gender:</b></label> &nbsp;
        <input
          v-model="userInfo.gender"
          type="radio"
          name="gender"
          value="Male"
        />
        Male
        <input
          v-model="userInfo.gender"
          type="radio"
          name="gender"
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
        <input
          type="text"
          v-model="userInfo.Instructor"
          placeholder="Instructor"
          name="Instructor"
        />
      </div>
      <div class="cate-list">
        <label for="Ghid"><b>Ghid:</b></label>
        <input
          type="text"
          v-model="userInfo.Ghid"
          placeholder="Ghid"
          name="Ghid"
        />
      </div>
      <div class="cate-list">
        <label for="Master Ghid"><b>Master Ghid:</b></label>
        <input
          type="text"
          v-model="userInfo.masterGhid"
          placeholder="Master Ghid"
          name="Master Ghid"
        />
      </div>
      <div class="cate-list">
        <label for="list"><b>List:</b></label>

        <div v-for="(item, index) in userInfo.teamList" :key="index">
          <input type="text" v-model="item.name" placeholder="" name="" />
        </div>
        <button @click="addMember" type="button" class="btn">+</button>
      </div>
      <div class="btn1">
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
if(this.tagsInput != '') {
  profile.tagList = this.tagsInput.split(",");
}
      profile.isUpdated = true;
      // Checks before forwarding the request
      profile.teamList.forEach((x) => {
        if (x.name == "") {
          console.log("list error");
        }
      });
      if (profile.tagList.length < 1) {
        console.log("taglist error");
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
      }
      // this.$store.dispatch("updateUserProfile", profile);
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
