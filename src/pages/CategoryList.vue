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
          <!-- <div class="cate-list left">
            <label for="uname">Etnie</label>
            <q-select
              outlined
              :options="['Română', 'Maghiară']"
              v-model="userInfo.etnic"
            />
          </div> -->
          <div class="cate-list">
            <label for="uname">Nume/Prenume</label>
            <q-input
              outlined
              type="text"
              v-model="userInfo.name"
              placeholder="Nume/Prenume"
            />
          </div>
          <div class="cate-list cate-margin gender">
            <label for="Gender">Gen:</label>
            <div class="flex no- linear-btn-container">
              <q-btn
                style="width: 50% !important; border: 1px solid #ccc !important"
                label="Masculin"
                :class="userInfo.gender === 'Masculin' ? 'selected' : ''"
                @click="userInfo.gender = 'Masculin'"
              />
              <q-btn
                style="width: 50% !important; border: 1px solid #ccc !important"
                label="Feminin"
                @click="userInfo.gender = 'Feminin'"
                :class="userInfo.gender === 'Feminin' ? 'selected' : ''"
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
                      default-view="Years"
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
            <label
              for="uname"
              style="display: block; width: 20px; padding-left: 4px"
              >Categoria</label
            >
            <div class="linear-btn-container flex">
              <q-btn
                label="Licurici"
                @click="userInfo.category = 'Licurici'"
                :class="userInfo.category === 'Licurici' ? 'selected' : ''"
              />
              <q-btn
                label="Exploratori"
                @click="userInfo.category = 'Exploratori'"
                :class="userInfo.category === 'Exploratori' ? 'selected' : ''"
              />
              <q-btn
                v-model="userInfo.category"
                label="Companioni"
                @click="userInfo.category = 'Companioni'"
                :class="userInfo.category === 'Companioni' ? 'selected' : ''"
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
            <label for="uname">Zonă</label>
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
            <div class="flex linear-btn-container">
              <q-btn
                label="Activ"
                @click="userInfo.status = true"
                :class="userInfo.status === true ? 'selected' : ''"
              />
              <q-btn
                label="Inactiv"
                @click="userInfo.status = false"
                :class="userInfo.status === false ? 'selected' : ''"
              />
              <q-btn
                style="font-size: 85%"
                val="neither"
                label="Activ (Fără Grupă)"
                @click="userInfo.status = 'neither'"
                :class="userInfo.status === 'neither' ? 'selected' : ''"
              />
            </div>
          </div>

          <div
            v-if="userInfo.status === true"
            class="cate-list"
            style="max-width: 600px; margin-left: auto; margin-right: auto"
          >
            <div class="add-member-button-container">
              <q-btn
                @click="addMember"
                type="button"
                color="green"
                label="Adauga Copil"
              />
              <q-btn
                @click="addMemberSpecial"
                type="button"
                class="bg-linkcolor"
                style="background: #8397cd"
                label="Adauga TLT"
              />
            </div>

            <div
              class="member-list"
              v-for="(item, index) in userInfo.teamList"
              :key="index"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <div style="width: calc(100% - 60px)">
                <q-input
                  outlined
                  type="text"
                  v-model="item.name"
                  :style="
                    item.type
                      ? 'background-color: rgba(131, 151, 205, 0.3)'
                      : ''
                  "
                  :placeholder="item.type ? 'TLT Name' : 'Nume copil'"
                />

                <div style="display: flex">
                  <div style="width: 50%; position: relative">
                    <input
                      class="member-year"
                      type="text"
                      v-model="item.year"
                      pattern="[0-9]{4}"
                      placeholder="Anul nașterii"
                      style="
                        padding: 0.3rem 0.7rem;
                        border-bottom-left-radius: 1rem;
                        border: 1px solid #c4c4c4;
                        border-radius: 0px 0px 0px 8px;
                        width: 100%;
                      "
                      name=""
                      id=""
                    />
                  </div>
                  <select
                    style="
                      width: 50%;
                      background: rgba(196, 196, 196, 0.2);
                      border-radius: 0px 0px 0px 0px;
                      border: 1px solid #c4c4c4;
                    "
                    name=""
                    id=""
                    v-model="item.class"
                  >
                    <template v-if="!item.type">
                      <option v-for="(option, i) in availableOptions" :key="i">
                        {{ option }}
                      </option>
                    </template>
                    <template v-else-if="item.type">
                      <option v-for="(option, i) in optionList[2]" :key="i">
                        {{ option }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>

              <q-btn
                @click="removeMember(index)"
                type="button"
                color="red"
                style="
                  width: 60px;
                  height: 89px;
                  border-radius: 0;
                  border-top-right-radius: 0.7rem;
                  border-bottom-right-radius: 0.7rem;
                "
                icon="remove"
                class="remove-button"
              />
            </div>
          </div>
          <div v-else-if="userInfo.status == 'neither'" class="q-py-md">
            <q-input
              outlined
              v-model="userInfo.reason"
              type="textarea"
              input-style="resize: none"
              placeholder="Mentioneaza aici ce rol ai:
              - ghid asistent;
              - membru TLT;
              - ajutor instructor;
              - nu ai grupa dar poti preda specializarile;
              - etc... "
            ></q-input>
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
      optionList: [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      userInfo: {
        teamList: [{ name: "", type: false, year: "", class: "0-4" }],
        reason: "",
        dateOfBirth: "2022/03/21",
        Instructor: "",
        Ghid: "",
        masterGhid: "",
        region: "",
        state: "",
        gender: "Masculin",
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
          message: "Te rog selectează o imagine potrivită",
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
      if (profile.status !== true) {
        profile.teamList = [];
      }
      if (profile.status !== "neither") {
        profile.reason = "";
      }
      // Checks before forwarding the request
      var err = false;
      if (profile.status) {
        profile.teamList.forEach((x) => {
          if (
            x.name == "" ||
            !x.year ||
            x.year.length != 4 ||
            isNaN(x.year) ||
            !x.class ||
            x.class == ""
          ) {
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
        profile.clubName == "" ||
        profile.category == "" ||
        profile.size == ""
      ) {
        this.errorDialog = true;
        this.error = "Te rugăm să reverifici datele introduse.";
        this.isSubmitting = false;
        return;
      }
if(profile.status == 'neither' && profile.reason == ""){
  this.$q.notify({
          color: "red",
          message: "Please give detail",
        });
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
        (profile.Instructor == "" &&
          (profile.Ghid != "" || profile.masterGhid != "")) ||
        (profile.Ghid == "" && profile.masterGhid != "") ||
        parseInt(profile.Instructor) > parseInt(profile.Ghid) ||
        parseInt(profile.Ghid) > parseInt(profile.masterGhid)
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
      } else {
        await this.$store.dispatch("updateUserProfileAdmin", profile);
        this.$router.push("/user-details");
      }
      this.isSubmitting = false;
    },
    addMember() {
      this.userInfo.teamList.push({
        name: "",
        year: "",
        class: "0-4",
        type: false,
      });
    },
    addMemberSpecial() {
      this.userInfo.teamList.push({
        name: "",
        year: "",
        class: "9-12",
        type: true,
      });
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
        this.userInfo.teamList.forEach((x) => {
          if (!x.year) {
            x.year = "";
            x.class = "";
            x.type = false;
          }
        });
      } else {
        this.userInfo = JSON.parse(
          JSON.stringify(this.$store.getters.selectedUser)
        );

        this.tagsInput = this.userInfo.tagList.join(", ");
        this.userInfo.teamList.forEach((x) => {
          if (!x.year) {
            x.year = "";
            x.class = "";
            x.type = false;
          }
        });
      }
    }
    if (this.userInfo?.dateOfBirth) {
      this.userInfo.dateOfBirth = this.userInfo.dateOfBirth.replaceAll(
        "-",
        "/"
      );
      let dateListFinal = this.userInfo.dateOfBirth.split("/");
      this.dateOfBirth =
        dateListFinal[2] + "/" + dateListFinal[1] + "/" + dateListFinal[0];
    }
  },
  computed: {
    availableOptions() {
      let arr = [];
      if (this.userInfo.category === "Licurici") {
        arr = this.optionList[0];
      } else if (this.userInfo.category === "Exploratori") {
        arr = this.optionList[1];
      } else if (this.userInfo.category === "Companioni") {
        arr = this.optionList[2];
      }
      return arr;
    },
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

<style scoped lang="scss">
div {
  :deep(.q-input) {
    border-top-left-radius: 8px;
    overflow: hidden;
  }
}
</style>
