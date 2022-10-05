<template>
  <q-card class="my-card full-height info sign-in">
    <q-card-section>
      <q-tabs class="linkcolor" v-model="tabs">
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
        <q-tab name="date" v-if="selectedUser.role === 'department'">
          Data</q-tab
        >
      </q-tabs>
      <q-tab-panels v-model="tabs">
        <q-tab-panel name="user">
          <div class="container">

            <!-- <form class="form category-form home-only">
              <div v-if="selectedUser.name != ''" class="cate-list-home">
                <label for="club">Nume/Prenume:</label>
                <span>{{ selectedUser.name }}</span>
              </div>
              <div v-if="selectedUser.email !== ''" class="cate-list-home">
                <label for="email">E-mail:</label>
                <span
                  style="padding-left: 0; word-wrap: break-word"
                  class="text-primary cursor-pointer link-text"
                  @click="mailUser(selectedUser.email)"
                  >{{ selectedUser.email }}</span
                >
              </div>

              <div v-if="selectedUser.phoneNumber != ''" class="cate-list-home">
                <label for="telephone no.">Număr de telefon:</label>
                <span>{{ selectedUser.phoneNumber }}</span>
              </div>

              <div v-if="selectedUser.etnic != ''" class="cate-list-home">
                <label for="Etnic">Etnie:</label>
                <span>{{ selectedUser.etnic }}</span>
              </div>

              <div v-if="selectedUser.gender != ''" class="cate-list-home">
                <label for="Gender">Sex:</label>
                <span>{{ selectedUser.gender }}</span>
              </div>

              <div v-if="selectedUser.dateOfBirth != ''" class="cate-list-home">
                <label for="date">Data nașterii:</label>
                <span>{{
                  selectedUser?.dateOfBirth
                    ? getBirthDate(selectedUser.dateOfBirth)
                    : ""
                }}</span>
              </div>

              <div v-if="selectedUser.size != ''" class="cate-list-home">
                <label for="Size">Mărime tricou:</label>
                <span>{{ selectedUser.size }}</span>
              </div>

              <div v-if="selectedUser.category != ''" class="cate-list-home">
                <label for="Category">Categorie:</label>
                <span>{{ selectedUser.category }}</span>
              </div>

              <div v-if="selectedUser.region != ''" class="cate-list-home">
                <label for="Region">Zona:</label>
                <span>{{ selectedUser.region }} </span>
              </div>

              <div v-if="selectedUser.state != ''" class="cate-list-home">
                <label for="state">Comunitate:</label>
                <span>{{ selectedUser.state }}</span>
              </div>

              <div v-if="selectedUser.clubName != ''" class="cate-list-home">
                <label for="club">Clubul:</label>
                <span>{{ selectedUser.clubName }}</span>
              </div>

              <div
                v-if="selectedUser.role !== 'department'"
                class="cate-list-home"
              >
                <label for="status">Status:</label>
                <span>{{ selectedUser.status ? "Activ" : "InActiv" }}</span>
              </div>
              <div
                v-if="selectedUser.tagList.length > 0"
                class="cate-list-home chip-container"
              >
                <label for="tags">Specializări:</label>
                <div v-if="selectedUser.tagList">
                  <span
                    v-for="(item, index) in selectedUser.tagList"
                    :key="index"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>

              <div
                v-if="
                  selectedUser.Instructor !== '' ||
                  selectedUser.Ghid !== '' ||
                  selectedUser.masterGhid !== ''
                "
                class="cate-list-home"
              >
                <label for="Instructor">Anul investiturii ca:</label>
                <span>Instructor: {{ selectedUser.Instructor }}</span>
                <span>Ghid: {{ selectedUser.Ghid }}</span>
                <span>Master Ghid: {{ selectedUser.masterGhid }}</span>
              </div>
            </form> -->
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
            <div class="container">
        <div class="flex justify-end">
          <q-btn
            round
            @click="isEdit = !isEdit"
            icon="edit_note"
            class="bg-linkcolor"
          ></q-btn>
        </div>
        <div class="flex no-wrap">
          <div class="userImg">
            <img v-if="selectedUser.imgUrl && selectedUser.imgUrl !== ''" :src="selectedUser.imgUrl" alt="" />
            <div v-else>
              <q-icon class="text-grey" name="photo_camera"></q-icon>
            </div>
          </div>
          <div class="userInfoText">
            <h4>{{ selectedUser.name }}</h4>
            <p :style="selectedUser.status ? 'color: green' : 'color: red'">
              {{ selectedUser.status ? "Activ" : "Inactiv" }}
            </p>
            <div>
              <p>{{ selectedUser.phoneNumber }}</p>
              <p>{{ selectedUser.email }}</p>
            </div>
          </div>
        </div>
        <div class="infoRow">
          <div class="shadowed">
            <div>
              <h3>Etnie:</h3>
              <span> {{ selectedUser.etnic }}</span>
            </div>
            <div>
              <h3>Sex:</h3>
              <span> {{ selectedUser.gender }}</span>
            </div>
            <div>
              <h3>Data nasterii:</h3>
              <span>
                {{
                  selectedUser.dateOfBirth
                    ? formatTheDate(selectedUser.dateOfBirth)
                    : ""
                }}</span
              >
            </div>
            <div>
              <h3>Marime tricou:</h3>
              <span class="text-uppercase"> {{ selectedUser.size }}</span>
            </div>
          </div>
          <div class="shadowed skills">
            <h3>Specializari</h3>
            <div>
              <p v-for="(item, i) in selectedUser.tagList" :key="i">{{ item }}</p>
            </div>
          </div>
        </div>
        <div
          class="shadowed q-mt-md"
          style="display: inline-flex; width: 100%; gap: 10%; padding: 1.5rem"
        >
          <div>
            <h3>Categorie</h3>
            <!-- <p>{{selectedUser.category}}</p> -->
            <p>Exploratori</p>
          </div>
          <div>
            <h3>Zona:</h3>
            <p>Brasov</p>
          </div>
          <div>
            <h3>Comunitate:</h3>
            <p>Betel</p>
          </div>
          <div>
            <h3>Clubul:</h3>
            <p>Iosua</p>
          </div>
          <div>
            <h3>Anul investiturii ca:</h3>
            <div>
              <span>Instructor:</span> <span>{{ selectedUser.Instructor }}</span>
            </div>
            <div>
              <span>Ghid:</span> <span>{{ selectedUser.Ghid }}</span>
            </div>
            <div>
              <span>Master Ghid:</span> <span>{{ selectedUser.masterGhid }}</span>
            </div>
          </div>
        </div>
        <div v-show="selectedUser.status" class="shadowed q-mt-md">
          <h2>Lista Copiilor</h2>
          <div class="children-list">
            <div
              v-for="(member, i) in selectedUser.teamList"
              :key="i"
              class="section"
            >
              {{ member.name }}
            </div>
          </div>
        </div>
      </div>
          </div>

          <div class="container">
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
                <label for="Gender">Sex:</label>
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
                <label for="status">Status:</label>
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

                <div
                  style="flex-wrap: nowrap"
                  class="flex justify-space-between"
                >
                  <label for="list">Lista copiilor:</label>
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
            <div class="attendance-container shadowed">
              <div class="attendance-summary">
                <h4 style="color: #233975">Prezența</h4>
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
            <div class="attendance-container shadowed" style="margin-top: 1rem">
              <div class="attendance-summary">
                <h4 style="color: #233975">Lista Intalnirilor</h4>
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
                <div class="table-container">
                  <table class="user-list-table lista">
                    <thead>
                      <tr>
                        <th>Tema intalnirii</th>
                        <th style="text-align: end">Data Intalnirii</th>
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
                        <td>{{ getBirthDate(item.date) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="q-mt-md inline-pagination">
                  <div style="display: inline-flex">
                    <span>Intalniri pe pagina</span>
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
                      {{ currentPage }}
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

            <!-- <div style="margin-top: 1rem" class="flex justify-center">
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
            </div> -->
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
    </q-card-section>
  </q-card>
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
      resultsPerPage: 10,
      currentPage: 1,
    };
  },
  async mounted() {
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
    await this.$store.dispatch("updatedUserDetails", this.selectedUser.uid);
    if (this.selectedUser.date) {
      this.dateModel.to = this.selectedUser.date.to;
      this.dateModel.from = this.selectedUser.date.from;
    }
  },
  methods: {
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
          message: "Te rugăm să introduci corect data.",
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
    showEventDetails(x) {
      this.$store.dispatch("selectEvent", x);
    },
  },
  computed: {
    eventList() {
      let firstItem = (this.currentPage - 1) * this.resultsPerPage
      const arr = this.selectedUser.eventList.filter((x, i) => {
        return i >= firstItem && i < firstItem + this.resultsPerPage
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
    resultsPerPage: {
      handler: function () {
        this.currentPage = 1;
      },
    },
  },
};
</script>
