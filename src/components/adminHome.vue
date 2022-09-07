<template>
  <div class="container">
    <q-tabs
      active-color="red"
      indicator-color="red"
      class="text-black"
      v-model="tabs"
      no-caps
    >
      <q-tab name="approved" label="Approved"></q-tab>
      <q-tab name="pending" label="Pending"></q-tab>
      <q-tab name="declined" label="Declined"></q-tab>
      <q-tab name="date" label="Edit Date"></q-tab>
    </q-tabs>
    <q-tab-panels v-model="tabs">
      <!-- Approved User Listing -->
      <q-tab-panel name="approved">
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Member Name</th>
                <th class="hideMobile">Phone</th>
                <th>Member Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in approvedUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="viewUser(user)">{{ user.phoneNumber }}</td>
                <td @click="viewUser(user)">{{ user.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-tab-panel>

      <!-- Pending User Listing -->
      <q-tab-panel name="pending">
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Member Name</th>
                <th class="hideMobile">Phone</th>
                <th>Member Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in pendingUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="viewUser(user)">{{ user.phoneNumber }}</td>
                <td @click="viewUser(user)">{{ user.email }}</td>
                <td>
                  <q-btn
                    color="green"
                    icon="check"
                    size="xs"
                    round
                    @click="approveUser(user.uid)"
                  />
                  <q-btn
                    @click="declineUser(user.uid)"
                    color="red"
                    size="xs"
                    text-color="white"
                    round
                    icon="close"
                  ></q-btn>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-tab-panel>

      <!-- Declined Users -->
      <q-tab-panel name="declined">
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Member Name</th>
                <th class="hideMobile">Number</th>
                <th>Member Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in declinedUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="viewUser(user)">{{ user.phoneNumber }}</td>
                <td @click="viewUser(user)">{{ user.email }}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </q-tab-panel>
      <q-tab-panel name="date">
        <div>
          <div class="flex justify-center">
            <q-date v-model="dateModel" range></q-date>
          </div>
          <div
            class="flex"
            style="
              justify-content: flex-end;
              width: 70%;
              margin-top: 1rem;
              min-width: 200px;
            "
          >
            <q-btn
              round
              icon="check"
              color="green"
              :loading="dateSetting"
              @click="setDate"
            ></q-btn>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getData();
    if (this.dateList) {
      this.dateModel = this.dateList;
    }
  },
  data() {
    return {
      tabs: "approved",
      dateModel: { from: "2020/07/08", to: "2020/07/17" },
      dateSetting: false,
    };
  },
  watch: {
    dateList: {
      handler: function () {
        this.dateModel = this.dateList;
      },
    },
    tabs: {
    handler: function() {
      this.getData()
    }
  }
  },
  methods: {
    async getData() {
      await this.$store.dispatch("getUserList");
    },
    async approveUser(uid) {
      await this.$store.dispatch("approveUser", uid);
    },
    async declineUser(uid) {
      await this.$store.dispatch("declineUser", uid);
    },
    async deleteUser(uid) {
      await this.$store.dispatch("deleteUser", uid);
    },
    viewUser(user) {
      this.$store.dispatch("setSelectedUser", user);
      this.$router.push("/user-details");
    },
    async setDate() {
      if (this.dateSetting) {
        return;
      }
      if (!this.dateModel) {
        this.$q.notify({
          color: "red",
          message: "Please set a valid date",
        });
        return;
      }
      this.dateSetting = true;
      await this.$store.dispatch("setDateRange", this.dateModel);
      this.dateSetting = false;
    },
  },
  computed: {
    userList() {
      return this.$store.getters.userList;
    },
    approvedUsers() {
      return this.userList.filter((x) => {
        return x.isAuthorized == true && x.role != "admin";
      });
    },
    declinedUsers() {
      return this.userList.filter((x) => {
        return x.isAuthorized == false && x.role != "admin";
      });
    },
    pendingUsers() {
      return this.userList.filter((x) => {
        return x.isAuthorized == "pending" && x.role != "admin";
      });
    },
    dateList() {
      return this.$store.getters.dateList;
    },
  },
};
</script>

<style></style>
