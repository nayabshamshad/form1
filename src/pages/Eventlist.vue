<template>
  <div class="container">
    <div class="eventlist">
      <span>Event List</span>
      <span><button type="button" class="btn" @click="$router.push('/add-event')">Add Event</button></span>
    </div>
    <table class="table">
      <thead class="thead">
        <tr>
          <th>Event Name</th>
          <th>Date</th>
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
    </table>
  </div>
</template>
<script>
export default {
  name: "EventlistView",
  components: {},
  methods: {
    showEventDetails(e) {
this.$store.dispatch('selectEvent', e)
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>
