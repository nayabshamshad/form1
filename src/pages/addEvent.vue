<template>
  <div class="container">
    <form class="form">
      <h2>Add Event</h2>
      <div class="cate-list">
        <q-input
          v-model="eventName"
          type="text"
          label="Event Name"
          label-color="black"
          placeholder="Enter Name"
        />
      </div>
      <div class="cate-list">
        <label style="font-size: 16px">Event Date</label>
        <q-input v-model="eventDate" mask="date" type="date"> </q-input>
      </div>
      <div class="cate-list">
        <q-input
          label="Description"
          v-model="eventDesc"
          type="textarea"
          label-color="black"
          placeholder="Enter Description Here..."
        />
      </div>
      <div class="cate-list">
        <label style="font-size: 16px; display: block">
          Present Members:
        </label>
        <div
          v-for="(user, i) in userData.teamList"
          :key="i"
          style="display: flex"
        >
          <span
            style="
              width: 30%;
              font-style: italic;
              text-transform: capitalize;
              display: block;
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
              >Upload Images (Max 3)</label
            >
            <q-btn color="purple" @click="$refs.imgInput.click()" round
              >+</q-btn
            >
          </div>
          <input
            @change="handleImageUpload"
            type="file"
            ref="imgInput"
            style="display: none"
            name="img"
            accept="image/*"
            multiple
          />
        </div>
        <div
          v-if="previewImages.length > 0"
          style="
            height: 175px;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            padding: 1rem;
          "
        >
          <div v-for="(img, i) in previewImages" :key="i" style="width: 30%">
            <img style="width: 100%" :src="img" alt="" />
          </div>
        </div>
        <div v-else style="height: 175px" class="flex justify-center">
          Uploaded Images will show here.
        </div>
      </div>
      <div class="flex justify-center">
        <q-btn
          type="button"
          class="btn"
          :loading="isFetching"
          color="purple"
          @click="addEvent"
          >Submit</q-btn
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
      eventDate: "2022-08-02",
      eventDesc: "",
      imageList: [],
      localImageList: [],
      isFetching: false,
      previewImages: [],
      errorDialog: false,
      error: "There was an unexpected error",
      attendanceList: [],
    };
  },
  methods: {
    async addEvent() {
      if (this.isFetching) {
        return;
      }
      this.isFetching = true;
      let urlList = [];
      // let img_name = new Date() + "-" + x.name;
      const files = this.localImageList;
      console.log(files.length);
      if (files.length == 0) {
        this.error = "You need to upload atleast one image!";
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
        console.log(urlList);
      } else {
        this.error = "Please select a valid number of images";
        this.errorDialog = true;
        this.isFetching = false;
        return;
      }
      if (this.eventDate == "") {
        this.error = "Please select a date for the event";
        this.errorDialog = true;
        return;
      }
      if (this.eventDesc == "") {
        this.error = "Please enter a description for the event";
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
      if (e.target.files.length < 4) {
        var imgList = [];
        var previewImages = [];
        Object.entries(e.target.files).forEach((x) => {
          const file = x[1];
          previewImages.push(URL.createObjectURL(file));
          imgList.push(file);
        });
        this.localImageList = imgList;
        this.previewImages = previewImages;
      } else {
        alert("You can not upload more than 3 files");
        this.localImageList = [];
        this.previewImages = [];
      }
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
      console.log(this.attendanceList);
    },
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
  },
};
</script>
