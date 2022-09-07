<template>
  <div class="container">
    <div class="attendance-container">
      <div class="attendance-summary">
        <h5 style="font-size: 18px"><span>Summary</span></h5>
        <div v-for="(student, index) in listOfAttendance" :key="index">
          <div class="flex justify-space-around">
            <span>
              {{ student.name }}
            </span>
            <span>
              {{ student.attendance }} / {{ userInfo.eventList.length }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="eventlist">
      <span
        ><q-btn
          color="purple"
          rounded
          type="button"
          class="btn"
          size='sm'
          @click="$router.push('/add-event')"
        >
          Add Event
        </q-btn></span
      >
    </div>
    <div style="margin-top: 1rem" class="flex justify-center">
      <q-table
        v-if="userInfo.eventList?.length > 0"
        style="width: 80%"
        title="Event List"
        :rows="userInfo.eventList"
        :columns="[
          {
            name: 'name',
            label: 'Event Name',
            required: true,
            align: 'center',
            field: (item) => item.name,
          },
          {
            name: 'date',
            label: 'Date of Event',
            required: true,
            align: 'center',
            field: (item) => item.date,
          },
        ]"
        flat
        dark
        bordered
        @row-click="showEventDetails"
      />
      <div v-else style="width: 60%">Your Events will show here</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventlistView",
  components: {},
  beforeMount() {
    if (this.userInfo.role == "admin") {
      this.$router.push("/");
    }
  },
  methods: {
    showEventDetails(e, i, d) {
      this.$store.dispatch("selectEvent", i);
    },
  },
  computed: {
    userInfo() {
      return this.$store.getters.userData;
    },
    listOfAttendance() {
      let arr = [];
      console.log(this.userInfo);
      this.userInfo.teamList.forEach((x) => {
        arr.push({
          name: x.name,
          attendance: 0,
        });
      });
      this.userInfo.eventList.forEach((x) => {
        x.attendanceList.forEach((y) => {
          const index = arr.findIndex((st) => {
            return st.name == y;
          });
          arr[index].attendance = arr[index].attendance + 1;
        });
      });
      return arr;
    },
  },
};
</script>
