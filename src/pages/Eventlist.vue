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
          @click="exportFile('events')"
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
    exportFile(fileName) {
      let arr = [
        [],
        [],
        [
          {
            value: "Short Summary - " + this.userInfo.name,
            span: 2,
            align: "center",
            borderColor: "#000000",
            rightBorderColor: "#58eb34",
          },
        ],
        [
          { value: "Numele copilului", borderColor: "#000000" },
          {
            value: "Numar de prezențe/Numar de întâlniri",
            borderColor: "#000000",
          },
        ],
      ];

      this.listOfAttendance.forEach((x) => {
        arr.push([
          {
            value: x.name,
            borderColor: "#000000",
          },
          {
            value: x.attendance + "/" + this.userInfo.eventList.length,
            borderColor: "#000000",
          },
        ]);
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
