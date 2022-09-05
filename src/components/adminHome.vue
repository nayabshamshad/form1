<template>
  <div class="container">
    <q-tabs
      dense
      active-color="blue"
      indicator-color="blue"
      align="justify"
      class="text-black"
      narrow-indicator
      v-model="tabs"
    >
      <q-tab name="approved" label="Approved Users"></q-tab>
      <q-tab name="pending" label="Pending Users"></q-tab>
    </q-tabs>
    <q-tab-panels v-model="tabs">
      <!-- Approved User Listing -->
      <q-tab-panel name="approved">
        <div class="table-container">
        <table class="user-list-table">
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Club Name</th>
              <th>Member Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user, i in approvedUsers" :key="i">
              <td>{{user.name}}</td>
              <td>{{user.clubName}}</td>
              <td>{{user.email}}</td>
              <td>{{user.phoneNumber}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </q-tab-panel>

      <!-- Pending User Listing -->
      <q-tab-panel name="pending"> peda wah wah </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      tabs: "approved",
    };
  },
  methods: {
    async getData() {
      await this.$store.dispatch("getUserList");
    },
  },
  computed: {
    userList() {
      return this.$store.getters.userList;
    },
    approvedUsers() {
      return this.userList.filter(x => {
        return x.isAuthorized == 'true' && x.role != 'admin'
      })
    }
  },
};
</script>

<style></style>
