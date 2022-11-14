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
          label="Informații utilizator"
        ></q-tab>
        <q-tab
          v-if="
            selectedUser.status &&
            selectedUser?.isUpdated &&
            selectedUser.isAuthorized == true
          "
          name="events"
          label="Întâlnirile"
          style="border: none; border-radius: 0 0 0 8px"
        ></q-tab>
        <q-tab name="date" v-if="selectedUser.role === 'department'">
          Data</q-tab
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
                <div class="userImg">
                  <img
                    v-if="selectedUser.imgUrl && selectedUser.imgUrl !== ''"
                    :src="selectedUser.imgUrl"
                    alt=""
                    style="cursor: pointer"
                    @click="showProfilePicModal = true"
                  />

                  <div v-else>
                    <q-icon class="text-grey" name="photo_camera"></q-icon>
                  </div>
                </div>
                <div class="userInfoText">
                  <h4>{{ selectedUser.name }}</h4>
                  <p
                    :style="
                      selectedUser.status == true || selectedUser.role == 'department'
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
                        ? "Activ, fără grupă"
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
                    <h3>Gen:</h3>
                    <span> {{ selectedUser.gender }}</span>
                  </div>
                  <div>
                    <h3>Data nașterii:</h3>
                    <span>
                      {{
                        selectedUser.dateOfBirth
                          ? formatTheDate(selectedUser.dateOfBirth)
                          : ""
                      }}</span
                    >
                  </div>
                  <div>
                    <h3>Mărime tricou:</h3>
                    <span class="text-uppercase"> {{ selectedUser.size }}</span>
                  </div>
                </div>
                <div class="shadowed skills">
                  <h3>Specializări:</h3>
                  <div>
                    <p v-for="(item, i) in selectedUser.tagList" :key="i">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="shadowed user-details q-mt-md">
                <div>
                  <h3>Categorie:</h3>
                  <p>{{ selectedUser.category }}</p>
                  <!-- <p>Exploratori</p> -->
                </div>
                <div>
                  <h3>Zonă:</h3>

                  <!-- <p>Brasov</p> -->
                  <p>{{ selectedUser.region }}</p>
                </div>
                <div>
                  <h3>Comunitate:</h3>
                  <!-- <p>Betel</p> -->
                  <p>{{ selectedUser.state }}</p>
                </div>
                <div>
                  <h3>Clubul:</h3>
                  <!-- <p>Iosua</p> -->
                  <p>{{ selectedUser.clubName }}</p>
                </div>
                <div>
                  <h3>Anul investiturii ca:</h3>
                  <div>
                    <span>Instructor: </span>
                    <span>
                      {{
                        selectedUser.Instructor !== ""
                          ? selectedUser.Instructor
                          : "-"
                      }}</span
                    >
                  </div>
                  <div>
                    <span>Ghid: </span>
                    <span>
                      {{
                        selectedUser.Ghid !== "" ? selectedUser.Ghid : "-"
                      }}</span
                    >
                  </div>
                  <div>
                    <span>Master Ghid:</span>
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
              <div v-show="selectedUser.status === 'neither'" class="shadowed q-my-lg" style="padding-left: 2rem; padding-right: 2rem;">
          <h2>Detalii</h2>
                <q-input
                  type="textarea"
                  input-style="resize: none;"
                  readonly
                  borderless
                  v-model="selectedUser.reason"
                ></q-input>
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
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
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

          <!--
          <q-dialog v-model="isEdit" no-esc-dismiss no-backdrop-dismiss>
            <q-card class="my-card edit-details sign-up center-card">
              <q-card-section>
                <div class="container">
                  <form
                    class="form"
                    style="padding-left: 5rem; padding-right: 5rem"
                  >
                    <div class="flex items-center justify-around">
                      <q-btn
                        class="edit-toggle"
                        v-close-popup
                        round
                        icon="chevron_left"
                      ></q-btn>
                      <h4>Completați informațiile</h4>
                    </div>
                    <input
                      ref="imgInput"
                      accept="image/*"
                      @input="handleImageUpload"
                      type="file"
                      style="display: none"
                    />
                    <div class="profile-img-holder q-mt-lg">
                      <div
                        @click="showImgInput"
                        v-if="
                          (!dataUser.imgUrl || dataUser.imgUrl == '') &&
                          previewImage == ''
                        "
                        align="right"
                        class="flex no-wrap q-mb-none"
                      >
                        <div class="add-img">
                          <q-icon
                            class="text-grey"
                            name="photo_camera"
                          ></q-icon>
                        </div>
                        <p>Adaugă o fotografie tip buletin cu tine</p>
                      </div>
                      <div
                        @click="showImgInput"
                        v-else-if="dataUser.imgUrl != '' && previewImage == ''"
                        class="flex no-wrap q-mb-md"
                      >
                        <div class="add-img q-mx-auto">
                          <img
                            class="add-event-img"
                            :src="dataUser.imgUrl"
                            alt=""
                          />
                        </div>
                        <p>Adaugă o fotografie tip buletin cu tine</p>
                      </div>
                      <div
                        v-else-if="previewImage != ''"
                        class="flex no-wrap q-mb-md"
                      >
                        <div class="add-img q-mx-auto relative-position">
                          <q-icon
                            size="sm"
                            name="cancel"
                            color="red"
                            class="absolute"
                            style="top: 3px; right: 5px; z-index: 1"
                            @click="removeImg"
                          />
                          <img
                            @click="showImgInput"
                            class="add-event-img"
                            :src="previewImage"
                            alt=""
                          />
                        </div>
                        <p>Adaugă o fotografie tip buletin cu tine</p>
                      </div>
                    </div>
                    <div class="cate-list left">
                      <label for="uname">Etnie</label>
                      <q-select
                        outlined
                        :options="['Română', 'Maghiară']"
                        v-model="dataUser.etnic"
                      />
                    </div>

                    <div class="right gender">
                      <label for="Gender">Gen:</label>
                      <div class="flex no-wrap">
                        <q-radio
                          v-model="dataUser.gender"
                          val="Male"
                          color="black"
                          label="Masculin"
                        />
                        <q-radio
                          v-model="dataUser.gender"
                          color="black"
                          val="Female"
                          label="Feminin"
                        />
                      </div>
                    </div>

                    <div class="cate-list q-pl-sm right margin">
                      <label for="uname">Data nașterii:</label>
                      <q-input
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
                            color="black"
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
                    <div class="cate-list left">
                      <label for="uname">Mărimea tricou</label>
                      <q-select
                        outlined
                        v-model="dataUser.size"
                        :options="sizeOptions"
                      />
                    </div>
                    <div style="margin-bottom: 0" class="cate-list">
                      <label for="uname">Categoria</label>
                      <div>
                        <q-radio
                          v-model="dataUser.category"
                          val="Male"
                          color="black"
                          label="Licurici"
                        />
                        <q-radio
                          v-model="dataUser.category"
                          val="Female"
                          color="black"
                          label="Exploratori"
                        />
                        <q-radio
                          v-model="dataUser.category"
                          val="trans"
                          color="black"
                          label="Companioni"
                        />
                      </div>
                    </div>
                    <div class="cate-list left">
                      <label for="uname">Clubul</label>
                      <q-input
                        outlined
                        type="text"
                        v-model="dataUser.clubName"
                        placeholder="Denumirea clubului"
                      />
                    </div>
                    <div class="cate-list right">
                      <label for="uname">Zona</label>
                      <q-input
                        outlined
                        type="text"
                        v-model="dataUser.region"
                        placeholder="Zona în care activezi"
                      />
                    </div>
                    <div class="cate-list">
                      <label for="uname">Comunitate</label>
                      <q-input
                        outlined
                        type="text"
                        v-model="dataUser.state"
                        placeholder="Comunitatea în care activezi"
                      />
                    </div>
                    <div class="cate-list">
                      <label for="uname"
                        >Specializări pe care le poți preda</label
                      >
                      <q-input
                        outlined
                        type="text"
                        v-model="tagsInput"
                        placeholder="Separați cu virgula"
                        name="tags"
                      />
                    </div>

                    <div class="cate-list left-1">
                      <label for="uname">Anii investiturii:</label>
                      <q-input
                        outlined
                        type="text"
                        v-model="dataUser.Instructor"
                        placeholder="Instructor"
                        name="Instructor"
                        mask="####"
                      />
                    </div>

                    <div class="cate-list right-1">
                      <q-input
                        outlined
                        type="text"
                        v-model="dataUser.masterGhid"
                        placeholder="Master Ghid"
                        mask="####"
                      />
                    </div>
                    <div class="cate-list between">
                      <q-input
                        outlined
                        type="text"
                        v-model="dataUser.Ghid"
                        placeholder="Ghid"
                        mask="####"
                      />
                    </div>
                    <div class="cate-list">
                      <label for="status">Status:</label>
                      <div class="flex" style="gap: 2rem">
                        <q-radio
                          v-model="dataUser.status"
                          :val="true"
                          color="black"
                          label="Activ"
                        />
                        <q-radio
                          v-model="dataUser.status"
                          :val="false"
                          color="black"
                          label="Inactiv"
                        />
                      </div>
                    </div>

                    <div v-if="dataUser.status" class="cate-list">
                      <div
                        style="flex-wrap: nowrap"
                        class="flex justify-space-between"
                      >
                        <label for="list">Lista copiilor:</label>
                        <q-btn
                          icon="add"
                          @click="addMember"
                          class="team-member-btn"
                          type="button"
                          round
                          color="green"
                        />
                      </div>

                      <div
                        class="member-list flex items-center justify-between"
                        v-for="(item, index) in teamList"
                        :key="index"
                      >
                        <div style="width: 85%">
                          <q-input
                            outlined
                            type="text"
                            v-model="item.name"
                            placeholder="Nume copil"
                          />
                        </div>
                        <q-btn
                          @click="removeMember(index)"
                          type="button"
                          round
                          color="red"
                          style="width: 35px; height: 35px"
                          icon="remove"
                          class="remove-button"
                        />
                      </div>
                    </div>
                    <div class="submit">
                      <q-btn
                        type="button"
                        :loading="isSubmitting"
                        @click="submit"
                        class="signupbtn"
                        >Trimite</q-btn
                      >
                    </div>
                  </form>
                </div>
              </q-card-section>
            </q-card>
          </q-dialog> -->
        </q-tab-panel>
        <q-tab-panel class="user-event-container" name="events">
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
            <div class="attendance-container shadowed">
              <div class="attendance-summary">
                <h4 style="color: #233975">Lista întâlnirilor</h4>
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
                        <th>Titlul întâlnirii</th>
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
import { storage, deleter } from "../store/firebase.js";

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
      if (this.previewImage != "") {
        if (this.dataUser.imgUrl && this.dataUser.imgUrl != "") {
          await deleter
            .refFromURL(this.dataUser.imgUrl)
            .delete()
            .then()
            .catch((errImg) => {
              console.log(errImg);
            });
        }

        const img_name = new Date() + "-" + this.file.name;
        await storage
          .child(img_name)
          .put(this.file, {
            contentType: this.file.type,
          })
          .then((snapshot) => {
            return snapshot.ref.getDownloadURL();
          })
          .then((url) => {
            this.dataUser.imgUrl = url;
          });
      }
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
        profile.teamList = this.teamList;
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
      await this.pageSetup();
      this.previewImage = "";
      this.isSubmitting = false;
      this.isEdit = false;
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
