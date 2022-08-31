<template>
  <div class="container">
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
      <div class="radio">
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
      <div>
        <label for="telephone no."><b>Telephone No.</b></label>
        <input
          type="text"
          v-model="userInfo.phoneNumber"
          placeholder="+40......."
          name="phone number"
        />
      </div>
      <div>
        <label for="state"><b>State:</b></label>
        <input
          type="text"
          v-model="userInfo.state"
          placeholder="State"
          name="State"
        />
      </div>
      <div>
        <label for="Region"><b>Region:</b></label>
        <input
          type="text"
          v-model="userInfo.region"
          placeholder="Region"
          name="region"
        />
      </div>
      <div class="radio">
        <label for="Gender"><b>Gender:</b></label> &nbsp;
        <input
          v-model="userInfo.gender"
          type="radio"
          name="gender"
          value="male"
        />
        Male
        <input
          v-model="userInfo.gender"
          type="radio"
          name="gender"
          value="female"
        />
        Female
      </div>
      <div>
        <label for="Etnic"><b>Etnic:</b></label>
        <select v-model="userInfo.etnic">
          <option value="Etnic">Etnic</option>
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
      <div>
        <label for="Category"><b>Category:</b></label>
        <select v-model="userInfo.category">
          <option value="Category">Category</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
      </div>
      <div>
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
      <div>
        <label for="Instructor"><b>Instructor:</b></label>
        <input
          type="text"
          v-model="userInfo.Instructor"
          placeholder="Instructor"
          name="Instructor"
        />
      </div>
      <div>
        <label for="Ghid"><b>Ghid:</b></label>
        <input
          type="text"
          v-model="userInfo.Ghid"
          placeholder="Ghid"
          name="Ghid"
        />
      </div>
      <div>
        <label for="Master Ghid"><b>Master Ghid:</b></label>
        <input
          type="text"
          v-model="userInfo.masterGhid"
          placeholder="Master Ghid"
          name="Master Ghid"
        />
      </div>
      <div class="input">
        <label for="list"><b>List:</b></label>
        <input type="text" placeholder="wasiq" name="wasiq" />
        <button class="btn">+</button>
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
        teamList: [],
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
      profile.tagList = this.tagsInput.split(",");
      profile.isUpdated = true;
      this.$store.dispatch("updateUserProfile", profile);
    },
  },
  watch: {
    storeUserInfo: {
      handler: function () {
        if (this.storeUserInfo.isUpdated) {
          this.$router.push("/");
        }
      },
    },
  },
  computed: {
    storeUserInfo() {
      return { ...this.$store.getters.userData };
    },
  },
};
</script>
