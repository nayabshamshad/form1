<template>
  <div class="container">
    <form class="form category-form event-form">
      <!-- <div class="cate-list-home">
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
      </div> -->
      <div class="cate-list-home">
        <label for="name"><b>Name:</b></label>
        <span>{{ currentEvent.name }}</span>
      </div>
      <div class="cate-list-home">
        <label for="date"><b>Date:</b></label>
        <span>{{ currentEvent.date }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Description"><b>Description:</b></label>
        <span>{{ currentEvent.desc }}</span>
      </div>

      <div class="cate-list-home">
        <label><b>List of Students:</b></label>
        <div class="teamMember" v-for="(student, i) in memberList" :key="i">
          <span>
            {{ student }}
          </span>
          <input
            :value="student"
            :checked="currentEvent.attendanceList.includes(student)"
            type="checkbox"
            @change="addAttendance"
          />
        </div>
      </div>
      <div class="cate-list-home img-holder">
        <div
          v-for="(src, i) in currentEvent.imageList"
          :key="i"
          class="img-container"
        >
          <img :src="src" alt="" />
        </div>
      </div>
    </form>
    <div class="btn-container">
      <button class="btn" type="button" @click="submit">Submit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "vieweventView",
  components: {},
  data() {
    return {
      currentEvent: {
        name: "",
        desc: "",
        date: "",
        attendanceList: [],
        imageList: [],
      },
    };
  },
  methods: {
    addAttendance(e) {
      if (
        e.target.checked &&
        !this.currentEvent.attendanceList.includes(e.target.value)
      ) {
        this.currentEvent.attendanceList.push(e.target.value);
      } else if (
        !e.target.checked &&
        this.currentEvent.attendanceList.includes(e.target.value)
      ) {
        let index = this.currentEvent.attendanceList.indexOf(e.target.value);
        this.currentEvent.attendanceList.splice(index, 1);
      }
    },
    submit() {
      this.$store.dispatch("updateEvent", this.currentEvent);
    },
  },
  mounted() {
    this.currentEvent = {
      name: this.selectedEvent.name,
      date: this.selectedEvent.date,
      attendanceList: [...this.selectedEvent.attendanceList],
      desc: this.selectedEvent.desc,
      imageList: this.selectedEvent?.imageList,
    };
  },
  computed: {
    selectedEvent() {
      return this.$store.getters.selectedEvent;
    },
    memberList() {
      let list = [];
      this.$store.getters.userData?.teamList.forEach((x) => {
        list.push(x.name);
      });
      return list;
    },
  },
};
</script>
