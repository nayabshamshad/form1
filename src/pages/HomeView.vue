<template>

  <div class="container">
    <h2>Details</h2>
    <form class="form category-form">
      <div class="cate-list-home">
        <label for="club"><b>Name:</b></label>
        <span>{{ userData.name }}</span>
      </div>
      <div class="cate-list-home">
        <label for="club"><b>Club:</b></label>
        <span>{{ userData.clubName }}</span>
      </div>

      <div class="cate-list-home">
        <label for="date"><b>DoB:</b></label>
        <span>{{ userData?.dateOfBirth ? userData.dateOfBirth : "" }}</span>
      </div>
      <div class="cate-list-home">
        <label for="status"><b>Status:</b></label>
        <span>{{ userData.status ? "Active" : "InActive" }}</span>
      </div>
      <div class="cate-list-home chip-container">
        <label for="tags"><b>Tags:</b></label>
        <div v-if="userData.tagList">
          <span v-for="(item, index) in userData.tagList" :key="index">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="cate-list-home">
        <label for="telephone no."><b>Phone:</b></label>
        <span>{{ userData.phoneNumber }}</span>
      </div>
      <div class="cate-list-home">
        <label for="state"><b>State:</b></label>
        <span>{{ userData.state }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Region"><b>Region:</b></label>
        <span>{{ userData.region }} </span>
      </div>
      <div class="cate-list-home">
        <label for="Gender"><b>Gender:</b></label>
        <span>{{ userData.gender }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Etnic"><b>Etnic:</b></label>
        <span>{{ userData.etnic }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Category"><b>Category:</b></label>
        <span>{{ userData.category }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Size"><b>Size:</b></label>
        <span>{{ userData.size }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Instructor"><b>Instructor:</b></label>
        <span>{{ userData.Instructor }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Ghid"><b>Ghid:</b></label>
        <span>{{ userData.Ghid }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Master Ghid"><b>Master Ghid:</b></label>
        <span>{{ userData.masterGhid }}</span>
      </div>
    </form>
    <div class="home-detail">
      <h2>Team Members</h2>
      <div class="grid">
        <div
          class="grid-cell"
          v-for="(item, index) in userData.teamList"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
  },
  mounted() {},
  watch: {
    userData: {
      handler: function () {
        if (this.userData?.isUpdated == true) {
          return;
        } else if (this.userData?.isUpdated == false) {
          this.$router.push("/category-list");
        }
      },
    },
  },
  computed: {
    userData() {
      if (this.$store.getters.userData) {
        return this.$store.getters.userData;
      } else {
        return "";
      }
    },
  },
};
</script>
