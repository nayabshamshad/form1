<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="container">
        <form class="form">
          <h4>Completați informațiile</h4>

          <div class="cate-list left">
            <label for="uname"><b>Etnie</b></label>
            <q-select
              :options="['Română', 'Maghiară']"
              v-model="userInfo.etnic"
            />
          </div>

          <div class="right gender">
            <label for="Gender"><b>Sex:</b></label>
            <div>
              <q-radio
                v-model="userInfo.gender"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="Male"
                label="Masculin"
              />
              <q-radio
                v-model="userInfo.gender"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="Female"
                label="Femenin"
              />
            </div>
          </div>
          <!--
          <div class="cate-list right">
            <label for="uname"><b>Mărimea tricou</b></label>
            <q-select v-model="userInfo.size" :options="sizeOptions" />
          </div> -->
          <div class="cate-list right gender margin">
            <label for="uname"><b>Data nașterii:</b></label>
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
                      v-model="userInfo.dateOfBirth"
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
          <div class="cate-list right gender">
            <label for="uname"><b>Mărimea tricou</b></label>
            <q-select v-model="userInfo.size" :options="sizeOptions" />
          </div>
          <!-- <div class="cate-list">
            <label for="uname"><b>Categoria</b></label>
            <q-select
              v-model="userInfo.category"
              :options="['Licurici', 'Companioni', 'Exploratori']"
            />
          </div> -->

          <div class="cate-list">
            <label for="uname"><b>Categoria</b></label>
            <div>
              <q-radio
                v-model="userInfo.category"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="Male"
                label="Licurici"
              />
              <q-radio
                v-model="userInfo.category"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="Female"
                label="Exploratori"
              />
              <q-radio
                v-model="userInfo.category"
                checked-icon="task_alt"
                unchecked-icon="panorama_fish_eye"
                val="trans"
                label="Companioni"
              />
            </div>
          </div>
          <div class="cate-list left">
            <label for="uname"><b>Clubul</b></label>
            <q-input
              type="text"
              v-model="userInfo.clubName"
              placeholder="Denumirea clubului"
            />
          </div>
          <div class="cate-list right">
            <label for="uname"><b>Zona</b></label>
            <q-input
              type="text"
              v-model="userInfo.region"
              placeholder="Zona în care activezi"
            />
          </div>
          <div class="cate-list">
            <label for="uname"><b>Comunitate</b></label>
            <q-input
              type="text"
              v-model="userInfo.state"
              placeholder="Comunitatea în care activezi"
            />
          </div>
          <div class="cate-list">
            <label for="uname"><b>Specializări pe care le poți preda</b></label>
            <q-input
              type="text"
              v-model="tagsInput"
              placeholder="Separați cu virgula"
              name="tags"

            />
          </div>

          <div class="cate-list left-1">
            <label for="uname"><b>Anii investiturii:</b></label>
            <q-input
              type="text"
              v-model="userInfo.Instructor"
              placeholder="Instructor"
              name="Instructor"
              mask="####"
            />
          </div>

          <div class="cate-list right-1">
            <q-input
              type="text"
              v-model="userInfo.masterGhid"
              placeholder="Master Ghid"
              mask="####"
              />
          </div>
          <div class="cate-list between">
            <q-input
              type="text"
              v-model="userInfo.Ghid"
              placeholder="Ghid"
              mask="####"
            />
          </div>
            <div class="cate-list">
              <label for="status"><b>Status:</b></label>
              <div>
                <q-radio
                  v-model="userInfo.status"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  :val="true"
                  label="Active"
                />
                <q-radio
                  v-model="userInfo.status"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  :val="false"
                  label="InActive"
                />
              </div>
            </div>
          <!-- <input
            ref="imgInput"
            accept="image/*"
            @change="handleImageUpload"
            type="file"
            style="display: none"
          />
          <div class="profile-img-holder q-my-lg">
            <q-card-actions align="right" class="q-mb-md">
              <q-btn rounded @click="selectImage" no-caps color="secondary"
                >Add Profile Picture</q-btn
              >
            </q-card-actions>
            <div v-if="previewImage" class="add-img q-mx-auto">
              <q-btn @click="removeImg()" color="red" round size="sm">-</q-btn>
              <img class="add-event-img" :src="previewImage" alt="" />
            </div>
          </div> -->

          <div v-if="userInfo.status" class="cate-list">
            <div style="flex-wrap: nowrap" class="flex justify-space-between">
              <label for="list"><b>Lista copiilor:</b></label>
              <q-btn @click="addMember" type="button" round color="green"
                >+</q-btn
              >
            </div>

            <div
              v-for="(item, index) in userInfo.teamList"
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
                placeholder="Nume copil"
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
              class="signupbtn"
              >Trimite</q-btn
            >
          </div>
        </form>
      </div>
    </q-card-section>
  </q-card>
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
import { storage } from "../store/firebase.js";
export default {
  name: "CategoryListView",
  components: {},
  data() {
    return {
      userInfo: {
        teamList: [{ name: "" }],
        dateOfBirth: "2022/03/21",
        Instructor: "",
        Ghid: "",
        masterGhid: "",
        region: "",
        state: "",
        gender: "Male",
        etnic: "",
        tagList: [],
        clubName: "",
        status: false,
        category: "",
        size: "",
        isUpdated: false,
        imgUrl: "",
      },
      imgUrl: "",
      previewImage: "",
      file: null,
      dateOfBirth: "21/03/2022",
      tagsInput: "",
      isSubmitting: false,
      sizeOptions: [
        "x-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "XXX-Large",
      ],
      error: "Te rugăm să reverifici datele introduse.",
      errorDialog: false,
    };
  },
  methods: {
    handleImageUpload(e) {
      const file = e.target.files[0];
      this.previewImage = URL.createObjectURL(file);
      this.file = file;
    },
    selectImage() {
      this.$refs.imgInput.click();
    },
    removeImg() {
      this.imgUrl = "";
      this.previewImage = "";
      this.file = null;
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
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
      let profile;
      if (this.previewImage !== "") {
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
            this.userInfo.imgUrl = url;
          });
      }
      profile = { ...this.userInfo };
      if (this.tagsInput != "") {
        if (this.tagsInput.split(",").length > 5) {
          this.error = "Nu poți să introduci mai mult de 5 specializări.";
          this.errorDialog = true;
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
        profile.teamList.forEach((x) => {
          if (x.name == "") {
            err = true;
          }
        });
      }
      if (err) {
        this.isSubmitting = false;
        this.errorDialog = true;
        this.error = "Verificați lista cu copii";
        return;
      }
      if (profile.tagList.length < 1) {
        this.errorDialog = true;
        this.error = "Te rugăm să introduci minim o specializare";
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
      this.isSubmitting = false;

      this.$router.push("/");
    },
    addMember() {
      this.userInfo.teamList.push({ name: "" });
    },
    removeMember(i) {
      if (this.userInfo.teamList.length > 1) {
        this.userInfo.teamList.splice(i, 1);
      } else {
        this.errorDialog = true;
        this.error = "Te rugăm să completezi lista cu copii.";
      }
    },
  },
  mounted() {
    if (this.storeUserInfo?.isUpdated) {
      this.$router.push("/");
    }
  },
  computed: {
    storeUserInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>
