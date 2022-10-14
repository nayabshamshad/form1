<template>
  <q-card class="center-card info q-px-lg q-pt-lg add-event-card">
    <div class="container q-py-lg p-px-lg q-mx-lg">
      <div class="flex q-mb-lg q-pb-lg items-center">
        <div style="width: 15%">
          <q-btn
            @click="$router.go(-1)"
            round
            icon="chevron_left"
            class="bg-linkcolor"
          ></q-btn>
        </div>
        <div style="width: 70%" class="text-center">
          <h5 class="linkcolor text-weight-bold">Adaugare Intalnire</h5>
        </div>
        <div style="width: 15%">
          <q-btn
            no-caps
            class="q-px-lg text-weight-bold"
            @click="addEvent"
            color="secondary"
            :loading="isFetching"
            >Salvare</q-btn
          >
        </div>
      </div>
      <div class="row justify-between align-center">
        <div class="shadowed flex justify-between no-wrap" style="width: 63%">
          <h6 style="width: 40%" class="linkcolor text-weight-bold">
            Adaugare Intalnire
          </h6>
          <div style="width: 55%">
            <q-input
              borderless
              v-model="eventName"
              type="text"
              color="blue"
              input-class="linkcolor"
            />
          </div>
        </div>
        <div
          class="shadowed flex no-wrap items-center justify-around"
          style="width: 35%"
        >
          <h6 class="q-my-none linkcolor text-weight-bold">
            {{ eventDateView }}
          </h6>
          <q-icon
            ref="dateIcon"
            name="event"
            class="cursor-pointer linkcolor"
            size="md"
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
          <!-- </template> -->
          <!-- </q-input> -->
        </div>
      </div>
      <div class="shadowed q-mt-lg add-event-textarea">
        <h5 class="text-weight-bold linkcolor">Scurta descriere:</h5>
        <q-input
          v-model="eventDesc"
          label="Adaugati text..."
          type="text"
          autogrow
          input-class="linkcolor"
          :rules="[
            (val) =>
              val.length <= 50 ||
              'Descrierea nu poate fi mai lungă de 50 de caractere.',
          ]"
          input-style="min-height: 8rem;"
          borderless
        />
      </div>
      <div class="shadowed q-mt-lg">
        <h5 class="linkcolor text-center text-weight-bold q-pt-lg q-pb-md">
          Prezenta
        </h5>
        <div class="q-mb-lg add-event-checkboxes">
          <div
            class="shadowed q-my-sm flex justify-between"
            v-for="(user, i) in userData.teamList"
            :key="i"
          >
            <p class="linkcolor text-weight-semibold q-mb-none text-capitalize">
              {{ user.name }}
            </p>
            <q-checkbox :val="user.name" v-model="attendanceList" />
          </div>
        </div>
      </div>
      <div class="shadowed q-mt-lg linkcolor">
        <h5 class="text-weight-bold q-pt-lg">Fotografii:</h5>
        <h6 class="text-weight-light q-mb-md">Adaugati Max. 3 fotografii</h6>
        <div class="flex justify-between no-wrap" style="gap: 3px">
          <div v-for="img, i in previewImages" :key="i" class="img-card">
            <q-btn color="red" size="xs" icon="remove" @click="removeImg(i)" round></q-btn>
             <img :src="img" class="cursor-pointer iconed-img"  alt="">
          </div>
          <div class="img-card select-img" v-for="i in 3-previewImages.length" :key="i" @click="openInput">
            <q-icon name="add_a_photo" size="xl"></q-icon>
          </div>


        </div>
      </div>
      <input
            @change="handleImageUpload"
            type="file"
            ref="imgInput"
            style="display: none"
            name="img"
            accept="image/*"
          />
      <!-- <form class="form">
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
              width: 100%;
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
    </form> -->
    </div>
  </q-card>

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
  mounted() {
    if (
      this.$store?.getters?.userData?.role == "admin" ||
      this.$store?.getters?.userData?.role == "admin"
    ) {
      this.$router.push("/");
    }
  },
  methods: {
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
        this.isFetching = false;
        return;
      }
      if (this.eventDesc == "") {
        this.error = "Te rugăm sa adaugi descrierea întâlnirii.";
        this.errorDialog = true;
        this.isFetching = false;
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

      this.previewImages.splice(e, 1);
      this.localImageList.splice(e, 1);
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
