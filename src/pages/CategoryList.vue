<template>
  <q-card
    class="my-card sign-up category-list"
    :class="$route.path == '/edit-profile' ? 'info' : ''"
  >
    <q-card-section>
      <div class="container">
        <form class="form">
          <div
            v-if="this.$route.path == '/category-list'"
            class="flex justify-end"
          >
            <q-btn
              no-caps
              color="black"
              flat
              type="button"
              @click="$store.dispatch('signOutUser')"
              class="btn log-out"
              style="
                font-size: 12px;
                font-weight: 300;
                width: auto;
                background-color: transparent;
              "
              >Deconectare
              <q-icon
                class=""
                style="font-size: 30px; color: rgba(150, 150, 150, 1)"
                name="exit_to_app"
              ></q-icon
            ></q-btn>
          </div>
          <h4>Completați informațiile</h4>
          <input
            ref="imgInput"
            accept="image/*"
            @change="handleImageUpload"
            type="file"
            style="display: none"
          />
          <div class="profile-img-holder q-mt-lg">
            <div
              v-if="
                !previewImage && (!userInfo.imgUrl || userInfo.imgUrl == '')
              "
              align="right"
              class="flex no-wrap q-mb-none"
            >
              <div class="add-img" @click="selectImage">
                <q-icon class="text-grey" name="photo_camera"></q-icon>
              </div>
              <p>Adaugă o fotografie tip buletin cu tine</p>
            </div>
            <div
              v-else-if="previewImage || userInfo?.imgUrl != ''"
              class="flex no-wrap q-mb-none"
            >
              <div class="add-img q-mx-auto">
                <q-btn
                  @click="
                    userInfo.imgUrl = '';
                    previewImage = '';
                  "
                  round
                  color="green"
                  size="xs"
                  icon="remove"
                ></q-btn>
                <img
                  class="add-event-img"
                  @click="selectImage"
                  :src="previewImage ? previewImage : userInfo.imgUrl"
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
              v-model="userInfo.etnic"
            />
          </div>

          <div class="right gender">
            <label for="Gender">Sex:</label>
            <div class="flex no-wrap">
                <q-radio
                  v-model="userInfo.gender"
                  val="Male"
                  color="black"
                  label="Masculin"
                />
                <q-radio
                  v-model="userInfo.gender"
                  color="black"
                  val="Female"
                  label="Femenin"
                />
              </div>
            </div>

          <div class="cate-list q-pl-sm right margin">
            <label for="uname">Data nașterii:</label>
            <q-input v-model="dateOfBirth" mask="##/##/####" @focus="openModal">
              <template v-slot:append>
                <q-icon
                  color="black"
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
          <div class="cate-list left">
            <label for="uname">Mărimea tricou</label>
            <q-select outlined v-model="userInfo.size" :options="sizeOptions" />
          </div>
          <!-- <div class="cate-list">
            <label for="uname">Categoria</label>
            <q-select outlined
              v-model="userInfo.category"
              :options="['Licurici', 'Companioni', 'Exploratori']"
            />
          </div> -->

          <div class="cate-list q-mb-none">
            <label for="uname">Categoria</label>
            <div style="justify-content: space-between; display: flex">
              <q-radio
                v-model="userInfo.category"
                val="Male"
                color="black"
                label="Licurici"
              />
              <q-radio
                v-model="userInfo.category"
                val="Female"
                color="black"
                label="Exploratori"
              />
              <q-radio
                v-model="userInfo.category"
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
              v-model="userInfo.clubName"
              placeholder="Denumirea clubului"
            />
          </div>
          <div class="cate-list right">
            <label for="uname">Zona</label>
            <q-input
              outlined
              type="text"
              v-model="userInfo.region"
              placeholder="Zona în care activezi"
            />
          </div>
          <div class="cate-list">
            <label for="uname">Comunitate</label>
            <q-input
              outlined
              type="text"
              v-model="userInfo.state"
              placeholder="Comunitatea în care activezi"
            />
          </div>
          <div class="cate-list">
            <label for="uname">Specializări pe care le poți preda</label>
            <q-input
              outlined
              type="text"
              v-model="tagsInput"
              placeholder="Separați cu virgula"
              name="tags"
            />
          </div>
          <label for="uname">Anii investiturii:</label>
          <div
            class="cate-list"
            style="
              display: flex;
              justify-content: space-between;
              margin-top: 0px;
              gap: 2px;
            "
          >
            <q-input
              outlined
              type="text"
              v-model="userInfo.Instructor"
              placeholder="Instructor"
              name="Instructor"
              mask="####"
            />
            <!-- </div> -->

            <!-- <div class="cate-list right-1 cate-margin"> -->

            <!-- </div> -->
            <!-- <div class="cate-list between cate-margin"> -->

            <q-input
              outlined
              type="text"
              v-model="userInfo.Ghid"
              placeholder="Ghid"
              mask="####"
            />
            <q-input
              outlined
              type="text"
              v-model="userInfo.masterGhid"
              placeholder="Master Ghid"
              mask="####"
            />
          </div>
          <div class="cate-list cate-margin">
            <label for="status">Status:</label>
            <div class="flex" style="gap: 2rem">
              <q-radio
                v-model="userInfo.status"
                :val="true"
                color="black"
                label="Activ"
              />
              <q-radio
                v-model="userInfo.status"
                :val="false"
                color="black"
                label="Inactiv"
              />
            </div>
          </div>

          <div v-if="userInfo.status" class="cate-list">
            <div style="flex-wrap: nowrap" class="flex justify-space-between">
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
              class="member-list"
              v-for="(item, index) in userInfo.teamList"
              :key="index"
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
            >
              <q-input
                outlined
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
import { storage, deleter } from "../store/firebase.js";
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
      sizeOptions: ["S", "M", "L", "XL", "XXL"],
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
      if (
        this.previewImage == "" &&
        (!this.userInfo.imgUrl || this.userInfo.imgUrl == "")
      ) {
        this.$q.notify({
          color: "red",
          message: "Please select a valid image",
        });
        this.isSubmitting = false;
        return;
      }
      if (this.previewImage != "") {
        if (this.userInfo.imgUrl && this.userInfo.imgUrl != "") {
          await deleter
            .refFromURL(this.userInfo.imgUrl)
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
      if (
        this.storeUserInfo.role != "department" &&
        this.storeUserInfo.role != "admin"
      ) {
        for (const key in this.storeUserInfo) {
          if (profile[key] == undefined || profile[key] == null) {
            profile[key] = this.storeUserInfo[key];
          }
        }
      }
      if (
        this.storeUserInfo.role != "department" &&
        this.storeUserInfo.role != "admin"
      ) {
        await this.$store.dispatch("updateUserProfile", profile);
        this.$router.push("/");
      } else if (this.storeUserInfo.role == "admin") {
        await this.$store.dispatch("updateUserProfileAdmin", profile);
        this.$router.push("/user-details");
      }
      this.isSubmitting = false;
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
    if (this.$route.path == "/category-list" && this.storeUserInfo?.isUpdated) {
      this.$router.push("/");
    } else if (this.$route.path == "/edit-profile") {
      if (
        this.storeUserInfo.role != "department" &&
        this.storeUserInfo.role != "admin"
      ) {
        this.userInfo = JSON.parse(
          JSON.stringify(this.$store.getters.userData)
        );
        this.tagsInput = this.userInfo.tagList.join(", ");
      } else {
        this.userInfo = JSON.parse(
          JSON.stringify(this.$store.getters.selectedUser)
        );
        this.tagsInput = this.userInfo.tagList.join(", ");
      }
    }
  },
  computed: {
    storeUserInfo() {
      return this.$store.getters.userData;
    },
  },
  watch: {
    "userInfo.status": {
      handler: function () {
        if (
          this.userInfo.status == true &&
          this.userInfo.teamList.length == 0
        ) {
          this.addMember();
        }
      },
    },
  },
};
</script>
