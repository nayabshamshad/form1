<template>
  <div class="flex justify-center waiting-container">
    <q-card
      style="width: 100%; height: 100vh; position: relative"
      class="flex justify-center"
    >
      <div>
        <q-icon
          style="position: absolute; top: 10%; left: 5%"
          name="west"
          size="lg"
          @click="logOut"
          class="linkcolor cursor-pointer"
        ></q-icon>
      </div>
      <q-card-section>
        <h2>Înregistrare reușită</h2>
        <p>Te rugăm să aștepți aprobarea unui administrator</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('signOutUser')
    }
  }
};
</script>

<style></style>
