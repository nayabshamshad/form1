<template>
  <div class="container">
    <form class="form">
      <h2>Adaugare întâlnire</h2>
      <div class="cate-list">
        <q-input
          v-model="eventName"
          type="text"
          label="Tema întâlnirii:"
          label-color="black"
        />
      </div>
      <div class="cate-list">
        <label style="font-size: 16px">Data întâlnirii:</label>
        <!-- <q-input v-model="eventDate" mask="date" type="date"> </q-input> -->
        <q-input
          filled
          v-model="eventDateView"
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
                  v-model="eventDate"
                  @update:model-value="handleDateChange"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="cate-list">
        <q-input
          label="Descriere (max. 50 de caractere)"
          v-model="eventDesc"
          type="text"
          label-color="black"
          :rules="[
            (val) =>
              val.length <= 50 ||
              'Descrierea nu poate fi mai lungă de 50 de caractere.',
          ]"
        />
      </div>
      <div class="cate-list">
        <label style="font-size: 16px; display: block"> Prezența: </label>
        <div
          v-for="(user, i) in userData.teamList"
          :key="i"
          style="display: flex; justify-content: space-around"
        >
          <span
            style="
              width: 30%;
              font-style: italic;
              text-transform: capitalize;
              display: block;
              border-bottom: 1px solid;
              text-align: center;
            "
          >
            {{ user.name }}
          </span>
          <input type="checkbox" :value="user.name" @change="addUser" />
        </div>
      </div>

      <div class="cate-list">
        <div>
          <div>
            <label style="display: block; font-size: 16px; margin-bottom: 1rem"
              >Încarcă imaginile (max. 3)</label
            >
            <q-btn color="purple" @click="openInput" round>+</q-btn>
          </div>
          <input
            @change="handleImageUpload"
            type="file"
            ref="imgInput"
            style="display: none"
            name="img"
            accept="image/*"
          />
        </div>
        <div v-if="previewImages.length > 0" class="img_holder">
          <div
            class="add-img"
            v-for="(img, i) in previewImages"
            :key="i"
            style="width: 30%"
          >
            <q-btn @click="removeImg(img)" color="red" round size="sm">-</q-btn>
            <img
              style="width: 100%; cursor: pointer"
              class="add-event-img"
              :src="img"
              alt=""
            />
            <div></div>
          </div>
        </div>
        <div v-else style="height: 175px" class="flex justify-center">
          Imaginiile incărcate vor apărea aici
        </div>
      </div>
      <div class="flex justify-center">
        <q-btn
          type="button"
          class="btn"
          :loading="isFetching"
          color="purple"
          @click="addEvent"
          >Trimite</q-btn
        >
      </div>
    </form>
  </div>
  <q-dialog v-model="errorDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
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
import { snapshotEqual } from "@firebase/firestore";
import { storage } from "../store/firebase";
export default {
  name: "addeventView",
  components: {},
  data() {
    return {
      eventName: "",
      eventDate: "2022/08/02",
      eventDesc: "",
      imageList: [],
      localImageList: [],
      isFetching: false,
      previewImages: [],
      errorDialog: false,
      error: "Te rugăm să reverifici datele introduse. ",
      attendanceList: [],
      eventDateView: "02/08/2022",
    };
  },
  methods: {
    openModal() {
      this.$refs.dateIcon.$el.click();
      this.$refs.dateIcon.$el.focus();
    },
    handleDateChange(e, d, c) {
      let day = `${c.day}`.length == 1 ? "0" + c.day : c.day;
      let month = `${c.month}`.length == 1 ? "0" + c.month : c.month;
      this.eventDateView = day + "/" + month + "/" + c.year;
    },
    openInput() {
      if (this.previewImages.length < 3) {
        this.$refs.imgInput.click();
      } else {
        this.$q.notify({
          message: "Nu poți adauga mai mult de 3 (trei) fotografii.",
          color: "red",
        });
      }
    },
    async addEvent() {
      if (this.isFetching) {
        return;
      }
      this.isFetching = true;
      let urlList = [];
      if (this.eventDesc.length > 50) {
        this.isFetching = false;
        return;
      }
      const files = this.localImageList;
      if (files.length == 0) {
        this.error = "Trebuie încărcată cel puțin o fotografie!";
        this.errorDialog = true;
        this.isFetching = false;
        return;
      } else if (files.length < 4) {
        let img_name_1 = new Date() + "-" + files[0].name;
        await storage
          .child(img_name_1)
          .put(files[0], {
            contentType: files[0].type,
          })
          .then((snapshot) => snapshot.ref.getDownloadURL())
          .then((url) => {
            urlList.push(url);
          });
        if (files.length > 1) {
          let img_name_2 = new Date() + "-" + files[1].name;
          await storage
            .child(img_name_2)
            .put(files[1], {
              contentType: files[1].type,
            })
            .then((snapshot) => snapshot.ref.getDownloadURL())
            .then((url) => {
              urlList.push(url);
            });
          if (files.length > 2) {
            let img_name_3 = new Date() + "-" + files[2].name;
            await storage
              .child(img_name_3)
              .put(files[2], {
                contentType: files[2].type,
              })
              .then((snapshot) => snapshot.ref.getDownloadURL())
              .then((url) => {
                urlList.push(url);
              });
          }
        }
        this.imageList = urlList;
      } else {
        this.error = "Poți încărca între 1-3 fotografii.";
        this.errorDialog = true;
        this.isFetching = false;
        return;
      }
      if (this.eventDate == "") {
        this.error = "Te rugăm sa selectează data întâlnirii.";
        this.errorDialog = true;
        return;
      }
      if (this.eventDesc == "") {
        this.error = "Te rugăm sa adaugi descrierea întâlnirii.";
        this.errorDialog = true;
        return;
      }
      await this.$store.dispatch("addEvent", {
        name: this.eventName,
        desc: this.eventDesc,
        date: this.eventDate,
        attendanceList: this.attendanceList,
        imageList: this.imageList,
      });
      this.isFetching = false;
    },
    handleImageUpload(e) {
      // this.localImageList, this.previewImages
      if (this.previewImages.length < 3) {
        const file = e.target.files[0];
        this.previewImages.push(URL.createObjectURL(file));
        this.localImageList.push(file);
      } else if (this.previewImages.length >= 3) {
        this.$q.notify({
          message: "Nu poți incărca mai mult de 3 fotografii.",
          color: "red",
        });
      }
    },
    removeImg(e) {
      const index = this.previewImages.findIndex((x) => {
        return x === e;
      });
      this.previewImages.splice(index, 1);
      this.localImageList.splice(index, 1);
    },
    addUser(e) {
      if (this.attendanceList.includes(e.target.value) && !e.target.checked) {
        let index = this.attendanceList.findIndex((x) => {
          return x == e.target.value;
        });
        this.attendanceList.splice(index, 1);
      } else if (
        e.target.checked &&
        !this.attendanceList.includes(e.target.value)
      ) {
        this.attendanceList.push(e.target.value);
      }
    },
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
  },
};
</script>
