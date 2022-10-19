<template>
  <q-card
    class="center-card q-px-lg info client-event-list"
    style="padding-top: 3rem"
  >
    <div class="container">
      <div class="attendance-container shadowed">
        <div class="attendance-summary">
          <h4 style="color: #233975">Prezența</h4>
          <div v-for="(student, index) in listOfAttendance" :key="index">
            <div
              class="shadowed"
              style="border-radius: 0.3rem; margin-top: 1rem"
            >
              <div class="flex justify-space-between">
                <span>
                  {{ student.name }}
                </span>
                <span>
                  {{ student.attendance }} /
                  {{ userInfo.eventList.length }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="attendance-container shadowed">
        <div class="attendance-summary">
          <h4 style="color: #233975">Lista întâlnirilor</h4>
          <div class="eventlist">
            <div
              class="q-mt-sm q-mb-md flex justify-between q-mx-auto"
              style="width: 100%"
            >
              <q-btn
                size="md"
                color="green"
                icon="download"
                @click="exportFile('events')"
                round
              ></q-btn>
              <div>
                <span
                  style="font-size: 12px"
                  class="linkcolor q-pr-sm font-weight-light subtitle1 text-left"
                  >Adaugă întâlnire</span
                >
                <q-btn
                  class="bg-linkcolor"
                  icon="add"
                  round
                  @click="$router.push('/add-event')"
                />
              </div>
            </div>
          </div>
          <div class="table-container">
            <table
              v-if="eventList.arr.length > 0"
              class="user-list-table lista"
            >
              <thead>
                <tr>
                  <th>Titlul îtâlnirii</th>
                  <th style="text-align: center">Data întâlnirii</th>
                </tr>
              </thead>
              <tbody class="table-row">
                <tr
                  class="shadowed tr"
                  v-for="(item, i) in eventList.arr"
                  :key="i"
                  @click="showEventDetails(item)"
                >
                  <td>{{ item.name }}</td>
                  <td class="event-date-td">{{ formatDate(item.date) }}</td>
                </tr>
              </tbody>
            </table>
            <div
              v-else
              class="shadowed q-mx-auto"
              style="border-radius: 8px; width: 90%"
            >
              <h4
                class="text-weight-bold linkcolor text-left"
                style="opacity: 0.5"
              >
                Nu există întâlniri încă
              </h4>
            </div>
          </div>
          <div class="q-mt-md inline-pagination">
            <div style="display: inline-flex">
              <span>Întâlniri pe pagină</span>
              <select class="paginationSelect" v-model="resultsPerPage">
                <option :value="5">5</option>
                <option :value="10">10</option>
                <option :value="20">20</option>
                <option :value="50">50</option>
              </select>
            </div>
            <div>
              <div class="pagination-buttons">
                <q-btn
                  size="sm"
                  round
                  text-color="white"
                  icon="chevron_left"
                  no-caps
                  :disabled="currentPage === 1"
                  @click="decreasePage"
                ></q-btn>
                <span> {{ currentPage }} </span>
                <q-btn
                  size="sm"
                  round
                  text-color="white"
                  no-caps
                  icon="chevron_right"
                  @click="increasePage"
                  :disabled="currentPage >= maxPage"
                ></q-btn>
              </div>
            </div>
            <div>
              <p>
                {{ eventList.first }}-{{ eventList.last }} din
                {{ eventList.total }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>
<script>
import writeXlsxFile from "write-excel-file";

export default {
  name: "EventlistView",
  components: {},
  data() {
    return {
      resultsPerPage: 20,
      currentPage: 1,
    };
  },
  beforeMount() {
    if (this.userInfo.role == "admin") {
      this.$router.push("/");
    }
  },
  async mounted() {
    console.log('asdad')
    await this.$store.dispatch("getUserData");
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
    showEventDetails(i) {
      this.$store.dispatch("selectEvent", i);
    },
    increasePage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage = this.currentPage + 1;
      }
    },
    decreasePage() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
  },
  computed: {
    eventList() {
      let firstItem = (this.currentPage - 1) * this.resultsPerPage;
      const arr = this.userInfo.eventList
        .filter((x, i) => {
          return i >= firstItem && i < firstItem + this.resultsPerPage;
        })
        .sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      return {
        arr: arr,
        first: firstItem + 1,
        total: this.userInfo.eventList.length,
        last:
          this.currentPage == this.maxPage
            ? this.userInfo.eventList.length
            : this.currentPage > this.maxPage
            ? 1
            : firstItem + this.resultsPerPage,
      };
    },
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
      arr = arr.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      this.userInfo.eventList.forEach((x) => {
        x.attendanceList.forEach((y) => {
          const index = arr.findIndex((st) => {
            return st.name == y;
          });
          if (index > -1) {
            arr[index].attendance = arr[index].attendance + 1;
          }
        });
      });
      return arr;
    },
    maxPage() {
      const arr = this.userInfo.eventList;
      return Math.ceil(arr.length / this.resultsPerPage);
    },
  },
};
</script>
