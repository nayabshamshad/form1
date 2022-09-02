<template>
  <div class="container">
    <form class="form">
      <h2>Add Event</h2>
      <div>
        <label for="name"><b>Name:</b></label>
        <input
          v-model="eventName"
          type="text"
          placeholder="Enter Name"
          name="name"
        />
      </div>
      <div class="cate-list">
        <label for="date"><b>Date:</b></label>
        <input type="date" v-model="eventDate" id="date" name="date"  min="2018-03" value="2018-05"/>/>
      </div>
      <div class="cate-list">
        <label for="description"><b>Description:</b></label>
        <textarea
          v-model="eventDesc"
          type="text"
          name="description"
          placeholder="Enter Description"
        ></textarea>
      </div>

      <div class="cate-list">
        <label for="img"><b>Select image:</b></label>
        <input
          @change="handleImageUpload"
          type="file"
          id="img"
          name="img"
          accept="image/*"
          multiple
        />
      </div>
      <!-- <div class="cate-list">
        <label for="listofstudent"><b>List of Student:</b></label>
        <select>
          <option value="List of Student">List of Student</option>
          <option value="a">amna</option>
          <option value="b">nimra</option>
          <option value="c">sana</option>
        </select>
      </div> -->
      <button type="button" class="btn" @click="addEvent">Submit</button>
    </form>
  </div>
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
      eventDate: "",
      eventDesc: "",
      imageList: [],
      localImageList: [],
      isFetching: false,
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
        alert("You need to upload atleast one image!");
        this.isFetching = false
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
        alert("Please select a valid number of images");
        this.isFetching = false
        return;
      }
      await this.$store.dispatch("addEvent", {
        name: this.eventName,
        desc: this.eventDesc,
        date: this.eventDate,
        attendanceList: [],
        imageList: this.imageList,
      });
      this.isFetching = false;
    },
    async handleImageUpload(e) {
      if (e.target.files.length < 4) {
        var imgList = [];
        await Object.entries(e.target.files).forEach((x) => {
          const file = x[1];
          imgList.push(file);
        });
        this.localImageList = imgList;
      } else {
        alert("You can not upload more than 3 files");
        this.localImageList = [];
      }
    },
  },
};
</script>
