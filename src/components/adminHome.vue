<template>
  <div class="container">
    <q-tab-panels v-model="tabs">
      <!-- Approved User Listing -->
      <q-tab-panel name="approved">
        <div
          class="flex"
          style="
            justify-content: flex-end;
            max-width: 90%;
            margin-bottom: 2rem;
            gap: 5%;
          "
        >
          <div style="width: 30%; min-width: 150px">
            <q-select
              v-if="$store.getters.userData.role == 'admin'"
              :options="departmentList"
              v-model="departmentName"
            ></q-select>
          </div>
          <q-btn
            round
            @click="exportFile(approvedUsers, 'Approved')"
            color="green"
            icon="download"
          ></q-btn>
        </div>
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Nume/Prenume</th>
                <th>Nr. de telefon</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in approvedUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="callUser(user.phoneNumber)">
                  {{ user.phoneNumber }}
                </td>
                <td class="showMobile" @click="callUser(user.phoneNumber)">
                  <q-icon name="phone"></q-icon>
                </td>
                <td @click="mailUser(user.email)" class="hideMobile last">
                  {{ user.email }}
                </td>
                <td @click="mailUser(user.email)" class="showMobile last">
                  <q-icon name="email"></q-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-tab-panel>

      <!-- Pending User Listing -->
      <q-tab-panel name="pending">
        <div
          class="flex"
          style="
            justify-content: flex-end;
            max-width: 90%;
            gap: 5%;
            margin-bottom: 2rem;
          "
        >
          <div style="width: 30%; min-width: 150px">
            <q-select
              v-if="$store.getters.userData.role == 'admin'"
              :options="departmentList"
              v-model="departmentName"
            ></q-select>
          </div>
          <q-btn
            round
            @click="exportFile(pendingUsers, 'Pending')"
            color="green"
            icon="download"
          ></q-btn>
        </div>
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Nume/Prenume</th>
                <th>Nr. de telefon</th>
                <th>E-mail</th>
                <th>Acțiune</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in pendingUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="callUser(user.phoneNumber)">
                  {{ user.phoneNumber }}
                </td>
                <td class="showMobile" @click="callUser(user.phoneNumber)">
                  <q-icon name="phone"></q-icon>
                </td>
                <td @click="mailUser(user.email)" class="hideMobile last">
                  {{ user.email }}
                </td>
                <td @click="mailUser(user.email)" class="showMobile last">
                  <q-icon name="email"></q-icon>
                </td>

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
        <div
          class="flex"
          style="
            justify-content: flex-end;
            max-width: 90%;
            gap: 5%;
            margin-bottom: 2rem;
          "
        >
          <div style="width: 30%; min-width: 150px">
            <q-select
              v-if="$store.getters.userData.role == 'admin'"
              :options="departmentList"
              v-model="departmentName"
            ></q-select>
          </div>
          <q-btn
            round
            @click="exportFile(declinedUsers, 'Declined')"
            color="green"
            icon="download"
          ></q-btn>
        </div>
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Nume/Prenume</th>
                <th>Nr. de telefon</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in declinedUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="viewUser(user)">
                  {{ user.phoneNumber }}
                </td>
                <td class="showMobile" @click="callUser(user.phoneNumber)">
                  <q-icon name="phone"></q-icon>
                </td>
                <td @click="mailUser(user.email)" class="hideMobile last">
                  {{ user.email }}
                </td>
                <td @click="mailUser(user.email)" class="showMobile last">
                  <q-icon name="email" />
                </td>
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
      <!-- Departments Listing -->
      <q-tab-panel name="departments">
        <div
          class="flex"
          style="
            justify-content: flex-end;
            max-width: 90%;
            gap: 5%;
            margin-bottom: 2rem;
          "
        >
          <q-btn
            no-caps
            round
            color="secondary"
            @click="showDepartmentDialog = true"
            icon="add"
          />
        </div>
        <div class="table-container">
          <table class="user-list-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in departmentUsers" :key="i">
                <td @click="viewUser(user)">{{ user.name }}</td>
                <td class="hideMobile" @click="viewUser(user)">
                  {{ user.phoneNumber }}
                </td>
                <td class="showMobile" @click="callUser(user.phoneNumber)">
                  <q-icon name="phone"></q-icon>
                </td>
                <td @click="viewUser(user)" class="last">
                  {{ user.departmentName }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <q-dialog v-model="showDepartmentDialog">
      <q-card class="q-px-md q-py-lg">
        <q-card-section class="text-center">
          <h5 class="q-mb-lg">You can add department admins using this link</h5>
          <p @click="copyLink" class="text-primary link-text cursor-pointer">
            {{ departmentLink }}
          </p>
          <q-card-actions align="right">
            <q-btn @click="copyLink" no-caps color="secondary" flat
              >Copy to Clipboard</q-btn
            >
          </q-card-actions>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn rounded flat color="grey" v-close-popup>Close</q-btn>
        </q-card-actions>
      </q-card></q-dialog
    >
  </div>
</template>

<script>
import writeXlsxFile from "write-excel-file";

export default {
  mounted() { 
    if (this.$route?.query?.q) {
      if (
        this.$route?.query?.q == "departments" &&
        this.$store.getters.userData?.role != "admin"
      ) {
        this.tabs = "approved";
      } else {
        this.tabs = this.$route?.query?.q;
      }
    }
    this.getData();
    if (this.dateList) {
      this.dateModel = this.dateList;
    }
    if (this.$store.getters.userData?.role == "department") {
      this.departmentName = this.$store.getters.userData?.departmentName;
    }
  },
  data() {
    return {
      tabs: "approved",
      dateModel: { from: "2020/07/08", to: "2020/07/17" },
      loading: false,
      dateSetting: false,
      departmentName: "All",
      showDepartmentDialog: false,
    };
  },
  watch: {
    "$route.query.q": {
      handler: function () {
        if (this.$route?.query?.q) {
          if (
            this.$route?.query?.q == "departments" &&
            this.$store.getters.userData?.role != "admin"
          ) {
            this.tabs = "approved";
          } else {
            this.tabs = this.$route.query.q;
          }
        } else {
          this.tabs = "approved";
        }
      },
      deep: true,
      immediate: true,
    },
    dateList: {
      handler: function () {
        this.dateModel = this.dateList;
      },
    },
    tabs: {
      handler: function () {
        this.getData();
      },
    },
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(this.departmentLink);
      this.$q.notify({
        message: "Text copied to clipboard",
      });
    },
    mailUser(email) {
      if (email != "") {
        window.open(`mailto: ${email}`);
      }
    },
    callUser(number) {
      if (number != "") {
        window.open(`tel: ${number}`);
      }
    },
    exportFile(users, fileName) {
      const header_row = [
        {
          value: "Numele și prenumele",
          fontWeight: "bold",
        },
        {
          value: "E-mail",
          fontWeight: "bold",
        },
        {
          value: "Număr de telefon",
          fontWeight: "bold",
        },
        {
          value: "Data nașterii",
          fontWeight: "bold",
        },
        {
          value: "Etnie",
          fontWeight: "bold",
        },
        {
          value: "Sex",
          fontWeight: "bold",
        },
        {
          value: "Marime tricou",
          fontWeight: "bold",
        },
        {
          value: "Zona",
          fontWeight: "bold",
        },
        {
          value: "Comunitatea",
          fontWeight: "bold",
        },
        {
          value: "Categoria",
          fontWeight: "bold",
        },
        {
          value: "Club",
          fontWeight: "bold",
        },
        {
          value: "Instructor - anul investiturii:",
          fontWeight: "bold",
        },
        {
          value: "Ghid - anul investiturii:",
          fontWeight: "bold",
        },
        {
          value: "Master Ghid - anul investiturii:",
          fontWeight: "bold",
        },
        {
          value: "Specializările",
          fontWeight: "bold",
        },
        {
          value: "Status",
          fontWeight: "bold",
        },
      ];
      let arr = [header_row];
      users.forEach((x) => {
        let newDate = "";
        if (x.dateOfBirth != "") {
          let date = new Date(x.dateOfBirth);
          const monthList = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          const month = monthList[date.getMonth()];
          newDate = date.getDate() + " " + month + ", " + date.getFullYear();
        }
        let userArr = [];

        userArr.push(
          {
            value: x.name,
          },
          {
            value: x.email,
          },
          {
            value: x.phoneNumber,
          },
          {
            value: newDate,
          },
          {
            value: x.etnic,
          },
          { value: x.gender },
          { value: x.size },
          { value: x.region },
          {
            value: x.state,
          },
          {
            value: x.category,
          },
          {
            value: x.clubName,
          },
          {
            value: x.Instructor,
          },
          {
            value: x.Ghid,
          },
          {
            value: x.masterGhid,
          },
          {
            value: x?.tagList ? x.tagList.join(", ") : "",
          },
          {
            value: x.status ? "Active" : "InActive",
          }
        );
        arr.push(userArr);
      });
      writeXlsxFile(arr, {
        fileName: fileName + ".xlsx",
      });
    },
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
          message: "Te rugăm să introduci corect data.",
        });
        return;
      }
      this.dateSetting = true;
      await this.$store.dispatch("setDateRange", {
        date: this.dateModel,
        uid: this.$store.getters.userData.uid,
      });
      this.dateSetting = false;
    },
  },
  computed: {
    departmentUsers() {
      return this.$store.getters.userList.filter((x) => {
        return x.role == "department";
      });
    },
    userList() {
      return this.$store.getters.userList;
    },
    approvedUsers() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == "All") {
          return (
            x.isAuthorized == true &&
            x.role != "admin" &&
            x.role != "department"
          );
        } else {
          return (
            x.isAuthorized == true &&
            x.role != "admin" &&
            x.role != "department" &&
            x.department == this.departmentName
          );
        }
      });
      return arr;
    },
    declinedUsers() {
      return this.userList.filter((x) => {
        if (this.departmentName == "All") {
          return (
            x.isAuthorized == false &&
            x.role != "admin" &&
            x.role != "department"
          );
        } else {
          return (
            x.isAuthorized == false &&
            x.role != "admin" &&
            x.role != "department" &&
            x.department == this.departmentName
          );
        }
      });
    },
    pendingUsers() {
      return this.userList.filter((x) => {
        if (this.departmentName == "All") {
          return (
            x.isAuthorized == "pending" &&
            x.role != "admin" &&
            x.role != "department"
          );
        } else {
          return (
            x.isAuthorized == "pending" &&
            x.role != "admin" &&
            x.role != "department" &&
            x.department == this.departmentName
          );
        }
      });
    },
    departmentList() {
      let arr = this.$store.getters.userList
        .filter((x) => {
          return x.role == "department";
        })
        .map((x) => {
          return x.departmentName;
        });
      arr.unshift("All");
      return arr;
    },
    dateList() {
      return this.$store.getters.dateList;
    },
    departmentLink() {
      return window.location.host + "/#/signup_department";
    },
  },
};
</script>

<style></style>
