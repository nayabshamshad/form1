<template>
  <q-card class="my-card info">
    <q-card-section>
      <div class="container">
        <div class="flex justify-end">
          <q-btn
          v-show="dateContained"
            round
            @click="isEdit = !isEdit"
            icon="edit_note"
            class="bg-linkcolor"
          ></q-btn>
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
        <div
          class="shadowed q-mt-md user-details"
          style="display: inline-flex; width: 100%; gap: 10%; padding: 1.5rem"
        >
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
        <div v-show="userData.status" class="shadowed q-mt-md">
          <h2>Lista Copiilor</h2>
          <div class="children-list">
            <div
              v-for="(member, i) in userData.teamList"
              :key="i"
              class="section"
            >
              {{ member.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- edit Info dialog -->
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
                    round
                    v-close-popup
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
                      <q-icon class="text-grey" name="photo_camera"></q-icon>
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
                  <label for="Gender">Sex:</label>
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
                      label="Femenin"
                    />
                  </div>
                </div>
                <!--
          <div class="cate-list right">
            <label for="uname">Mărimea tricou</label>
            <q-select outlined v-model="dataUser.size" :options="sizeOptions" />
          </div> -->
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
                  <label for="uname">Specializări pe care le poți preda</label>
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
      </q-dialog>

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
