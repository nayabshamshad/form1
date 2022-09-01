<template>
  <div class="container">
    <div class="eventlist">
      <span>Event List</span>
      <span><button type="button" class="btn">Add Event</button></span>
    </div>
    <table class="table">
      <thead class="thead">
        <tr>
          <th>Event Name</th>
          <th>Date</th>
          <th>View detail</th>
        </tr>
      </thead>
      <tbody v-if="userInfo?.eventList.length > 0" class="tbody">
        <tr v-for="(event, i) in userInfo.eventList" :key="i">
          <td>{{ event.name }}</td>
          <td>{{ event.date }}</td>
          <td><button>View Details</button></td>
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
  computed: {
    userInfo() {
      return this.$store.getters.userData;
    },
  },
};
</script>
