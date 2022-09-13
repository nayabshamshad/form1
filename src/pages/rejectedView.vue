<template>
  <div class="flex justify-center waiting-container">
    <q-card style="width: 100%; height: 100%" class="flex justify-center">
      <q-card-section>
        <h2>Cerere respinsă</h2>
        <p>
          Cererea ta a fost respinsă, dacă crezi ca este o greșeală, poți
          retrimite o cerere administratorului.
        </p>
        <q-btn
          rounded
          color="green"
          :loading="isFetching"
          @click="requestReconsideration"
        >
          Retrimite
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFetching: false,
    };
  },
  methods: {
    async requestReconsideration() {
      if (this.isFetching) {
        return;
      }
      this.isFetching = true;
      await this.$store.dispatch("updateUserProfile", {
        isAuthorized: "pending",
      });
      this.isFetching = false;
      this.$router.push("/pending");
    },
  },
};
</script>

<style></style>
