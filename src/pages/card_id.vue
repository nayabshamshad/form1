<template>
  <div>
    <div class="company-club-cards-container flex q-mt-xl">
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
              <img src="../assets/card/vector-1.png" />
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
            <div class="relative flex">
              <div>
                <div v-if="isImage" class="upload-img">
                  <img :src="selectedUser.imgUrl" />
                </div>
                <div v-else class="cursor-pointer upload-img-icon bg-lightgray">
                  <img src="../assets/card/camera.png" />
                </div>
                <div class="id-number-div fw-500"><span>ID NUMBER</span></div>
              </div>
              <div class="cardholder-info flex">
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
              <img src="../assets/card/vector.png" alt="" />
              <div class="absolute tin-logo">
                <img src="../assets/card/logo.png" alt="" />
              </div>
              <div class="absolute church-logo">
                <img src="../assets/card/church-logo.png" alt="" />
              </div>
              <div class="absolute qr-code">
                <qrcode-vue margin="3" :value="'user id is ' + selectedUser.uid"></qrcode-vue>
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
export default {
  components: { QrcodeVue },
  computed: {
    selectedUser() {
      return this.$store.getters.selectedUser;
    },
    isImage() {
      return this.selectedUser.imgUrl && this.selectedUser.imgUrl !== "";
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
  width: 850px;
  height: 540px;
  border-radius: 32px;
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
  width: 7.4rem;
  top: 1.3rem;
  left: 2.4rem;
}
.category-name-div {
  top: 0.55rem;
  right: 8.2rem;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.35rem;
}
.legitimate-text-div {
  top: 4.97rem;
  right: 10.8rem;
  letter-spacing: 0.92rem;
}
.card-info-div {
  top: 9.2rem;
  left: 3.15rem;
  min-height: 310px;
}
.upload-img-icon {
  width: 12.9rem;
  padding: 6.27rem 4rem;
}
.upload-img {
  width: 12.9rem;
  height: 17.3rem;
  overflow-y: hidden;

  /* padding-top: 2rem; */
}
.cardholder-info {
  flex-direction: column;
  margin-left: 2rem;
  align-items: flex-start;
  /* margin-top: -20px; */
}
.cardholder-info span:nth-child(odd) {
  font-size: 20px;
  /* margin-bottom:-10px; */
  font-weight: 600;
}
.cardholder-info span:nth-child(even) {
  margin-bottom: 0.3rem;
  font-weight: bolder;
  font-size: 2rem;
}
.id-number-div {
  text-align: center;
  padding-top: 0.8rem;
}
.card-bottom-vector {
  bottom: -34.2rem;
}
.tin-logo {
  width: 12.8rem;
  bottom: 0.3rem;
  left: 3rem;
}
.church-logo {
  width: 2.5rem;
  bottom: 0.4rem;
  left: 16.7rem;
}
.qr-code {
  width: 5.7rem;
  top: 0.8rem;
  right: 2.4rem;
}
</style>