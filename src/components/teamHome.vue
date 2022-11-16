<template>
  <q-card class="my-card info">
    <q-card-section>
      <div class="container">
        <div class="flex justify-end"></div>
        <div class="flex no-wrap">
          <div class="userImg">
            <template
                    v-if="userData.imgUrl && userData.imgUrl !== ''"
                  >
                    <img
                      :src="userData.imgUrl"
                      alt=""
                      style="cursor: pointer"
                      @click="showProfilePicModal = true"
                    />
                    <div style="position: absolute; right: 10px;bottom: 10px; display: block;border: unset;height: 20px; width: 20px">
                      <q-btn
                        @click="downloadImg"
                        round
                        style="padding: 0.25rem; font-size: 6px;"

                        size="xs"
                        color="green"
                      >
                      <q-icon style="font-size : 1rem" name="download"></q-icon>
                    </q-btn>
                    </div>
                  </template>
            <div v-else>
              <q-icon class="text-grey" name="photo_camera"></q-icon>
            </div>
          </div>
          <div class="userInfoText">
            <h4>{{ userData.name }}</h4>
            <p :style="userData.status === true ? 'color: green' : userData.status === 'neither' ? 'color: #FFBD3C;' : 'color: red'">
              {{ userData.status === true ? "Activ" : userData.status === "neither" ? "Activ, fără grupă" : "Inactiv" }}
            </p>
            <div>
              <p>{{ userData.phoneNumber }}</p>
              <p>{{ userData.email }}</p>
            </div>
          </div>
        </div>
        <q-btn
          round
          v-show="dateContained"
          @click="$router.push('/edit-profile')"
          icon="edit_note"
          class="edit-btn"
        ></q-btn>
        <div class="infoRow">
          <div class="shadowed">
            <!-- <div>
              <h3>Etnie:</h3>
              <span> {{ userData.etnic }}</span>
            </div> -->
            <div>
              <h3>Gen:</h3>
              <span> {{ userData.gender }}</span>
            </div>
            <div>
              <h3>Data nașterii:</h3>
              <span>
                {{
                  userData.dateOfBirth
                    ? formatTheDate(userData.dateOfBirth)
                    : ""
                }}</span
              >
            </div>
            <div>
              <h3>Mărime tricou:</h3>
              <span class="text-uppercase"> {{ userData.size }}</span>
            </div>
          </div>
          <div class="shadowed skills">
            <h3>Specializări</h3>
            <div>
              <p v-for="(item, i) in userData.tagList" :key="i">{{ item }}</p>
            </div>
          </div>
        </div>
        <div
          class="shadowed q-mt-md user-details"
          style="display: inline-flex; width: 100%; gap: 10%; padding: 1.5rem"
        >
          <div>
            <h3>Categorie:</h3>
            <!-- <p>Exploratori</p> -->
            <p>{{ userData.category }}</p>
          </div>
          <div>
            <h3>Zonă:</h3>
            <!-- <p>Brasov</p> -->
            <p>{{ userData.region }}</p>
          </div>
          <div>
            <h3>Comunitate:</h3>
            <!-- <p>Betel</p> -->
            <p>{{ userData.state }}</p>
          </div>
          <div>
            <h3>Clubul:</h3>
            <!-- <p>Iosua</p> -->
            <p>{{ userData.clubName }}</p>
          </div>
          <div>
            <h3>Anul investiturii ca:</h3>
            <div>
              <span>Instructor:</span> <span>{{ userData.Instructor }}</span>
            </div>
            <div>
              <span>Ghid:</span> <span>{{ userData.Ghid }}</span>
            </div>
            <div>
              <span>Master Ghid:</span> <span>{{ userData.masterGhid }}</span>
            </div>
          </div>
        </div>
        <div v-show="userData.status === true" class="shadowed q-mt-md">
          <h2>Lista Copiilor</h2>
          <div class="children-list">
            <div v-for="(member, i) in teamListSorted" :key="i">
              <div class="section" :class="member.type ? 'special' : ''">
                {{ member.name }}
              </div>
              <div class="flex">
                <div>{{member.year}}</div>
                <div>{{member.class}}</div>
              </div>
              </div>
          </div>
        </div>
        <div v-show="userData.status === 'neither'" class="shadowed q-my-lg" style="padding-left: 2rem; padding-right: 2rem;">
          <h2>Detalii</h2>
              <q-input type="textarea" input-style="resize: none;" readonly borderless v-model="userData.reason"></q-input>
              </div>
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
  <q-dialog v-model="showProfilePicModal">
    <q-card>
      <q-card-section>
        <img class="zoomImg" :src="dataUser.imgUrl" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { auth, storage, deleter } from "../store/firebase";
export default {
  name: "HomeView",
  components: {},
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
      // this.$store.dispatch("getUserData");
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
      sizeOptions: ["S", "M", "L", "XL", "XXL"],
      teamList: [{ name: "" }],
      previewImage: "",
      file: null,
      showProfilePicModal: false,
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
    teamListSorted() {
      let arr = [];
      let teamList = [];
      if (
        this.userData &&
        this.userData.teamList &&
        this.userData.teamList.length > 0
      ) {
        this.userData.teamList.forEach((x) => {
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
