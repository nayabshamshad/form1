<template>
  <q-card class="my-card info">
    <q-card-section>
      <div v-if="!isEdit" class="container">
        <div class="flex" style="justify-content: flex-end; max-width: 75%">
          <!-- <q-btn
            v-if="dateContained"
            round
            @click="isEdit = !isEdit"
            color="green"
            icon="edit"
          ></q-btn> -->
        </div>
        <div class="flex no-wrap">
          <div class="userImg">
            <img v-if="userData.imgUrl !== ''" :src="userData.imgUrl" alt="" />
            <div v-else>
              <q-icon class="text-grey" name="photo_camera"></q-icon>
            </div>
          </div>
          <div class="userInfoText">
            <h4>{{ userData.name }}</h4>
            <p :style="userData.status ? 'color: green' : 'color: red'">
              {{ userData.status ? "Activ" : "Inactiv" }}
            </p>
            <div>
              <p>{{ userData.phoneNumber }}</p>
              <p>{{ userData.email }}</p>
            </div>
          </div>
        </div>
        <div class="infoRow">
          <div class="shadowed">
            <div>
              <h3>Etnie:</h3>
              <span> {{ userData.etnic }}</span>
            </div>
            <div>
              <h3>Sex:</h3>
              <span> {{ userData.gender }}</span>
            </div>
            <div>
              <h3>Data nasterii:</h3>
              <span>
                {{
                  userData.dateOfBirth
                    ? formatTheDate(userData.dateOfBirth)
                    : ""
                }}</span
              >
            </div>
            <div>
              <h3>Marime tricou:</h3>
              <span class="text-uppercase"> {{ userData.size }}</span>
            </div>
          </div>
          <div class="shadowed skills">
            <h3>Specializari</h3>
            <div>
              <p v-for="(item, i) in userData.tagList" :key="i">{{ item }}</p>
            </div>
          </div>
        </div>
        <div class="shadowed q-mt-md inline">
          <div>
            <h3>Categorie</h3>
            <!-- <p>{{userData.category}}</p> -->
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
            <p>Instructor:</p>
          </div>
        </div>
        <div class="shadowed q-mt-md">
          <h2>Lista Copiilor</h2>
         <div class="children-list">
         <div class=" section">Mircea Bunea</div>
         <div class=" section">Mircea Bunea</div></div>

         <div class="children-list">
         <div class=" section">Mircea Bunea</div>
         <div class=" section">Mircea Bunea</div></div>
         <div class="children-list">
         <div class=" section">Mircea Bunea</div>
         <div class=" section">Mircea Bunea</div></div>


        </div>
        <!-- <h2>Informații utilizator</h2> -->
        <!-- <div class="add-img" v-if="dataUser.imgUrl && dataUser.imgUrl !== ''">
          <img :src="dataUser.imgUrl" />
        </div> -->
        <!-- <form class="form category-form home-only">
          <div class="cate-list-home">
            <label for="club">Nume/Prenume:</label>
            <span>{{ dataUser.name }}</span>
          </div>

          <div class="cate-list-home">
            <label for="email">E-mail:</label>
            <span>{{ dataUser.email }}</span>
          </div>

          <div class="cate-list-home">
            <label for="telephone no.">Număr de telefon:</label>
            <span>{{ dataUser.phoneNumber }}</span>
          </div>

          <div class="cate-list-home">
            <label for="Etnic">Etnie:</label>
            <span>{{ dataUser.etnic }}</span>
          </div>

          <div class="cate-list-home">
            <label for="Gender">Sex:</label>
            <span>{{ dataUser.gender }}</span>
          </div>

          <div class="cate-list-home">
            <label for="date">Data nașterii:</label>
            <span>{{
              dataUser?.dateOfBirth ? getBirthDate(dataUser.dateOfBirth) : ""
            }}</span>
          </div>

          <div class="cate-list-home">
            <label for="Size">Mărime tricou:</label>
            <span>{{ dataUser.size }}</span>
          </div>

          <div class="cate-list-home">
            <label for="Category">Categorie:</label>
            <span>{{ dataUser.category }}</span>
          </div>

          <div class="cate-list-home">
            <label for="Region">Zona:</label>
            <span>{{ dataUser.region }} </span>
          </div>

          <div class="cate-list-home">
            <label for="state">Comunitate:</label>
            <span>{{ dataUser.state }}</span>
          </div>

          <div class="cate-list-home">
            <label for="club">Clubul:</label>
            <span>{{ dataUser.clubName }}</span>
          </div>

          <div class="cate-list-home">
            <label for="status">Status:</label>
            <span>{{ dataUser.status ? "Activ" : "InActiv" }}</span>
          </div>

          <div class="cate-list-home chip-container">
            <label for="tags">Specializări:</label>
            <div v-if="dataUser.tagList">
              <span v-for="(item, index) in dataUser.tagList" :key="index">
                {{ item }}
              </span>
            </div>
          </div>

          <div class="cate-list-home">
            <label for="Instructor">Anul investiturii ca:</label>
            <span>Instructor: {{ dataUser.Instructor }}</span>
            <span>Ghid: {{ dataUser.Ghid }}</span>
            <span>Master Ghid: {{ dataUser.masterGhid }}</span>
          </div>
        </form> -->
        <!-- <div v-if="dataUser.status" class="home-detail">
          <h2>Lista copiilor</h2>
          <div class="grid">
            <div
              class="grid-cell"
              v-for="(item, index) in dataUser.teamList"
              :key="index"
            >
              {{ item.name }}
            </div>
          </div>
        </div> -->
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
              :options="['Romanian', 'Hungarian']"
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
              placeholder="Separate de virgulă"
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

            <div style="flex-wrap: nowrap" class="flex justify-space-between">
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
      <!--  Error Dialog  -->
      <q-dialog v-model="errorDialog">
        <q-card>
          <q-card-section
            ><div
              class="flex"
              style="justify-content: flex-end; padding: 0 30%"
            ></div>
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
import { auth } from "../store/firebase";
export default {
  name: "HomeView",
  components: {},
  methods: {
    formatTheDate(x) {
      return x.split("/").reverse().join(".");
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
    addMember() {
      this.teamList.push({ name: "" });
    },
    removeMember(i) {
      if (this.teamList.length > 1) {
        this.teamList.splice(i, 1);
      } else {
        this.errorDialog = true;
        this.error = "Te rugăm să completezi lista cu copii.";
      }
    },
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      let profile;

      profile = { ...this.dataUser };
      profile.teamList = this.teamList;
      if (this.tagsInput != "") {
        if (this.tagsInput.split(",").length > 5) {
          this.error = "Nu poți să introduci mai mult de 5 specializări.";
          this.errorDialog = true;
          this.isSubmitting = false;
          return;
        }
        if (profile.phoneNumber.length !== 14) {
          this.$q.notify({
            color: "red",
            message: "Te rugăm să introduci număr de telefon valid",
          });
          this.isSubmitting = false;
          return;
        }
        profile.tagList = this.tagsInput.split(",");
      }
      profile.isUpdated = true;
      if (!profile.status) {
        profile.teamList = [];
      }
      // Checks before forwarding the request
      var err = false;
      if (profile.status) {
        if (profile.teamList.length < 1) {
          this.error = "Te rugăm să completezi lista cu copii.";
          this.errorDialog = true;
          this.isSubmitting = false;
          return;
        }
        profile?.teamList?.forEach((x) => {
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
        this.error = "Te rugăm să introduci minim o specializare.";
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
          message: "Formatul anului introdus este incorect",
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
      await this.$store.dispatch("updateUserProfile", profile);
      this.$store.dispatch("getUserData");
      this.isEdit = false;
      this.isSubmitting = false;
    },
  },
  data() {
    return {
      isEdit: false,
      dataUser: {},
      dateContained: false,
      editDate: {
        start: "09/01/2022",
        end: "10/01/2022",
      },
      dateOfBirth: "",
      errorDialog: false,
      error: "",
      isSubmitting: false,
      tagsInput: "",
      sizeOptions: [
        "x-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "XXX-Large",
      ],
      teamList: [{ name: "" }],
    };
  },
  mounted() {
    if (
      new Date(this.dateList?.from).getTime() <= new Date().getTime() &&
      new Date(this.dateList?.to).getTime() >= new Date().getTime()
    ) {
      this.dateContained = true;
    } else {
      this.dateContained = false;
    }
    if (auth.currentUser && this.$store.getters.userData?.isUpdated == false) {
      this.$router.push("/category-list");
    }
    this.dataUser = { ...this.userData };
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
  watch: {
    userData: {
      handler: function () {
        if (this.$store.getters.userData?.isUpdated == false) {
          this.$router.push("/category-list");
        }
        this.dataUser = { ...this.userData };
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
      dateList: {
        handler: function () {
          if (
            new Date(this.dateList?.from).getTime() <= new Date().getTime() &&
            new Date(this.dateList?.to).getTime() >= new Date().getTime()
          ) {
            this.dateContained = true;
          } else {
            this.dateContained = false;
          }
        },
      },
    },
  },
  computed: {
    userData() {
      if (this.$store.getters.userData) {
        return this.$store.getters.userData;
      } else {
        return {};
      }
    },
    dateList() {
      return this.$store.getters.dateList;
    },
  },
};
</script>
