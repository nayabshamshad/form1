<template>
  <q-tabs v-model="tabs">
    <q-tab name="user" label="User Information"></q-tab>
    <q-tab
      v-if="
        selectedUser.status &&
        selectedUser?.isUpdated &&
        selectedUser.isAuthorized == true
      "
      name="events"
      label="Events"
    ></q-tab>
  </q-tabs>
  <q-tab-panels v-model="tabs">
    <q-tab-panel name="user">
      <div v-if="!isEdit" class="container">
        <div class="flex" style="justify-content: flex-end; max-width: 75%">
          <q-btn
            round
            @click="isEdit = !isEdit"
            color="green"
            icon="edit"
          ></q-btn>
        </div>
        <div
          class="flex"
          style="justify-content: flex-end; max-width: 75%"
        ></div>
        <h2>
          {{
            selectedUser.isAuthorized == "pending"
              ? "Pending"
              : selectedUser.isAuthorized == true
              ? "Authorized"
              : "Rejected"
          }}
        </h2>
        <form class="form category-form home-only">
          <div v-if="selectedUser.name != ''" class="cate-list-home">
            <label for="club"><b>Name:</b></label>
            <span>{{ selectedUser.name }}</span>
          </div>
          <div v-if="selectedUser.clubName != ''" class="cate-list-home">
            <label for="club"><b>Club:</b></label>
            <span>{{ selectedUser.clubName }}</span>
          </div>

          <div v-if="selectedUser.dateOfBirth != ''" class="cate-list-home">
            <label for="date"><b>Birth Date:</b></label>
            <span>{{
              selectedUser?.dateOfBirth
                ? getBirthDate(selectedUser.dateOfBirth)
                : ""
            }}</span>
          </div>
          <div class="cate-list-home">
            <label for="status"><b>Status:</b></label>
            <span>{{ selectedUser.status ? "Active" : "InActive" }}</span>
          </div>
          <div
            v-if="selectedUser.tagList.length > 0"
            class="cate-list-home chip-container"
          >
            <label for="tags"><b>Specializations:</b></label>
            <div v-if="selectedUser.tagList">
              <span v-for="(item, index) in selectedUser.tagList" :key="index">
                {{ item }}
              </span>
            </div>
          </div>
          <div v-if="selectedUser.phoneNumber != ''" class="cate-list-home">
            <label for="telephone no."><b>Phone:</b></label>
            <span>{{ selectedUser.phoneNumber }}</span>
          </div>
          <div v-if="selectedUser.state != ''" class="cate-list-home">
            <label for="state"><b>Community:</b></label>
            <span>{{ selectedUser.state }}</span>
          </div>
          <div v-if="selectedUser.region != ''" class="cate-list-home">
            <label for="Region"><b>Area:</b></label>
            <span>{{ selectedUser.region }} </span>
          </div>
          <div v-if="selectedUser.gender != ''" class="cate-list-home">
            <label for="Gender"><b>Gender:</b></label>
            <span>{{ selectedUser.gender }}</span>
          </div>
          <div v-if="selectedUser.etnic != ''" class="cate-list-home">
            <label for="Etnic"><b>Ethnicity:</b></label>
            <span>{{ selectedUser.etnic }}</span>
          </div>
          <div v-if="selectedUser.category != ''" class="cate-list-home">
            <label for="Category"><b>Category:</b></label>
            <span>{{ selectedUser.category }}</span>
          </div>
          <div v-if="selectedUser.size != ''" class="cate-list-home">
            <label for="Size"><b>Size:</b></label>
            <span>{{ selectedUser.size }}</span>
          </div>
          <div v-if="selectedUser.Instructor != ''" class="cate-list-home">
            <label for="Instructor"><b>Year Instructor:</b></label>
            <span>{{ selectedUser.Instructor }}</span>
          </div>
          <div v-if="selectedUser.Ghid != ''" class="cate-list-home">
            <label for="Ghid"><b>Year Ghid:</b></label>
            <span>{{ selectedUser.Ghid }}</span>
          </div>
          <div v-if="selectedUser.masterGhid != ''" class="cate-list-home">
            <label for="Master Ghid"><b>Year Master Ghid:</b></label>
            <span>{{ selectedUser.masterGhid }}</span>
          </div>
        </form>
        <div
          v-if="selectedUser.status && selectedUser.teamList.length > 0"
          class="home-detail"
        >
          <h2>Student List</h2>
          <div class="grid">
            <div
              class="grid-cell"
              v-for="(item, index) in selectedUser.teamList"
              :key="index"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container">
        <div class="flex" style="justify-content: flex-end; max-width: 75%">
          <q-btn
            round
            @click="isEdit = !isEdit"
            color="green"
            icon="edit"
          ></q-btn>
        </div>
        <form class="form">
          <h2>Edit Details</h2>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.clubName"
              placeholder="Club"
              name="Club"
              label="Club"
              label-color="black"
            />
          </div>
          <div class="cate-list">
            <label
              style="
                margin-bottom: 0;
                margin-top: 1rem;
                display: block;
                font-size: 16px;
                font-weight: 500;
              "
              >Date of Birth</label
            >
            <!-- <q-input

              label-color="black"
              v-model="dataUser.dateOfBirth"
              type="date"
            ></q-input> -->

            <q-input
              filled
              v-model="dateOfBirth"
              mask="##/##/####"
              @focus="openModal"
            >
              <template v-slot:append>
                <q-icon
                  @click="openModal"
                  ref="dateIcon"
                  name="event"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="dataUser.dateOfBirth"
                      @update:model-value="handleDateChange"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="tagsInput"
              placeholder="Comma seperated"
              name="tags"
              label="Speicalizations you can teach (Max 5)"
              label-color="black"
            />
          </div>

          <div class="cate-list">
            <q-input
              type="tel"
              v-model="dataUser.phoneNumber"
              placeholder="+40......."
              name="phone number"
              mask="+40 #### #####"
              label="Phone Number"
              label-color="black"
            />
          </div>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.state"
              placeholder="Community Name"
              label="Community"
              label-color="black"
            />
          </div>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.region"
              placeholder="Enter Area Name"
              label="Area"
              label-color="black"
            />
          </div>

          <div class="cate-list">
            <q-select
              :options="['Romanian', 'Hungarian']"
              label="Ethnicity"
              label-color="black"
              v-model="dataUser.etnic"
            />
          </div>
          <div class="cate-list">
            <q-select
              v-model="dataUser.category"
              label="Category"
              label-color="black"
              :options="['Licurici', 'Companioni', 'Exploratori']"
            />
          </div>
          <div class="cate-list">
            <q-select
              v-model="dataUser.size"
              :options="sizeOptions"
              label-color="black"
              label="Size"
            />
          </div>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.Instructor"
              label-color="black"
              label="Year of investment as Instructor"
              placeholder="YYYY"
              name="Instructor"
              mask="####"
            />
          </div>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.Ghid"
              placeholder="YYYY"
              label="Year of investment as Ghid"
              label-color="black"
              mask="####"
            />
          </div>
          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.masterGhid"
              placeholder="YYYY"
              mask="####"
              label-color="black"
              label="Year of investment as Master Guide"
            />
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding-right: 2rem;
              margin: 1rem 0;
            "
          >
            <div>
              <label for="status"><b>Status:</b></label>
              <div>
                <q-radio
                  v-model="dataUser.status"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  :val="true"
                  label="Active"
                />
                <q-radio
                  v-model="dataUser.status"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  :val="false"
                  label="InActive"
                />
              </div>
            </div>
            <div>
              <label for="Gender"><b>Gender:</b></label>
              <div>
                <q-radio
                  v-model="dataUser.gender"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="Male"
                  label="Male"
                />
                <q-radio
                  v-model="dataUser.gender"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="Female"
                  label="Female"
                />
              </div>
            </div>
          </div>
          <div v-if="dataUser.status" class="cate-list">
            <div
              class="flex"
              style="justify-content: flex-end; padding: 0 30%"
            ></div>
            <div style="flex-wrap: nowrap" class="flex justify-space-between">
              <label for="list"><b>Team Members:</b></label>
              <q-btn @click="addMember" type="button" round color="purple"
                >+</q-btn
              >
            </div>

            <div
              v-for="(item, index) in teamList"
              :key="index"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
            >
              <q-input
                type="text"
                v-model="item.name"
                placeholder="Member Name"
                style="width: 70%"
              />
              <q-btn
                @click="removeMember(index)"
                type="button"
                round
                color="red"
                style="width: 35px; height: 35px"
                >-</q-btn
              >
            </div>
          </div>
          <div class="submit">
            <q-btn
              type="button"
              :loading="isSubmitting"
              @click="submit"
              color="purple"
              class="signupbtn"
              >Submit</q-btn
            >
          </div>
        </form>
      </div>
    </q-tab-panel>
    <q-tab-panel name="events">
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
                  {{ student.attendance }} / {{ selectedUser.eventList.length }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="eventlist">

          <span>
            <q-btn
            size="sm"
            color="green"
            icon="download"
            @click="exportFile(selectedUser.eventList, 'events')"
            round
          ></q-btn
        ></span>
          </div>
        <div style="margin-top: 1rem" class="flex justify-center">
          <q-table
            v-if="selectedUser.eventList?.length > 0"
            style="width: 80%"
            title="Event List"
            :rows="selectedUser.eventList"
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
                field: (item) => getBirthDate(item.date),
              },
            ]"
            flat
            dark
            bordered
            @row-click="showEventDetails"
          />
          <div v-else style="width: 60%" class="flex justify-center">
            This user does not have any events
          </div>
        </div>
      </div>
    </q-tab-panel>
  </q-tab-panels>

  <!-- Error Dialog -->
  <q-dialog v-model="errorDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ error }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import writeXlsxFile from "write-excel-file";

export default {
  data() {
    return {
      tabs: "user",
      dateOfBirth: "",
      dataUser: {},
      isEdit: false,
      isSubmitting: false,
      errorDialog: false,
      error: "There was an unexpected error",
      tagsInput: "",
      teamList: "",
      sizeOptions: [
        "x-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "XXX-Large",
      ],
    };
  },
  mounted() {
    if (this.selectedUser) {
      this.dataUser = JSON.parse(JSON.stringify(this.selectedUser));
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
      this.selectedUser.teamList.forEach((x) => {
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
          { value: x.date ? this.getBirthDate(x.date) : "" },
          { value: x.attendanceList.length },
        ];
        this.selectedUser.teamList.forEach((y) => {
          eventArr.push({
            value: x.attendanceList.includes(y.name) ? "Present" : "Absent",
          });
        });
        arr.push(eventArr);
      });
      writeXlsxFile(arr, {
        fileName: fileName + ".xlsx",
      });
    },
    openModal() {
      this.$refs.dateIcon.$el.click();
      this.$refs.dateIcon.$el.focus();
    },
    handleDateChange(e, d, c) {
      let day = `${c.day}`.length == 1 ? "0" + c.day : c.day;
      let month = `${c.month}`.length == 1 ? "0" + c.month : c.month;
      this.dateOfBirth = day + "/" + month + "/" + c.year;
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
    async submit() {
      if (this.isSubmitting) {
        return;
      }

      this.isSubmitting = true;
      let profile;

      profile = { ...this.dataUser };
      if (this.tagsInput != "") {
        if (this.tagsInput.split(",").length > 5) {
          this.error = "You can not select more than five tags!";
          this.errorDialog = true;
          this.isSubmitting = false;
          return;
        }
        profile.tagList = this.tagsInput.split(",");
      }
      if (profile.phoneNumber.length !== 14) {
        this.$q.notify({
          message: "Phone Number must be formatted correctly",
          color: "red",
        });
        this.isSubmitting = false;
        return;
      }

      profile.isUpdated = true;
      if (!profile.status) {
        profile.teamList = [];
      }
      // Checks before forwarding the request
      var err = false;
      if (profile.status) {
        profile.teamList.forEach((x) => {
          if (x.name == "") {
            err = true;
          }
        });
      }
      if (err) {
        this.isSubmitting = false;
        this.errorDialog = true;
        this.error = "Please format your team member list correctly";
        return;
      }
      if (profile.tagList.length < 1) {
        this.errorDialog = true;
        this.error = "You need atleast one tag";
        this.isSubmitting = false;
        return;
      }
      if (
        profile.dateOfBirth == "" ||
        profile.region == "" ||
        profile.state == "" ||
        profile.gender == "" ||
        profile.etnic == "" ||
        profile.clubName == "" ||
        profile.category == "" ||
        profile.size == ""
      ) {
        this.errorDialog = true;
        this.error = "Please recheck your form and fill all details correctly";
        this.isSubmitting = false;
        return;
      }
      // if (
      //   profile.Instructor.length !== 4 ||
      //   profile.Ghid.length !== 4 ||
      //   profile.masterGhid.length !== 4
      // ) {
      //   this.$q.notify({
      //     color: "red",
      //     message: "Years must be formatted correctly",
      //   });
      //   this.isSubmitting = false;
      //   return;
      // }
      if (
        profile.Instructor > profile.Ghid ||
        profile.Ghid > profile.masterGhid ||
        profile.Instructor > profile.masterGhid
      ) {
        this.$q.notify({
          color: "red",
          message:
            "Please recheck the order of your investments, instructor investment cannot be done before Ghid and master Ghid cannot be completed before Ghid",
        });
        this.isSubmitting = false;
        return;
      }
      await this.$store.dispatch("updateUserProfileAdmin", profile);
      this.isSubmitting = false;
      this.$router.push("/");
    },
    addMember() {
      this.teamList.push({ name: "" });
    },
    removeMember(i) {
      if (this.teamList.length > 1) {
        this.teamList.splice(i, 1);
      } else {
        this.errorDialog = true;
        this.error = "Must have at least one team member";
      }
    },
    showEventDetails(e, i, d) {
      this.$store.dispatch("selectEvent", i);
    },
  },
  computed: {
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
          arr[index].attendance = arr[index].attendance + 1;
        });
      });
      return arr;
    },
  },
  watch: {
    selectedUser: {
      handler: function () {
        this.dataUser = JSON.parse(JSON.stringify(this.selectedUser));
        if (this.dataUser?.dateOfBirth) {
          let dateArr = this.dataUser.dateOfBirth.split("/");
          this.dateOfBirth = dateArr[2] + "/" + dateArr[1] + "/" + dateArr[0];
        }
      },
    },
  },
};
</script>
