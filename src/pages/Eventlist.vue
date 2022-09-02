<template>
  <div class="container">
    <div class="eventlist">
      <span
        ><q-btn color="purple" rounded type="button" class="btn" @click="$router.push('/add-event')">
          Add Event
        </q-btn></span
      >
    </div>
    <!-- <table style="width: 80%" class="table">
      <thead class="thead">
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-if="userInfo?.eventList.length > 0" class="tbody">
        <tr v-for="(e, i) in userInfo.eventList" :key="i">
          <td>{{ e.name }}</td>
          <td>{{ e.date }}</td>
          <td><button @click="showEventDetails(e)">View Details</button></td>
        </tr>
      </tbody>
      <div v-else>No events found, add some events and they will show here</div>
    </table> -->
    <div style="margin-top: 1rem;" class=" flex justify-center">
      <q-table
        v-if="userInfo.eventList?.length > 0"
        style="width: 60%"
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
        row-key="name"
        dark
        color="amber"
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
