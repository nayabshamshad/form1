<template>
  <q-tabs v-model="tabs">
    <q-tab name="user" label="Informații utilizator"></q-tab>
    <q-tab
      v-if="
        selectedUser.status &&
        selectedUser?.isUpdated &&
        selectedUser.isAuthorized == true
      "
      name="events"
      label="Întâlnirile"
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
            v-show="selectedUser.role !== 'department'"
            icon="edit"
          ></q-btn>
        </div>
        <div
          class="flex"
          style="justify-content: flex-end; max-width: 75%"
        ></div>
        <h2>
          {{
            selectedUser.isAuthorized === "pending"
              ? "În așteptare"
              : selectedUser.role === "department"
              ? "Department Admin"
              : selectedUser.isAuthorized == true
              ? "Autorizat"
              : "Refuzat"
          }}
        </h2>
        <div class="add-img" v-if="selectedUser.imgUrl && selectedUser.imgUrl !== ''">
          <img :src="selectedUser.imgUrl" />
        </div>
        <form class="form category-form home-only">
          <div v-if="selectedUser.name != ''" class="cate-list-home">
            <label for="club"><b>Nume/Prenume:</b></label>
            <span>{{ selectedUser.name }}</span>
          </div>
          <div v-if="selectedUser.email !== ''" class="cate-list-home">
            <label for="email"><b>E-mail:</b></label>
            <span  style="padding-left: 0; word-wrap: break-word;" class="text-primary cursor-pointer link-text" @click="mailUser(selectedUser.email)">{{ selectedUser.email }}</span>
          </div>

          <div v-if="selectedUser.phoneNumber != ''" class="cate-list-home">
            <label for="telephone no."><b>Număr de telefon:</b></label>
            <span>{{ selectedUser.phoneNumber }}</span>
          </div>

       <div v-if="selectedUser.etnic != ''" class="cate-list-home">
            <label for="Etnic"><b>Etnie:</b></label>
            <span>{{ selectedUser.etnic }}</span>
          </div>

          <div v-if="selectedUser.gender != ''" class="cate-list-home">
            <label for="Gender"><b>Sex:</b></label>
            <span>{{ selectedUser.gender }}</span>
          </div>

          <div v-if="selectedUser.dateOfBirth != ''" class="cate-list-home">
            <label for="date"><b>Data nașterii:</b></label>
            <span>{{
              selectedUser?.dateOfBirth
                ? getBirthDate(selectedUser.dateOfBirth)
                : ""
            }}</span>
          </div>
          
          <div v-if="selectedUser.size != ''" class="cate-list-home">
            <label for="Size"><b>Mărime tricou:</b></label>
            <span>{{ selectedUser.size }}</span>
          </div>

          <div v-if="selectedUser.category != ''" class="cate-list-home">
            <label for="Category"><b>Categorie:</b></label>
            <span>{{ selectedUser.category }}</span>
          </div>

          <div v-if="selectedUser.region != ''" class="cate-list-home">
            <label for="Region"><b>Zona:</b></label>
            <span>{{ selectedUser.region }} </span>
          </div>

          <div v-if="selectedUser.state != ''" class="cate-list-home">
            <label for="state"><b>Comunitate:</b></label>
            <span>{{ selectedUser.state }}</span>
          </div>

          <div v-if="selectedUser.clubName != ''" class="cate-list-home">
            <label for="club"><b>Clubul:</b></label>
            <span>{{ selectedUser.clubName }}</span>
          </div>

          <div v-if="selectedUser.role !== 'department'" class="cate-list-home">
            <label for="status"><b>Status:</b></label>
            <span>{{ selectedUser.status ? "Activ" : "InActiv" }}</span>
          </div>
          <div
            v-if="selectedUser.tagList.length > 0"
            class="cate-list-home chip-container"
          >
            <label for="tags"><b>Specializări:</b></label>
            <div v-if="selectedUser.tagList">
              <span v-for="(item, index) in selectedUser.tagList" :key="index">
                {{ item }}
              </span>
            </div>
          </div>
  
          <div v-if="selectedUser.Instructor !== '' || selectedUser.Ghid !== '' || selectedUser.masterGhid !== ''" class="cate-list-home">
            <label for="Instructor"><b>Anul investiturii ca:</b></label>
            <span><b>Instructor:</b> {{ selectedUser.Instructor }}</span>
            <span><b>Ghid:</b> {{ selectedUser.Ghid }}</span>
            <span><b>Master Ghid:</b> {{ selectedUser.masterGhid }}</span>
          </div>
        </form>
        <div class="table-container">
          <table
            v-if="
              selectedUser.role === 'department' &&
              departmentUserList.length > 0
            "
            class="user-list-table"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in departmentUserList" :key="i">
                <td>{{ user.name }}</td>
                <td class="hideMobile" @click="callUser(user.phoneNumber)">
                  {{ user.phoneNumber }}
                </td>
                <td class="showMobile" @click="callUser(user.phoneNumber)">
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

        <div
          v-if="
            selectedUser.status &&
            selectedUser.teamList.length > 0 &&
            selectedUser.role !== 'department'
          "
          class="home-detail"
        >
          <h2>Lista copiilor</h2>
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
          <h2>Editare informații</h2>

          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.name"
              placeholder="Nume/Prenume"
              name="name"
              label="Nume/Prenume:"
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
              label="Număr de telefon:"
              label-color="black"
            />
          </div>

          <div class="cate-list">
            <q-select
              :options="['Română', 'Maghiară']"
              label="Etnie:"
              label-color="black"
              v-model="dataUser.etnic"
            />
          </div>

          <div>
            <label for="Gender"><b>Sex:</b></label>
            <div>
              <q-radio
                v-model="dataUser.gender"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="Male"
                label="Masculin"
              />
              <q-radio
                v-model="dataUser.gender"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="Female"
                label="Femenin"
              />
            </div>
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
              >Data nașterii:</label
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
            <q-select
              v-model="dataUser.size"
              :options="sizeOptions"
              label-color="black"
              label="Mărime tricou:"
            />
          </div>

          <div class="cate-list">
            <q-select
              v-model="dataUser.category"
              label="Categorie:"
              label-color="black"
              :options="['Licurici', 'Companioni', 'Exploratori']"
            />
          </div>

          <div class="cate-list">
            <q-input
              type="text"
              v-model="dataUser.region"
              placeholder="ex. Târgu Mureș"
              label="Zona:"
              label-color="black"
            />
          </div>

<div class="cate-list">
  <q-input
    type="text"
    v-model="dataUser.state"
    placeholder="Comunitate"
    label="Comunitate:"
    label-color="black"
  />
</div>

<div class="cate-list">
  <q-input
    type="text"
    v-model="dataUser.clubName"
    placeholder="Clubul"
    name="Club"
    label="Clubul:"
    label-color="black"
  />
</div>

<div class="cate-list">
  <q-input
    type="text"
    v-model="tagsInput"
    placeholder="Comma seperated"
    name="tags"
    label="Specializări (max 5):"
    label-color="black"
  />
</div>

<div class="cate-list">
  <q-input
    type="text"
    v-model="dataUser.Instructor"
    label-color="black"
    label="Anul investiturii ca Instructor:"
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
    label="Anul investiturii ca Ghid:"
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
    label="Anul investiturii ca Master Ghid:"
  />
</div>
<div
  style="
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
    margin: 1rem 0;
  "
></div>

<div>
  <label for="status"><b>Status:</b></label>
  <div>
    <q-radio
      v-model="dataUser.status"
      checked-icon="task_alt"
      unchecked-icon="panorama_fish_eye"
      :val="true"
      label="Activ"
    />
    <q-radio
      v-model="dataUser.status"
      checked-icon="task_alt"
      unchecked-icon="panorama_fish_eye"
      :val="false"
      label="InActiv"
    />
  </div>
</div>

<div v-if="dataUser.status" class="cate-list">
  <div
    class="flex"
    style="justify-content: flex-end; padding: 0 30%"
  ></div>

  <div style="flex-wrap: nowrap" class="flex justify-space-between">
    <label for="list"><b>Lista copiilor:</b></label>
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
    >Trimite</q-btn
  >
</div>
</form>
</div>
</q-tab-panel>
<q-tab-panel name="events">
<div class="container">
<div class="attendance-container">
<div class="attendance-summary">
  <h5 style="font-size: 18px"><span>Prezența</span></h5>
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
    @click="exportFile('events')"
    round
  ></q-btn
></span>
</div>
<div style="margin-top: 1rem" class="flex justify-center">
<q-table
  v-if="selectedUser.eventList?.length > 0"
  style="width: 80%"
  title="Lista întâlnirilor"
  :rows="selectedUser.eventList"
  :columns="[
    {
      name: 'name',
      label: 'Tema întâlnirii',
      required: true,
      align: 'center',
      field: (item) => item.name,
    },
    {
      name: 'date',
      label: 'Data întâlnirii',
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
  Acest utilizator nu are nicio întâlnirea inregistrată
</div>
</div>
</div>
</q-tab-panel>
</q-tab-panels>

<!-- Error Dialog -->
<q-dialog v-model="errorDialog">
<q-card>
<q-card-section>
<div class="text-h6">Alertă</div>
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
      error: "Te rugăm să reverifici datele introduse.",
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
          this.error = "Nu poți să introduci mai mult de 5 specializări!";
          this.errorDialog = true;
          this.isSubmitting = false;
          return;
        }
        profile.tagList = this.tagsInput.split(",");
      }
      if (profile.phoneNumber.length !== 14) {
        this.$q.notify({
          message: "Te rugăm să introduci un număr de telefon valid.",
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
        this.error = "Verificați lista cu copii.";
        return;
      }
      if (profile.tagList.length < 1) {
        this.errorDialog = true;
        this.error = "Trebuie să introduci minim o specializare";
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
        this.error = "Te rugăm să reverifici datele introduse.";
        this.isSubmitting = false;
        return;
      }
      if (
        (profile.Instructor.length !== 4 && profile.Instructor != "") ||
        (profile.Ghid.length !== 4 && profile.Ghid != "") ||
        (profile.masterGhid.length !== 4 && profile.masterGhid != "")
      ) {
        this.$q.notify({
          color: "red",
          message: "Formatul anului introdus este incorect.",
        });
        this.isSubmitting = false;
        return;
      }
      if (
        (profile.Instructor > profile.Ghid &&
          profile.Instructor != "" &&
          profile.Ghid != "") ||
        (profile.Ghid > profile.masterGhid &&
          profile.Ghid != "" &&
          profile.masterGhid != "") ||
        (profile.Instructor > profile.masterGhid &&
          profile.instructor != "" &&
          profile.masterGhid != "")
      ) {
        this.$q.notify({
          color: "red",
          message:
            "Te rugăm să verifici ordinea investiturii ca Instructor, Ghid, Master Ghid.",
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
        this.error = "Trebuie să completezi lista cu copii.";
      }
    },
    showEventDetails(e, i, d) {
      this.$store.dispatch("selectEvent", i);
    },
  },
  computed: {
    departmentUserList() {
      if (this.selectedUser.role === "department") {
        return this.$store.getters.userList.filter((x) => {
          return x.department === this.selectedUser.departmentName;
        });
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
