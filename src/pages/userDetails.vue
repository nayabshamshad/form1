<template>
  <q-card
    class="my-card info sign-in user-details"
    style="padding-top: 0; padding-left: 0; padding-right: 0"
  >
    <q-card-section class="q-px-none q-pt-none">
      <q-tabs
        indicator-color="transparent"
        active-class="remove-border"
        align="justify"
        class="linkcolor q-mb-md admin-tabs user-detail-tab"
        v-model="tabs"
      >
        <q-tab
          name="user"
          style="border: none; border-radius: 0 0 8px 0"
          :label="$t('informatiiUtilizator')"
          ></q-tab>
        <q-tab
          v-if="
            selectedUser.status &&
            selectedUser?.isUpdated &&
            selectedUser.isAuthorized == true
          "
          name="events"
          :label="$t('intâlnirile')"
          style="border: none; border-radius: 0 0 0 8px"
        ></q-tab>
        <q-tab name="date" v-if="selectedUser.role === 'department'">
          {{ $t('data') }}</q-tab
        >
      </q-tabs>
      <q-tab-panels
        style="padding-left: 3rem; padding-right: 3rem"
        v-model="tabs"
      >
        <q-tab-panel name="user">
          <div class="container">
            <div class="container">
              <div class="flex justify-end q-pr-sm"></div>
              <div class="flex no-wrap">
                <div class="userImg relative">
                  <template
                    v-if="selectedUser.imgUrl && selectedUser.imgUrl !== ''"
                  >
                    <img
                      :src="selectedUser.imgUrl"
                      alt=""
                      style="cursor: pointer"
                      @click="showProfilePicModal = true"
                    />
                    <div
                      style="
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        display: block;
                        border: unset;
                        height: 20px;
                        width: 20px;
                      "
                    >
                      <q-btn
                        @click="downloadImg"
                        round
                        style="padding: 0.25rem; font-size: 6px"
                        size="xs"
                        color="green"
                      >
                        <q-icon
                          style="font-size: 1rem"
                          name="download"
                        ></q-icon>
                      </q-btn>
                    </div>
                  </template>

                  <div v-else>
                    <q-icon class="text-grey" name="photo_camera"></q-icon>
                  </div>
                </div>
                <div class="userInfoText">
                  <h4>{{ selectedUser.name }}</h4>
                  <p
                    :style="
                      selectedUser.status == true ||
                      selectedUser.role == 'department'
                        ? 'color: green'
                        : selectedUser.status === 'neither'
                        ? 'color: #FFBD3C;'
                        : 'color: red'
                    "
                  >
                    {{
                      selectedUser.status === true
                        ? "Activ"
                        : selectedUser.status === "neither"
                        ? "Activ (Fără Grupă)"
                        : "Inactiv"
                    }}
                  </p>
                  <div>
                    <p>{{ selectedUser.phoneNumber }}</p>
                    <p>{{ selectedUser.email }}</p>
                  </div>
                </div>
              </div>
              <q-btn
                round
                @click="$router.push('/edit-profile')"
                icon="edit_note"
                class="edit-btn"
              ></q-btn>
              <div class="infoRow">
                <div class="shadowed">
                  <!-- <div>
                    <h3>Etnie:</h3>
                    <span> {{ selectedUser.etnic }}</span>
                  </div> -->
                  <div>
                    <h3>{{ $t('gender') }}</h3>
                    <span> {{ selectedUser.gender }}</span>
                  </div>
                  <div>
                    <h3>{{ $t('dateofbirth') }}</h3>
                    <span>
                      {{
                        selectedUser.dateOfBirth
                          ? formatTheDate(selectedUser.dateOfBirth)
                          : ""
                      }}</span
                    >
                  </div>
                  <div>
                    <h3>{{ $t('shirtsize') }}</h3>
                    <span class="text-uppercase"> {{ selectedUser.size }}</span>
                  </div>
                </div>
                <div class="shadowed skills">
                  <h3>{{ $t('specializări') }}</h3>
                  <div>
                    <p v-for="(item, i) in selectedUser.tagList" :key="i">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="shadowed user-details q-mt-md">
                <div>
                  <h3>{{ $t('categorie') }}</h3>
                  <p>{{ selectedUser.category }}</p>
                  <!-- <p>Exploratori</p> -->
                </div>
                <div>
                  <h3>{{ $t('zonă') }}</h3>

                  <!-- <p>Brasov</p> -->
                  <p>{{ selectedUser.region }}</p>
                </div>
                <div>
                  <h3>{{ $t('comunitate') }}</h3>
                  <!-- <p>Betel</p> -->
                  <p>{{ selectedUser.state }}</p>
                </div>
                <div>
                  <h3>{{ $t('clubul') }}</h3>
                  <!-- <p>Iosua</p> -->
                  <p>{{ selectedUser.clubName }}</p>
                </div>
                <div>
                  <h3>{{ $t('anulinvestituriica') }}</h3>
                  <div>
                    <span>{{ $t('instructor') }}</span>
                    <span>
                      {{
                        selectedUser.Instructor !== ""
                          ? selectedUser.Instructor
                          : "-"
                      }}</span
                    >
                  </div>
                  <div>
                    <span>{{ $t('ghid') }}</span>
                    <span>
                      {{
                        selectedUser.Ghid !== "" ? selectedUser.Ghid : "-"
                      }}</span
                    >
                  </div>
                  <div>
                    <span>{{ $t('masterghid') }}</span>
                    <span>
                      {{
                        selectedUser.masterGhid !== ""
                          ? selectedUser.masterGhid
                          : "-"
                      }}</span
                    >
                  </div>
                </div>
              </div>
              <div
                v-show="selectedUser.status === true"
                class="shadowed q-mt-md"
              >
                <h2>Lista Copiilor</h2>
                <div class="children-list">
                  <div v-for="(member, i) in sortedTeam" :key="i">
                    <div class="section" :class="member.type ? 'special' : ''">
                      {{ member.name }}
                    </div>
                    <div class="flex">
                      <div>{{ member.year }}</div>
                      <div>{{ member.class }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-show="selectedUser.status === 'neither'"
                class="shadowed q-my-lg"
                style="padding-left: 2rem; padding-right: 2rem"
              >
                <h2>{{$t('Detalii')}}</h2>
              <q-card
                class="full-width q-mb-md"
                style="min-height: unset; max-width: unset"
              >
                  <q-card-section>
                    {{ selectedUser.reason }}
                  </q-card-section>
                </q-card>

              </div>
              <q-btn
                @click="$router.push('/')"
                round
                icon="chevron_left"
                class="back-btn"
              ></q-btn>
              <div
                v-if="
                  selectedUser.role === 'department' &&
                  departmentUserList.length > 0
                "
                class="table-container q-mt-lg"
              >
                <table style="width: 100%" class="user-list-table">
                  <thead>
                    <tr>
                      <th>{{ $t('name') }}</th>
                      <th>{{ $t('phone') }}</th>
                      <th>{{ $t('email') }}</th>
                    </tr>
                  </thead>
                  <tbody class="table-row">
                    <tr v-for="(user, i) in departmentUserList" :key="i">
                      <td>{{ user.name }}</td>
                      <td
                        class="hideMobile"
                        @click="callUser(user.phoneNumber)"
                      >
                        {{ user.phoneNumber }}
                      </td>
                      <td
                        class="showMobile"
                        @click="callUser(user.phoneNumber)"
                      >
                        <q-icon name="phone"></q-icon>
                      </td>
                      <td @click="mailUser(user.email)" class="hideMobile last">
                        {{ user.email }}
                      </td>
                      <td @click="mailUser(user.email)" class="showMobile last">
                        <q-icon name="email"></q-icon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel class="user-event-container" name="events">
          <div class="container">
            <div class="attendance-container shadowed">
              <div class="attendance-summary">
                <h4 style="color: #233975">{{ $t('prezenta') }}</h4>
                <div v-for="(student, index) in listOfAttendance" :key="index">
                  <div
                    class="shadowed"
                    style="border-radius: 0.3rem; margin-top: 0.5rem"
                  >
                    <div class="flex justify-space-between">
                      <span>
                        {{ student.name }}
                      </span>
                      <span>
                        {{ student.attendance }} /
                        {{ selectedUser.eventList.length }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="attendance-container shadowed">
              <div class="attendance-summary">
                <h4 style="color: #233975">{{ $t('listaIntalnirilor') }}</h4>
                <div class="eventlist">
                  <div
                    class="q-mb-md download-button-event q-mt-sm flex justify-between"
                    style="width: 80%"
                  ></div>
                </div>
                <q-btn
                  size="md"
                  color="green"
                  icon="download"
                  @click="exportFile('events')"
                  round
                  style="margin-bottom: 10px"
                ></q-btn>
                <div class="table-container">
                  <table
                    v-if="selectedUser.eventList.length > 0"
                    class="user-list-table lista"
                  >
                    <thead>
                      <tr>
                        <th>{{ $t('titlulIntâlnirii') }}</th>
                        <th style="text-align: center">{{ $t('dataIntalnirii') }}</th>
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
                        <td class="event-date-td">
                          {{ getBirthDate(item.date) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    v-else
                    class="shadowed q-mx-auto"
                    style="border-radius: 8px; width: 100%"
                  >
                    <h4
                      class="text-weight-bold linkcolor text-left"
                      style="opacity: 0.5"
                    >
                     {{ $t('nuExistaIntalniriInca') }}
                    </h4>
                  </div>
                </div>
                <div class="q-mt-md inline-pagination">
                  <div style="display: inline-flex">
                    <span>{{ $t('intalniriPePagina') }}</span>
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
                        @click="decreasePage"
                        :disabled="currentPage === 1"
                      ></q-btn>
                      <span> {{ currentPage }} </span>
                      <q-btn
                        size="sm"
                        round
                        text-color="white"
                        @click="increasePage"
                        no-caps
                        icon="chevron_right"
                        :disabled="currentPage >= maxPage"
                      ></q-btn>
                    </div>
                  </div>
                  <div>
                    <!-- <p>1-1 din 1</p> -->
                    <p>
                      {{ eventList.first }}-{{ eventList.last }} din
                      {{ eventList.total }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="date">
          <div>
            <div class="flex justify-center">
              <q-date v-model="dateModel" range></q-date>
            </div>
            <div
              class="flex"
              style="
                justify-content: flex-end;
                width: 70%;
                margin-top: 1rem;
                min-width: 200px;
              "
            >
              <q-btn
                round
                icon="check"
                color="green"
                :loading="dateSetting"
                @click="setDate"
              ></q-btn>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>

      <!-- Error Dialog -->
      <q-dialog v-model="errorDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ $t('alertă') }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ error }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat :label=" $t('ok')" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
  <q-dialog v-model="showProfilePicModal">
    <q-card>
      <q-card-section>
        <img class="zoomImg" :src="selectedUser.imgUrl" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import writeXlsxFile from "write-excel-file";

export default {
  data() {
    return {
      tabs: "user",
      dateModel: { from: "2020/07/08", to: "2020/07/17" },
      dateOfBirth: "",
      dataUser: {},
      isEdit: false,
      isSubmitting: false,
      errorDialog: false,
      dateSetting: false,
      error: "Te rugăm să reverifici datele introduse.",
      tagsInput: "",
      teamList: "",
      sizeOptions: ["S", "M", "L", "XL", "XXL"],
      resultsPerPage: 20,
      currentPage: 1,
      previewImage: "",
      file: null,
      showProfilePicModal: false,
    };
  },
  async mounted() {
    await this.pageSetup();

    if (this.$store.getters?.tabs) {
      this.tabs = this.$store.getters.tabs;
    }
  },
  methods: {
    downloadImg() {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = () => {
        const blob = xhr.response;
        const b = document.createElement("a");
        console.log(xhr.response);
        b.setAttribute(
          "download",
          this.selectedUser.name + blob.type.replace("image/", ".")
        );
        b.setAttribute("href", URL.createObjectURL(blob));
        b.click();
        b.remove();
      };
      xhr.open("GET", this.selectedUser.imgUrl);
      xhr.send();
    },
    removeImg() {
      this.previewImage = "";
    },
    async handleImageUpload(e) {
      const file = e.target.files[0];
      this.previewImage = URL.createObjectURL(file);
      this.file = file;
    },
    showImgInput() {
      this.$refs.imgInput.click();
    },
    async pageSetup() {
      if (this.selectedUser) {
        this.dataUser = JSON.parse(JSON.stringify(this.selectedUser));
        if (this.selectedUser.date) {
          this.dateModel.to = this.selectedUser.date.to;
          this.dateModel.from = this.selectedUser.date.from;
        }
      }
      this.tagsInput = this.dataUser?.tagList?.join(",");
      let teamList = [];
      this.dataUser?.teamList?.forEach((x) => {
        teamList.push(x);
      });
      this.teamList = teamList;
      if (this.dataUser?.dateOfBirth) {
        let dateArr = this.dataUser.dateOfBirth.split("/");
        this.dateOfBirth = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
      }
      if (this.selectedUser.date) {
        this.dateModel.to = this.selectedUser.date.to;
        this.dateModel.from = this.selectedUser.date.from;
      }
    },
    formatTheDate(x) {
      return x.split("/").reverse().join(".");
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
    async setDate() {
      if (this.dateSetting) {
        return;
      }
      if (!this.dateModel) {
        this.$q.notify({
          color: "red",
          message: this.$t('correctData'),
        });
        return;
      }
      this.dateSetting = true;
      await this.$store.dispatch("setDateRange", {
        date: this.dateModel,
        uid: this.selectedUser.uid,
      });
      this.dateSetting = false;
    },
    callUser(number) {
      if (number != "") {
        window.open(`tel: ${number}`);
      }
    },
    mailUser(email) {
      if (email != "") {
        window.open(`mailto: ${email}`);
      }
    },
    exportFile(fileName) {
      let arr = [
        [],
        [],
        [
          {
            value: "Short Summary - " + this.selectedUser.name,
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
            value: x.attendance + "/" + this.selectedUser.eventList.length,
            borderColor: "#000000",
          },
        ]);
      });
      writeXlsxFile(arr, {
        fileName: fileName + ".xlsx",
      });
    },
    getBirthDate(val) {
      let date = new Date(val);
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
    },

    showEventDetails(x) {
      this.$store.dispatch("selectEvent", x);
    },
  },
  computed: {
    sortedTeam() {
      let arr = [];
      let teamList = [];
      if (this.selectedUser.teamList.length > 0) {
        this.selectedUser.teamList.forEach((x) => {
          teamList.push(x);
        });
        arr = teamList.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      }
      return arr;
    },
    eventList() {
      let firstItem = (this.currentPage - 1) * this.resultsPerPage;
      const arr = this.selectedUser.eventList
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
        total: this.selectedUser.eventList.length,
        last:
          this.currentPage == this.maxPage
            ? this.selectedUser.eventList.length
            : this.currentPage > this.maxPage
            ? 1
            : firstItem + this.resultsPerPage,
      };
    },
    maxPage() {
      const arr = this.selectedUser.eventList;
      return Math.ceil(arr.length / this.resultsPerPage);
    },
    departmentUserList() {
      if (this.selectedUser.role === "department") {
        const arr = this.$store.getters.userList.filter((x) => {
          return x.department === this.selectedUser.departmentName;
        });
        return arr;
      } else {
        return [];
      }
    },
    selectedUser() {
      return this.$store.getters.selectedUser;
    },
    listOfAttendance() {
      let arr = [];
      this.selectedUser.teamList.forEach((x) => {
        arr.push({
          name: x.name,
          attendance: 0,
        });
      });
      this.selectedUser.eventList.forEach((x) => {
        x.attendanceList.forEach((y) => {
          const index = arr.findIndex((st) => {
            return st.name == y;
          });
          if (index > -1) {
            arr[index].attendance = arr[index].attendance + 1;
          }
        });
      });

      const sorted = arr.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      return sorted;
      // return arr;
    },
  },
  watch: {
    tabs: {
      handler: function () {
        this.$store.dispatch("setTabs", this.tabs);
      },
    },
    selectedUser: {
      handler: function () {
        this.dataUser = JSON.parse(JSON.stringify(this.selectedUser));
        if (this.dataUser?.dateOfBirth) {
          let dateArr = this.dataUser.dateOfBirth.split("/");
          this.dateOfBirth = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
        }
      },
    },
    resultsPerPage: {
      handler: function () {
        this.currentPage = 1;
      },
    },
  },
};
</script>
