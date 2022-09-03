<template>
  <div class="container">
    <form class="form category-form event-form">
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
          <span
            style="
              text-transform: capitalize;
              font-style: italic;
              margin: 5px 0;
              width: 30%;
              border-bottom: 1px solid #555;
            "
          >
            {{ student }}
          </span>
          <span
            v-if="currentEvent.attendanceList.includes(student)"
            style="font-size: 20px; color: rgb(21, 76, 143)"
          >
            &check;
          </span>
          <span v-else style="font-size: 20px; color: rgb(153, 29, 44)"
            >&times;</span
          >
        </div>
      </div>
      <div
        class="cate-list-home img-holder"
        style="min-height: 120px; max-height: 200px"
      >
        <div
          v-for="(src, i) in currentEvent.imageList"
          :key="i"
          class="img-container"
        >
          <img :src="src" alt="" />
        </div>
      </div>
    </form>
    <!-- <div class="btn-container">
      <button class="btn" type="button" @click="submit">Submit</button>
    </div> -->
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
  methods: {},
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
