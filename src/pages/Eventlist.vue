<template>
  <div class="container">
    <div class="eventlist">
      <span
        ><q-btn
          color="purple"
          rounded
          type="button"
          class="btn"
          @click="$router.push('/add-event')"
        >
          Add Event
        </q-btn></span
      >
    </div>
    <div style="margin-top: 1rem" class="flex justify-center">
      <q-table
        v-if="userInfo.eventList?.length > 0"
        style="width: 80%"
        title="Event List"
        :rows="userInfo.eventList"
        :columns="[
          {
            name: 'name',
            label: 'Event Name',
            required: true,
            align: 'center',
            field: (item) => item.name,
          },
          {
            name: 'date',
            label: 'Date of Event',
            required: true,
            align: 'center',
            field: (item) => item.date,
          },
        ]"
        flat
        dark
        bordered
        @row-click="showEventDetails"
      />
      <div v-else style="width: 60%">Your Events will show here</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventlistView",
  components: {},
  methods: {
    showEventDetails(e, i, d) {
      this.$store.dispatch("selectEvent", i);
    },
  },
  computed: {
    userInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>
