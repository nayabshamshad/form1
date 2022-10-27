<template>
  <q-card class="waitingViews full-height">
    <q-card-section>
      <div class="container">
        <img
          style="
            margin-left: 40%;
            margin-right: auto;
            margin-top: 20%;
            margin-bottom: 5%;
            width: 20%;
          "
          src="../assets/lectin-mic.png"
        />
        <h3>Înregistrare reușită</h3>
        <h6>Te rugăm să aștepți aprobarea unui administrator</h6>
        <div class="inapoi">
          <q-btn outline class="linkcolor reject-btn" @click="logOut">
            Înapoi
          </q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("signOutUser");
    },
  },
};
</script>

<style></style>
