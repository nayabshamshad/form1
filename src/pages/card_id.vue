<template>
  <div>
    <div class="flex justify-end q-mx-auto q-mt-xl" style="max-width: 890px">
      <q-btn
        @click="downloadCard"
        class="bg-linkcolor"
        round
        icon="download"
      ></q-btn>
    </div>
    <div class="company-club-cards-container flex q-mt-md">
      <vue-html2pdf
        ref="html2Pdf"
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :filename="selectedUser.name"
        :pdf-quality="2"
        :manual-pagination="true"
        pdf-orientation="landscape"
        ><template #pdf-content>
          <div
            style="width: 297mm; height: 210mm"
            class="flex justify-center align-center"
          >
            <div
              style="transform: scale(1.225)"
              class="company-club-card"
              :class="
                selectedUser.category === 'Licurici'
                  ? 'pattern-licu'
                  : selectedUser.category === 'Exploratori'
                  ? 'pattern-ecplo'
                  : 'pattern-compa'
              "
            >
              <div class="relative">
                <div class="absolute">
                  <div class="relative">
                    <!-- <img src="../assets/card/vector-1.png" /> -->
                    <img src="../assets/card/Vector-up.png" />
                    <div class="absolute exploration-logo">
                      <img src="../assets/card/exploration-logo.png" />
                    </div>
                    <div class="absolute category-name-div">
                      <span
                        >Asociatia "{{ selectedUser.category }} pentru
                        viitor!"</span
                      >
                    </div>
                  </div>
                </div>
                <div class="absolute legitimate-text-div fw-500 fs-1">
                  <span>LEGITIMATIE</span>
                </div>
                <div class="absolute card-info-div">
                  <div class="relative row">
                    <div>
                      <div v-if="isImage" class="upload-img">
                        <img :src="selectedUser.imgUrl" />
                      </div>
                      <div
                        v-else
                        class="cursor-pointer upload-img-icon bg-lightgray"
                      >
                        <img src="../assets/card/camera.png" />
                      </div>
                      <div class="id-number-div fw-500">
                        <span class="text-uppercase">{{ cardId }}</span>
                      </div>
                    </div>
                    <div class="cardholder-info column content-start">
                      <span>NUME/PRENUME</span>
                      <span>{{ selectedUser.name }}</span>
                      <span>FUNCTIE</span>
                      <span>INSTRUCTOR</span>
                      <span>JUDET</span>
                      <span>{{ selectedUser.region }}</span>
                      <span>LOCALITATE</span>
                      <span>{{ selectedUser.state }}</span>
                    </div>
                  </div>
                </div>
                <div class="absolute card-bottom-vector">
                  <div class="relative">
                    <img src="../assets/card/Vector-down.png" alt="" />
                    <div class="absolute tin-logo">
                      <img src="../assets/card/logo.png" alt="" />
                    </div>
                    <div class="absolute church-logo">
                      <img src="../assets/card/church-logo.png" alt="" />
                    </div>
                    <div class="absolute qr-code">
                      <qrcode-vue margin="4" :value="cardUrl"></qrcode-vue>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </vue-html2pdf>
      <div
        class="company-club-card"
        :class="
          selectedUser.category === 'Licurici'
            ? 'pattern-licu'
            : selectedUser.category === 'Exploratori'
            ? 'pattern-ecplo'
            : 'pattern-compa'
        "
      >
        <div class="relative">
          <div class="absolute">
            <div class="relative">
              <!-- <img src="../assets/card/vector-1.png" /> -->
              <img src="../assets/card/Vector-up.png" />
              <div class="absolute exploration-logo">
                <img src="../assets/card/exploration-logo.png" />
              </div>
              <div class="absolute category-name-div">
                <span
                  >Asociatia "{{ selectedUser.category }} pentru viitor!"</span
                >
              </div>
            </div>
          </div>
          <div class="absolute legitimate-text-div fw-500 fs-1">
            <span>LEGITIMATIE</span>
          </div>
          <div class="absolute card-info-div">
            <div class="relative row">
              <div>
                <div v-if="isImage" class="upload-img">
                  <img :src="selectedUser.imgUrl" />
                </div>
                <div v-else class="cursor-pointer upload-img-icon bg-lightgray">
                  <img src="../assets/card/camera.png" />
                </div>
                <div class="id-number-div fw-500">
                  <span class="text-uppercase">{{ cardId }}</span>
                </div>
              </div>
              <div class="cardholder-info column content-start">
                <span>NUME/PRENUME</span>
                <span>{{ selectedUser.name }}</span>
                <span>FUNCTIE</span>
                <span>INSTRUCTOR</span>
                <span>JUDET</span>
                <span>{{ selectedUser.region }}</span>
                <span>LOCALITATE</span>
                <span>{{ selectedUser.state }}</span>
              </div>
            </div>
          </div>
          <div class="absolute card-bottom-vector">
            <div class="relative">
              <img src="../assets/card/Vector-down.png" alt="" />
              <div class="absolute tin-logo">
                <img src="../assets/card/logo.png" alt="" />
              </div>
              <div class="absolute church-logo">
                <img src="../assets/card/church-logo.png" alt="" />
              </div>
              <div class="absolute qr-code">
                <qrcode-vue margin="4" :value="cardUrl"></qrcode-vue>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import VueHtml2pdf from "vue3-html2pdf";

export default {
  components: { QrcodeVue, VueHtml2pdf },
  mounted() {
    if (!this.$route?.params?.uid) {
      this.$router.push("/");
    }
  },
  data: () => ({
    departmentTypes: {
      Banat: "BN",
      Moldova: "MD",
      Muntenia: "MT",
      Oltenia: "OT",
      "Transilvania de Sud": "TS",
      "Transilvania de Nord": "TN",
    },
  }),
  computed: {
    cardUrl() {
      const path =
        window.location.origin + "/#/user-details/" + this.selectedUser.uid;
      return path.replace(
        "http://localhost:8080/",
        "http://192.168.44.151:8080/"
      );
    },
    selectedUser() {
      const user = this.$store.getters.userList.find(
        (x) => x?.uid === this.$route.params.uid
      );
      if (user) {
        return user;
      }
      return this.$store.getters.selectedUser;
    },
    isImage() {
      return this.selectedUser.imgUrl && this.selectedUser.imgUrl !== "";
    },
    cardId() {
      return this.departmentTypes[
        this.selectedUser.department
          .replaceAll("| HU", "")
          .replaceAll("| RO", "")
          .trim()
      ]
        ? this.departmentTypes[
            this.selectedUser.department
              .replaceAll("| HU", "")
              .replaceAll("| RO", "")
              .trim()
          ]
        : "AA" + this.selectedUser.uid.substring(0, 6);
    },
  },
  methods: {
    downloadCard() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
<style scoped lang="scss">
img {
  width: 100%;
}
.fs-1 {
  font-size: 1.4rem;
}
.flex {
  display: flex;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fw-500 {
  font-weight: 500;
}
.bg-lightgray {
  background-color: #d9d9d9;
}
.company-club-cards-container {
  justify-content: center;
  align-items: center;
}
.company-club-card {
  background-color: #ffffff;
  width: 890px;
  height: 580px;
}
.pattern-licu {
  background-image: url(../assets/card/bg-licu.png);
}
.pattern-ecplo {
  background-image: url(../assets/card/bg-ecplo.png);
}
.pattern-compa {
  background-image: url(../assets/card/bg-compa.png);
}
.exploration-logo {
  width: 7.2rem;
  top: 2.3rem;
  left: 4rem;
}
.category-name-div {
  top: 1.9rem;
  right: 10.2rem;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.4rem;
  letter-spacing: 1.2px;
}
.legitimate-text-div {
  top: 4.97rem;
  right: 11.8rem;
  letter-spacing: 0.97rem;
}
.card-info-div {
  top: 11.5rem;
  left: 3.15rem;
}
.upload-img-icon {
  width: 12.9rem;
  padding: 6.27rem 4rem;
}
.upload-img {
  width: 12.9rem;
  height: 15rem;
  overflow-y: hidden;

  /* padding-top: 2rem; */
}
.cardholder-info {
  flex-direction: column;
  margin-left: 2rem;
  align-items: flex-start;
  line-height: 1.8rem;
}
.cardholder-info span:nth-child(odd) {
  font-size: 20px;
  font-family: "Futura";
  // background: RED;
  font-weight: 300;
}
.cardholder-info span:nth-child(even) {
  margin-bottom: 0.3rem;
  font-weight: 600;
  font-size: 2rem;
}
.id-number-div {
  text-align: center;
  padding-top: 0.8rem;
  font-size: 1.15rem;
}
.card-bottom-vector {
  bottom: -35rem;
}
.tin-logo {
  width: 12.8rem;
  bottom: 1.3rem;
  left: 3rem;
}
.church-logo {
  width: 2.5rem;
  bottom: 1.45rem;
  left: 16.7rem;
}
.qr-code {
  width: 5.7rem;
  top: 0.8rem;
  right: 2.4rem;
}
</style>