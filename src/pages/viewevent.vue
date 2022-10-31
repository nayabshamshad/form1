<template>
  <q-card class="center-card q-px-lg info view-event">
    <div class="container q-py-lg p-px-lg q-mx-lg">
      <div class="flex q-mb-lg q-pb-lg items-center">
        <div style="width: 30%">
          <q-btn
            @click="$router.go(-1)"
            round
            icon="chevron_left"
            class="bg-linkcolor"
          ></q-btn>
        </div>
        <div style="width: 40%" class="text-center">
          <h5 class="linkcolor text-weight-bold">{{ currentEvent.name }}</h5>
        </div>
        <div style="width: 30%">
          <h6 class="linkcolor text-right text-weight-bold text-no-wrap">
            {{ formatDate(currentEvent.date) }}
          </h6>
        </div>
      </div>
      <div class="shadowed" style="min-height: 220px; padding-top: 1rem">
        <h5 class="text-weight-bold linkcolor text-left q-px-md">
          Scurtă descriere:
        </h5>
        <p
          style="text-align: left"
          class="text-left q-px-md text-weight-normal linkcolor"
        >
          {{ currentEvent.desc }}
        </p>
      </div>
      <div class="shadowed q-mt-lg q-pb-md">
        <h5 class="linkcolor text-weight-bold text-center q-pt-md">Prezența</h5>
        <div class="q-pb-lg q-pt-md">
          <div
            v-for="(student, i) in memberList"
            :key="i"
            class="shadowed flex items-center justify-between q-mt-sm q-mb-md"
            style="padding-left: 1rem; padding-right: 1rem"
          >
            <p class="q-mb-none text-capitalize">{{ student }}</p>
            <q-icon
              :name="
                currentEvent.attendanceList.includes(student)
                  ? 'check'
                  : 'close'
              "
              :style="
                currentEvent.attendanceList.includes(student)
                  ? 'color: green;'
                  : 'color: red;'
              "
              size="md"
            />
          </div>
        </div>
      </div>
      <div
        class="shadowed"
        style="min-height: 220px; padding-top: 1rem; margin-top: 2rem"
      >
        <h5 class="text-weight-bold linkcolor text-left q-px-md">
          Fotografii:
        </h5>
        <div class="flex justify-center items-center event-img-container">
          <div
            v-for="(src, i) in currentEvent.imageList"
            :key="i"
            class="flex justify-center align-center"
          >
            <img :src="src" alt="" @click="showImg(src)" />
          </div>
        </div>
      </div>
      <!-- <form class="form category-form event-form">
      <div class="cate-list-home">
        <label for="name">Tema întâlnirii:</label>
        <span>{{ currentEvent.name }}</span>
      </div>
      <div class="cate-list-home">
        <label for="date">Data:</label>
        <span>{{ currentEvent.date }}</span>
      </div>
      <div class="cate-list-home">
        <label for="Description">Scurtă descriere:</label>
        <span>{{ currentEvent.desc }}</span>
      </div>

      <div class="cate-list-home">
        <label>Prezența:</label>
        <div class="teamMember" v-for="(student, i) in memberList" :key="i">
          <span
            style="
              text-transform: capitalize;
              font-style: italic;
              margin: 5px 0;
              width: 30%;
              border-bottom: 1px solid #555;
            "
          >
            {{ student }}
          </span>
          <span
            v-if="currentEvent.attendanceList.includes(student)"
            style="font-size: 20px; color: rgb(21, 76, 143)"
          >
            &check;
          </span>
          <span v-else style="font-size: 20px; color: rgb(153, 29, 44)"
            >&times;</span
          >
        </div>
      </div>
      <div
        class="cate-list-home img-holder"
        style="min-height: 120px; max-height: 200px"
      >
        <div
          v-for="(src, i) in currentEvent.imageList"
          :key="i"
          class="img-container"
        >
          <img :src="src" alt="" @click="showImg(src)" />
        </div>
      </div>
    </form> -->
    </div>
  </q-card>

  <!-- IMG view dialog -->
  <q-dialog v-model="dialogBox">
    <q-card style="width: 100%">
      <q-card-section style="background: #ccc" class="q-pt-none q-pb-none">
        <q-img :src="imgSrc"></q-img>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: "vieweventView",
  components: {},
  data() {
    return {
      currentEvent: {
        name: "",
        desc: "",
        date: "",
        attendanceList: [],
        imageList: [],
        imgSrc: "",
      },
      dialogBox: false,
    };
  },
  methods: {
    formatDate(e) {
      if (e && new Date(e)) {
        let date = new Date(e);
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
      } else {
        return "";
      }
    },
    showImg(src) {
      this.dialogBox = true;
      this.imgSrc = src;
    },
  },
  mounted() {
    this.currentEvent = {
      name: this.selectedEvent.name,
      date: this.selectedEvent.date,
      attendanceList: [...this.selectedEvent.attendanceList],
      desc: this.selectedEvent.desc,
      imageList: this.selectedEvent?.imageList,
    };
  },
  computed: {
    selectedEvent() {
      return this.$store.getters.selectedEvent;
    },
    memberList() {
      let list = [];
      if (this.$store.getters.userData?.role != "admin") {
        this.$store.getters.userData?.teamList.forEach((x) => {
          list.push(x.name);
        });
      } else {
        this.$store.getters.selectedUser?.teamList.forEach((x) => {
          list.push(x.name);
        });
      }
      return list;
    },
  },
};
</script>
