<template>
  <q-card class="waitingView full-height">
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
        <h3>{{ $t('inregistraInregistrare') }}</h3>
        <h6>{{ $t('teAdministrator') }}</h6>
        <div class="inapoi">
          <q-btn outline class="linkcolor reject-btn" @click="logOut">
            {{ $t('inapoi') }}
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
