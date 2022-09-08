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
      <span>
        <q-btn
          round
          color="green"
          size="sm"
          icon="download"
          v-if="userInfo?.eventList?.length > 0"
          @click="exportFile(userInfo.eventList, 'events')"
        ></q-btn>
        <q-btn
          color="purple"
          rounded
          type="button"
          class="btn"
          size="sm"
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
            field: (item) => formatDate(item.date),
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
import writeXlsxFile from "write-excel-file";

export default {
  name: "EventlistView",
  components: {},
  beforeMount() {
    if (this.userInfo.role == "admin") {
      this.$router.push("/");
    }
  },
  methods: {
    exportFile(data, fileName) {
      let header_row = [
        {
          value: "Event Name",
          fontWeight: "bold",
        },
        {
          value: "Event Description",
          fontWeight: "bold",
        },
        {
          value: "Event Date",
          fontWeight: "bold",
        },
        {
          value: "Attendance Count",
          fontWeight: "bold",
        },
      ];
      this.userInfo.teamList.forEach((x) => {
        header_row.push({
          fontWeight: "bold",
          value: x.name,
        });
      });
      let arr = [header_row];
      data.forEach((x) => {
        let eventArr = [
          { value: x.name },
          { value: x.desc },
          { value: x.date ? this.formatDate(x.date) : "" },
          { value: x.attendanceList.length },
        ];
        this.userInfo.teamList.forEach(y =>{
          eventArr.push({
            value: x.attendanceList.includes(y.name) ? 'Present' : 'Absent'
          })
        })
        arr.push(eventArr);
      });
      writeXlsxFile(arr, {
        fileName: fileName + ".xlsx",
      });
    },
    formatDate(e) {
      if (e && new Date(e)) {
        let date = new Date(e);
        let newDate;
        const monthList = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const month = monthList[date.getMonth()];

        newDate = date.getDate() + " " + month + ", " + date.getFullYear();
        return newDate;
      } else {
        return "";
      }
    },
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
