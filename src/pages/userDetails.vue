<template>
  <q-tabs v-model="tabs">
    <q-tab name="user" label="User Information"></q-tab>
    <q-tab v-if="selectedUser.status && selectedUser?.isUpdated && selectedUser.isAuthorized == true" name="events" label="Events"></q-tab>
  </q-tabs>
  <q-tab-panels v-model="tabs">
    <q-tab-panel name="user">
      <div class="container">
        <div
          class="flex"
          style="justify-content: flex-end; max-width: 75%"
        ></div>
        <h2>{{selectedUser.isAuthorized == 'pending' ? 'Pending' : selectedUser.isAuthorized == true ? 'Authorized' : 'Rejected'}}</h2>
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
              selectedUser?.dateOfBirth ? selectedUser.dateOfBirth : ""
            }}</span>
          </div>
          <div class="cate-list-home">
            <label for="status"><b>Status:</b></label>
            <span>{{ selectedUser.status ? "Active" : "InActive" }}</span>
          </div>
          <div v-if="selectedUser.tagList.length > 0" class="cate-list-home chip-container">
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
        <div v-if="selectedUser.status && selectedUser.teamList.length > 0" class="home-detail">
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
            field: (item) => item.date,
          },
        ]"
        flat
        dark
        bordered
        @row-click="showEventDetails"
      />
      <div v-else style="width: 60%" class="flex justify-center">This user does not have any events</div>
    </div>
  </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  data() {
    return {
      tabs: "user",
    };
  },
  methods: {
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
};
</script>
