<template>
  <div class="flex justify-center waiting-container">
    <q-card style="width: 100%; height: 100%" class="flex justify-center">
      <q-card-section>
        <h2>Request Denied</h2>
        <p>
          Your request has been declined, however you can ask the admins to
          reconsider your request.
        </p>
        <q-btn
          rounded
          color="green"
          :loading="isFetching"
          @click="requestReconsideration"
        >
          Request
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
