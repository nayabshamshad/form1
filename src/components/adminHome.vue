<template>
  <q-card class="my-card new-card info">
    <q-card-section>
      <div class="container">
        <div
          v-if="$store.getters.userData.role == 'admin'"
          style="width: 87.5%"
          class="
            q-mx-auto
            flex
            justify-space-between
            flex-nowrap
            for-media-mobile-flex-cols
            admin-topbar-container
          "
        >
          <div
            v-show="tabs !== 'departments'"
            class="for-media-mobile-width"
            style="width: 25%"
          >
            <div class="input-label-search">
              <q-input
                dense
                :label="$t('searchUsers')"
                v-model="nameSearch"
                outlined
              />
            </div>
          </div>
          <div
            v-show="tabs !== 'departments'"
            class="
              flex flex-nowrap
              justify-space-between
              for-media-mobile-flex-start
              for-media-mobile-flex-cols-reverse
              for-media-mobile-width
            "
            style="width: 100%"
          >
            <div
              v-show="showFilters"
              class="
                flex flex-nowrap
                justify-evenly
                for-media-mobile-width
                all-filter-container
                animate-popup
              "
              style="width: 100%; position: relative"
            >
              <div class="absolute new-checkbox" style="top: -100%; right: 0">
                <q-btn
                  v-show="tabs === 'approved'"
                  :loading="fetchingPdf"
                  label="Download PDF"
                  no-caps
                  flat
                  class="linkcolor"
                  @click="downloadPdfCards(tabs)"
                />
                <q-checkbox
                  label="Show TLT only"
                  v-model="tltFilter"
                  left-label
                />
              </div>
              <div class="select-label-conferintele">
                <q-select
                  v-if="$store.getters.userData.role == 'admin'"
                  :options="departmentList"
                  v-model="departmentName"
                  :label="$t('Conferințe')"
                  dense
                  outlined
                ></q-select>
              </div>

              <div class="input-label-category">
                <q-select
                  dense
                  outlined
                  v-model="allFilters.categoryFilter"
                  :label="$t('Category')"
                  :options="categoryOptions"
                />
              </div>

              <!-- </div> -->

              <!-- <div class="flex flex-btn "> -->

              <div class="select-label-status">
                <q-select
                  dense
                  outlined
                  v-model="allFilters.statusFilter"
                  :label="$t('status')"
                  :options="statusOptions"
                />
              </div>

              <div class="input-label-gard">
                <q-select
                  :label="$t('grad')"
                  dense
                  v-model="allFilters.gradeFilter"
                  outlined
                  :options="gradeOptions"
                />
              </div>
            </div>

            <!-- </div> -->

            <!-- last buttons  -->

            <div
              class="
                flex
                justify-end
                q-ml-auto
                flex-nowrap
                for-media-mobile-flex-row-reverse for-media-mobile-button-width
              "
              style="width: 17%"
            >
              <div class="q-mx-sm">
                <q-btn
                  v-show="showFilters"
                  round
                  @click="exportFile(tabs)"
                  color="green"
                  icon="download"
                ></q-btn>
              </div>

              <div class="flex flex-btn">
                <q-btn
                  v-show="tabs !== 'departments'"
                  style="transition: 250ms"
                  :class="showFilters ? 'bg-linkcolor' : 'linkcolor'"
                  @click="setShowFilters(!showFilters)"
                  no-caps
                  >{{ $t("Filtre") }}</q-btn
                >
              </div>
            </div>
          </div>
        </div>

        <q-tab-panels class="admin-home" v-model="tabs">
          <!-- Approved User Listing -->
          <q-tab-panel name="approved">
            <div class="table-container">
              <table class="user-list-table approved">
                <thead>
                  <tr>
                    <th>{{ $t("Nume/Prenume") }}</th>
                    <th>{{ $t("numbers") }}</th>
                    <th>{{ $t("emails") }}</th>
                  </tr>
                </thead>
                <tbody class="table-row">
                  <tr v-for="(user, i) in approvedUsers.arr" :key="i">
                    <td @click="viewUser(user)">{{ user.name }}</td>
                    <td class="hideMobile" @click="callUser(user.phoneNumber)">
                      {{ user.phoneNumber }}
                    </td>
                    <td class="showMobile" @click="callUser(user.phoneNumber)">
                      <q-icon name="phone"></q-icon>
                    </td>
                    <td
                      @click="mailUser(user.email)"
                      class="hideMobile hide-this"
                    >
                      {{ user.email }}
                    </td>
                    <td
                      @click="mailUser(user.email)"
                      class="showMobile last hide-this"
                    >
                      <q-icon name="email"></q-icon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="q-mt-md inline-pagination">
              <div class="hide-pagination" style="display: inline-flex">
                <span>{{ $t("intalniriPePagina") }}</span>
                <select class="paginationSelect" v-model="resultsPerPage">
                  <option :value="5">5</option>
                  <option :value="10">10</option>
                  <option :value="20">20</option>
                  <option :value="50">50</option>
                </select>
              </div>
              <div>
                <div class="pagination-buttons">
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    icon="chevron_left"
                    no-caps
                    @click="decreasePage"
                    :disabled="currentPage === 1"
                  ></q-btn>
                  <span> {{ currentPage }} </span>
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    @click="increasePage"
                    no-caps
                    icon="chevron_right"
                    :disabled="currentPage >= maxPage"
                  ></q-btn>
                </div>
              </div>
              <div>
                <p>
                  {{ approvedUsers.first }}-{{ approvedUsers.last }} din
                  {{ approvedUsers.total }}
                </p>
              </div>
            </div>
          </q-tab-panel>

          <template> </template>
          <!-- Pending User Listing -->
          <q-tab-panel name="pending">
            <div class="showMobile flex flex-btn">
              <!-- <q-btn
                round
                @click="exportFile(pendingUsers.arrTotal, 'Pending')"
                color="green"
                icon="download"
              ></q-btn> -->
              <h5 class="showMobile">{{ $t("Înașteptare") }}</h5>
              <!-- <div class="media-select">
                <q-select
                  dense
                  v-if="$store.getters.userData.role == 'admin'"
                  :options="departmentList"
                  v-model="departmentName"
                  class="bg-white"
                ></q-select>
              </div> -->
            </div>
            <div class="table-container">
              <table class="user-list-table pending">
                <thead>
                  <tr>
                    <th>{{ $t("Nume/Prenume") }}</th>
                    <th>{{ $t("numbers") }}</th>
                    <th>{{ $t("emails") }}</th>
                    <th>{{ $t("actiune") }}</th>
                  </tr>
                </thead>
                <tbody class="table-row">
                  <tr v-for="(user, i) in pendingUsers.arr" :key="i">
                    <td @click="viewUser(user)">{{ user.name }}</td>
                    <td class="hideMobile" @click="callUser(user.phoneNumber)">
                      {{ user.phoneNumber }}
                    </td>
                    <td
                      class="showMobile hide-this"
                      @click="callUser(user.phoneNumber)"
                    >
                      <q-icon name="phone"></q-icon>
                    </td>
                    <td
                      @click="mailUser(user.email)"
                      class="hideMobile last hide-this"
                    >
                      {{ user.email }}
                    </td>
                    <td
                      @click="mailUser(user.email)"
                      class="showMobile last hide-this"
                    >
                      <q-icon name="email"></q-icon>
                    </td>
                    <td class="icon">
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
            <div class="q-mt-md inline-pagination">
              <div class="hide-pagination" style="display: inline-flex">
                <span>{{ $t("intalniriPePagina") }}</span>
                <select class="paginationSelect" v-model="resultsPerPage">
                  <option :value="5">5</option>
                  <option :value="10">10</option>
                  <option :value="20">20</option>
                  <option :value="50">50</option>
                </select>
              </div>
              <div>
                <div class="pagination-buttons">
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    icon="chevron_left"
                    no-caps
                    @click="decreasePage"
                    :disabled="currentPage === 1"
                  ></q-btn>
                  <span> {{ currentPage }} </span>
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    @click="increasePage"
                    no-caps
                    icon="chevron_right"
                    :disabled="currentPage >= maxPagePending"
                  ></q-btn>
                </div>
              </div>
              <div>
                <p>
                  {{ pendingUsers.first }}-{{ pendingUsers.last }} din
                  {{ pendingUsers.total }}
                </p>
              </div>
            </div>
          </q-tab-panel>

          <!-- Declined Users -->
          <q-tab-panel name="declined">
            <div class="showMobile flex flex-btn">
              <!-- <q-btn
                round
                @click="exportFile(declinedUsers.arrTotal, 'Declined')"
                color="green"
                icon="download"
              ></q-btn> -->
              <h5 class="showMobile">{{ $t("Refuzat") }}</h5>
              <!-- <div class="media-select">
                <q-select
                  v-if="$store.getters.userData.role == 'admin'"
                  :options="departmentList"
                  v-model="departmentName"
                  dense
                ></q-select>
              </div> -->
            </div>
            <div class="table-container">
              <table class="user-list-table declined">
                <thead>
                  <tr>
                    <th>{{ $t("Nume/Prenume") }}</th>
                    <th>{{ $t("numbers") }}</th>
                    <th>{{ $t("emails") }}</th>
                  </tr>
                </thead>
                <tbody class="table-row">
                  <tr v-for="(user, i) in declinedUsers.arr" :key="i">
                    <td @click="viewUser(user)">{{ user.name }}</td>
                    <td class="hideMobile" @click="viewUser(user)">
                      {{ user.phoneNumber }}
                    </td>
                    <td class="showMobile" @click="callUser(user.phoneNumber)">
                      <q-icon name="phone"></q-icon>
                    </td>
                    <td
                      @click="mailUser(user.email)"
                      class="hideMobile last hide-this"
                    >
                      {{ user.email }}
                    </td>
                    <td
                      @click="mailUser(user.email)"
                      class="showMobile last hide-this"
                    >
                      <q-icon name="email" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="q-mt-md inline-pagination">
              <div class="hide-pagination" style="display: inline-flex">
                <span>{{ $t("intalniriPePagina") }}</span>
                <select class="paginationSelect" v-model="resultsPerPage">
                  <option :value="5">5</option>
                  <option :value="10">10</option>
                  <option :value="20">20</option>
                  <option :value="50">50</option>
                </select>
              </div>
              <div>
                <div class="pagination-buttons">
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    icon="chevron_left"
                    no-caps
                    @click="decreasePage"
                    :disabled="currentPage === 1"
                  ></q-btn>
                  <span> {{ currentPage }} </span>
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    @click="increasePage"
                    no-caps
                    icon="chevron_right"
                    :disabled="currentPage >= maxPageDeclined"
                  ></q-btn>
                </div>
              </div>
              <div>
                <p>
                  {{ declinedUsers.first }}-{{ declinedUsers.last }} din
                  {{ declinedUsers.total }}
                </p>
              </div>
            </div>
            <!-- <div class=" row items-center justify-between">
              <div class="q-table__control">
                Întâlniri pe pagină
                <q-select></q-select>
              </div>
              <div class="q-table__separator col"></div>
              <div class="q-table__control">
                <span class="q-table__bottom-item">1-20 din 84</span>
              </div>
            </div> -->
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
            <div class="department-types">
              <h4 class="linkcolor">{{ $t("listaConferinte") }}</h4>
              <div class="flex justify-flex-end">
                <div v-show="showdiv">showing</div>
                <span class="q-mr-xs">ADD LEADER</span>
                <q-btn round color="indigo" dense>
                  <q-icon name="add" size="2rem"> </q-icon>
                </q-btn>
              </div>
              <div class="q-pt-xl q-mt-lg">
                <div class="flex justify-space-between">
                  <div
                    v-for="user in departmentUsers.arr"
                    :key="user.uid"
                    @click="viewUser(user)"
                    class="column linkcolor"
                  >
                    <h5 class="department-names text-weight-bold">
                      {{ user.departmentName }}
                    </h5>
                    <span>{{ user.name }}</span>
                    <span>{{ user.phoneNumber }}</span>
                    <span>{{ user.email }}</span>
                  </div>

                  <!-- <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">Moldova</h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>

                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">Muntenia</h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>

                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">Oltenia</h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>

                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">
                      Transilvania Nord
                    </h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>

                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">
                      Transilvania Sud
                    </h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div> -->
                </div>

                <!-- <div class="flex q-pt-xl q-mt-xl justify-between">
                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">
                      Muntenia
                    </h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>

                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">
                      Oltenia
                    </h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>
                </div> -->

                <!-- <div class="flex q-pt-xl q-mt-xl justify-evenly">
                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">
                      Transilvania Nord
                    </h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>

                  <div class="column linkcolor">
                    <h5 class="department-names text-weight-bold">
                      Transilvania Sud
                    </h5>
                    <span>Leader Name</span>
                    <span>Phone Number</span>
                    <span>Email</span>
                  </div>
                </div> -->
              </div>
            </div>
            <!-- <div
              class="flex icon"
              style="
                justify-content: flex-end;
                max-width: 94%;
                gap: 5%;
                margin-bottom: 2rem;
              "
            >
              <h5 class="showMobile">{{ $t('Conferințe') }}</h5>

              <q-btn
                no-caps
                round
                color="green"
                size="small"
                @click="showDepartmentDialog = true"
                icon="add"
              />
            </div> -->
            <!-- <div class="table-container">
              <table class="user-list-table department">
                <thead>
                  <tr>
                    <th>{{ $t("Nume/Prenume") }}</th>
                    <th>{{ $t("numbers") }}</th>
                    <th>{{ $t("conferinta") }}</th>
                  </tr>
                </thead>
                <tbody class="table-row">
                  <tr v-for="(user, i) in departmentUsers.arr" :key="i">
                    <td @click="viewUser(user)">{{ user.name }}</td>
                    <td class="hideMobile" @click="viewUser(user)">
                      {{ user.phoneNumber }}
                    </td>
                    <td class="showMobile" @click="callUser(user.phoneNumber)">
                      <q-icon name="phone"></q-icon>
                    </td>
                    <td @click="viewUser(user)" class="last hide-this">
                      {{ user.departmentName }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="q-mt-md inline-pagination">
              <div style="display: inline-flex">
                <span>{{ $t("intalniriPePagina") }}</span>
                <select class="paginationSelect" v-model="resultsPerPage">
                  <option :value="5">5</option>
                  <option :value="10">10</option>
                  <option :value="20">20</option>
                  <option :value="50">50</option>
                </select>
              </div>
              <div>
                <div class="pagination-buttons">
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    icon="chevron_left"
                    no-caps
                    @click="decreasePage"
                    :disabled="currentPage === 1"
                  ></q-btn>
                  <span> {{ currentPage }} </span>
                  <q-btn
                    size="sm"
                    round
                    text-color="white"
                    @click="increasePage"
                    no-caps
                    icon="chevron_right"
                    :disabled="currentPage >= maxPageDepartments"
                  ></q-btn>
                </div>
              </div>
              <div>
                <p>
                  {{ departmentUsers.first }}-{{ departmentUsers.last }} din
                  {{ departmentUsers.total }}
                </p>
              </div>
            </div> -->
          </q-tab-panel>
        </q-tab-panels>
        <q-dialog v-model="showDepartmentDialog">
          <q-card class="q-px-md q-py-lg center-card">
            <q-card-section class="text-center">
              <h5 class="q-mb-lg">
                {{ $t("departmentLink") }}
              </h5>
              <p
                @click="copyLink"
                class="text-primary link-text cursor-pointer"
              >
                {{ departmentLink }}
              </p>
              <q-card-actions align="right">
                <q-btn @click="copyLink" no-caps color="secondary" flat
                  >Copy to Clipboard</q-btn
                >
              </q-card-actions>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn rounded flat color="grey" v-close-popup>{{
                $t("close")
              }}</q-btn>
            </q-card-actions>
          </q-card></q-dialog
        >
      </div>
    </q-card-section>
    <vue-html2pdf
      ref="html2Pdf"
      @progress="handleProgress($event)"
      @beforeDownload="beforeDownload"
      @hasDownloaded="hasDownloaded"
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :filename="tabs"
      :pdf-quality="1"
      :manual-pagination="true"
      pdf-orientation="landscape"
      ><template #pdf-content>
        <div
          v-for="selectedUser in cardUsers"
          :key="selectedUser.uid"
          style="width: 297mm; height: 210mm"
          class="flex justify-center align-center"
        >
          <div
            style="transform: scale(1.225)"
            class="company-club-card"
            :class="
              selectedUser.category === 'Licurici'
                ? 'pattern-licu'
                : selectedUser.category === 'Exploratori'
                ? 'pattern-ecplo'
                : 'pattern-compa'
            "
          >
            <div class="relative">
              <div class="absolute">
                <div class="relative">
                  <!-- <img src="../assets/card/vector-1.png" /> -->
                  <img src="../assets/card/Vector-up.png" />
                  <div class="absolute exploration-logo">
                    <img src="../assets/card/exploration-logo.png" />
                  </div>
                  <div class="absolute category-name-div">
                    <span
                      >Asociatia "{{ selectedUser.category }} pentru
                      viitor!"</span
                    >
                  </div>
                </div>
              </div>
              <div class="absolute legitimate-text-div fw-500 fs-1">
                <span>LEGITIMATIE</span>
              </div>
              <div class="absolute card-info-div">
                <div class="relative row">
                  <div>
                    <div
                      v-if="selectedUser.imgUrl && selectedUser.imgUrl !== ''"
                      class="upload-img"
                    >
                      <img :src="selectedUser.imgUrl" />
                    </div>
                    <div
                      v-else
                      class="cursor-pointer upload-img-icon bg-lightgray"
                    >
                      <img src="../assets/card/camera.png" />
                    </div>
                    <div class="id-number-div fw-500">
                      <span class="text-uppercase">{{ cardId }}</span>
                    </div>
                  </div>
                  <div class="cardholder-info column content-start">
                    <span>NUME/PRENUME</span>
                    <span>{{ selectedUser.name }}</span>
                    <span>FUNCTIE</span>
                    <span>INSTRUCTOR</span>
                    <span>JUDET</span>
                    <span>{{ selectedUser.region }}</span>
                    <span>LOCALITATE</span>
                    <span>{{ selectedUser.state }}</span>
                  </div>
                </div>
              </div>
              <div class="absolute card-bottom-vector">
                <div class="relative">
                  <img src="../assets/card/Vector-down.png" alt="" />
                  <div class="absolute tin-logo">
                    <img src="../assets/card/logo.png" alt="" />
                  </div>
                  <div class="absolute church-logo">
                    <img src="../assets/card/church-logo.png" alt="" />
                  </div>
                  <div class="absolute qr-code">
                    <qrcode-vue margin="4" :value="cardUrl"></qrcode-vue>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vue-html2pdf>
  </q-card>
</template>

<script>
import writeXlsxFile from "write-excel-file";
import VueHtml2pdf from "vue3-html2pdf";

export default {
  components: { VueHtml2pdf },
  mounted() {
    if (this.allFilters?.unset) {
      this.allFilters = {
        categoryFilter: this.filterList.categoryFilter,
        statusFilter: this.filterList.statusFilter,
        gradeFilter: this.filterList.gradeFilter,
      };
    }
    if (
      this.$store.getters?.departmentName &&
      this.$store.getters.userData.role == "admin"
    ) {
      this.departmentName = this.$store.getters.departmentName;
    }
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
    // this.getData();
    if (this.dateList) {
      this.dateModel = this.dateList;
    }
    if (this.$store.getters.userData?.role == "department") {
      this.departmentName = this.$store.getters.userData?.departmentName;
    }
    this.$store.dispatch("getUserList");
  },
  data() {
    return {
      tabs: "approved",
      cardUsers: [],
      tltFilter: false,
      fetchingPdf: false,
      gradeOptions: [
        { label: "All", value: "all" },
        { label: "Instructor", value: "Instructor" },
        { label: "Ghid", value: "Ghid" },
        { label: "Master Ghid", value: "masterGhid" },
      ],
      gradeFilter: [],
      statusOptions: [
        { label: "All", value: "All" },
        { label: "Activ", value: true },
        { label: "InActiv", value: false },
        { label: "Activ, fără grupă", value: "neither" },
      ],
      statusFilter: { label: "All", value: "All" },
      nameSearch: "",
      categoryFilter: "All",
      categoryOptions: ["All", "Licurici", "Exploratori", "Companioni"],
      dateModel: { from: "2020/07/08", to: "2020/07/17" },
      loading: false,
      dateSetting: false,

      departmentName: this.$t("All"),

      showDepartmentDialog: false,
      resultsPerPage: 20,
      currentPage: 1,
      allFilters: {
        unset: true,
      },
    };
  },
  watch: {
    allFilters: {
      handler: function () {
        this.$store.dispatch("setFilterList", {
          categoryFilter: this.allFilters.categoryFilter,
          statusFilter: this.allFilters.statusFilter,
          gradeFilter: this.allFilters.gradeFilter,
        });
      },
      deep: true,
    },
    departmentName: {
      handler: function () {
        this.currentPage = 1;
        this.$store.dispatch("setDepartment", this.departmentName);
      },
    },
    resultsPerPage: {
      handler: function () {
        this.currentPage = 1;
      },
    },
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
        // this.getData();
        this.currentPage = 1;
      },
    },
  },
  methods: {
    handleProgress(e) {
      // handle progress - for later use
      // dont delete
    },
    beforeDownload() {
      this.fetchingPdf = true;
    },
    hasDownloaded() {
      this.fetchingPdf = false;
      this.cardUsers = [];
    },
    setShowFilters(x) {
      this.$store.dispatch("setShowFilters", x);
    },
    increasePage() {
      if (this.currentPage < this.maxPage) {
        this.currentPage = this.currentPage + 1;
      }
    },
    decreasePage() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
      }
    },
    copyLink() {
      navigator.clipboard.writeText(this.departmentLink);
      this.$q.notify({
        message: this.$t("copyMessage"),
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
    exportFile(usersType) {
      let users;
      const fileName = usersType;
      if (usersType === "departments") {
        users = this.departmentUsers.arrTotal;
      } else {
        users = this[usersType + "Users"].arrTotal;
      }
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
          value: "Gen",
          fontWeight: "bold",
        },
        {
          value: "Mărime tricou",
          fontWeight: "bold",
        },
        {
          value: "Zonă",
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
        {
          value: "Conferinta",
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
          // {
          //   value: x.etnic,
          // },
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
          },
          {
            value: x.department,
          }
        );
        arr.push(userArr);
      });
      writeXlsxFile(arr, {
        fileName: fileName + ".xlsx",
      });
    },
    async downloadPdfCards(usersType) {
      if (this.fetchingPdf) {
        return;
      }
      let users;
      users = this[usersType + "Users"].arr;
      this.cardUsers = users;

      // this.cardUsers = this.$store.getters.userList
      //   .filter(
      //     (x, i) =>
      //       x.isAuthorized == true &&
      //       x.role != "admin" &&
      //       x.role != "department" &&
      //       x.status !== "deleted"
      //   )
      await this.$refs.html2Pdf.generatePdf();

      // this.cardUsers = [];
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
      this.$store.dispatch("setTabs", "user");
      this.$router.push(`/user-details/${user.uid}`);
    },
    async setDate() {
      if (this.dateSetting) {
        return;
      }
      if (!this.dateModel) {
        this.$q.notify({
          color: "red",
          message: this.$t("correctData"),
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
    filterList() {
      return this.$store.getters.filterList;
    },
    showFilters() {
      return this.$store.getters.showFilters;
    },
    departmentUsers() {
      const arr = this.$store.getters.userList.filter((x) => {
        return x.role == "department";
      });
      let firstItem = (this.currentPage - 1) * this.resultsPerPage;
      const arrToReturn = arr.filter((x, i) => {
        return i >= firstItem && i < firstItem + this.resultsPerPage;
      });
      return {
        arr: arrToReturn,
        first: firstItem + 1,
        arrTotal: arr,
        total: arr.length,
        last:
          this.currentPage == this.maxPageDepartments
            ? arr.length
            : this.currentPage > this.maxPageDepartments
            ? 1
            : firstItem + this.resultsPerPage,
      };
    },
    userList() {
      let arr = this.$store.getters.userList;
      arr = arr.filter((x) => x.status !== "deleted");
      if (this.nameSearch !== "") {
        arr = arr.filter((x, i) => {
          return (
            x.name &&
            x.name.toLowerCase().includes(this.nameSearch.toLowerCase())
          );
        });
      }
      if (this.allFilters?.gradeFilter?.value !== "all") {
        arr = arr.filter((item) => {
          return item[this.allFilters?.gradeFilter?.value] !== "";
        });
      }
      if (this.allFilters.categoryFilter !== "All") {
        arr = arr.filter((x) => {
          return x.category == this.allFilters.categoryFilter;
        });
      }
      if (this.statusFilter.value !== "All") {
        arr = arr.filter((x) => {
          return x.status == this.allFilters?.statusFilter?.value;
        });
      }
      if (this.tltFilter) {
        arr = arr.filter((item) => {
          return (
            item.teamList &&
            item.teamList.length > 0 &&
            item.teamList.filter((y) => y?.type).length > 0
          );
        });
      }
      return arr;
    },
    approvedUsers() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == this.$t("All")) {
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
      let firstItem = (this.currentPage - 1) * this.resultsPerPage;
      const arrToReturn = arr.filter((x, i) => {
        return i >= firstItem && i < firstItem + this.resultsPerPage;
      });
      return {
        arr: arrToReturn,
        first: firstItem + 1,
        arrTotal: arr,
        total: arr.length,
        last:
          this.currentPage == this.maxPage
            ? arr.length
            : this.currentPage > this.maxPage
            ? 1
            : firstItem + this.resultsPerPage,
      };
    },
    declinedUsers() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == this.$t("All")) {
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
      let firstItem = (this.currentPage - 1) * this.resultsPerPage;
      const arrToReturn = arr.filter((x, i) => {
        return i >= firstItem && i < firstItem + this.resultsPerPage;
      });
      return {
        arr: arrToReturn,
        first: firstItem + 1,
        arrTotal: arr,
        total: arr.length,
        last:
          this.currentPage == this.maxPageDeclined
            ? arr.length
            : this.currentPage > this.maxPageDeclined
            ? 1
            : firstItem + this.resultsPerPage,
      };
    },
    pendingUsers() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == this.$t("All")) {
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
      let firstItem = (this.currentPage - 1) * this.resultsPerPage;
      const arrToReturn = arr.filter((x, i) => {
        return i >= firstItem && i < firstItem + this.resultsPerPage;
      });
      return {
        arr: arrToReturn,
        first: firstItem + 1,
        arrTotal: arr,
        total: arr.length,
        last:
          this.currentPage == this.maxPagePending
            ? arr.length
            : this.currentPage > this.maxPagePending
            ? 1
            : firstItem + this.resultsPerPage,
      };
    },
    departmentList() {
      let arr = this.$store.getters.userList
        .filter((x) => {
          return x.role == "department";
        })
        .map((x) => {
          return x.departmentName;
        });
      arr.unshift(this.$t("All"));

      return arr;
    },
    dateList() {
      return this.$store.getters.dateList;
    },
    departmentLink() {
      return window.location.host + "/#/signup_department";
    },
    maxPage() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == this.$t("All")) {
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
      return Math.ceil(arr.length / this.resultsPerPage);
    },
    maxPagePending() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == this.$t("All")) {
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
      return Math.ceil(arr.length / this.resultsPerPage);
    },
    maxPageDeclined() {
      const arr = this.userList.filter((x) => {
        if (this.departmentName == "") {
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
      return Math.ceil(arr.length / this.resultsPerPage);
    },
    maxPageDepartments() {
      const arr = this.$store.getters.userList.filter((x) => {
        return x.role == "department";
      });
      return Math.ceil(arr.length / this.resultsPerPage);
    },
  },
};
</script>
<style lang="scss" scoped>
.new-checkbox {
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1120px) {
    top: -50% !important;
  }
  @media (max-width: 750px) {
    top: -80% !important;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
.all-filter-container {
  @media (max-width: 750px) {
    margin-top: 1rem !important;
  }
}
img {
  width: 100%;
}
.fs-1 {
  font-size: 1.4rem;
}
.flex {
  display: flex;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fw-500 {
  font-weight: 500;
}
.bg-lightgray {
  background-color: #d9d9d9;
}
.company-club-cards-container {
  justify-content: center;
  align-items: center;
}
.company-club-card {
  background-color: #ffffff;
  width: 890px;
  height: 580px;
}
.pattern-licu {
  background-image: url(../assets/card/bg-licu.png);
}
.pattern-ecplo {
  background-image: url(../assets/card/bg-ecplo.png);
}
.pattern-compa {
  background-image: url(../assets/card/bg-compa.png);
}
.exploration-logo {
  width: 7.2rem;
  top: 2.3rem;
  left: 4rem;
}
.category-name-div {
  top: 1.9rem;
  right: 10.2rem;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.4rem;
  letter-spacing: 1.2px;
}
.legitimate-text-div {
  top: 4.97rem;
  right: 11.8rem;
  letter-spacing: 0.97rem;
}
.card-info-div {
  top: 11.5rem;
  left: 3.15rem;
}
.upload-img-icon {
  width: 12.9rem;
  padding: 6.27rem 4rem;
}
.upload-img {
  width: 12.9rem;
  height: 15rem;
  overflow-y: hidden;

  /* padding-top: 2rem; */
}
.cardholder-info {
  flex-direction: column;
  margin-left: 2rem;
  align-items: flex-start;
  line-height: 1.8rem;
}
.cardholder-info span:nth-child(odd) {
  font-size: 20px;
  font-family: "Futura";
  // background: RED;
  font-weight: 300;
}
.cardholder-info span:nth-child(even) {
  margin-bottom: 0.3rem;
  font-weight: 600;
  font-size: 2rem;
}
.id-number-div {
  text-align: center;
  padding-top: 0.8rem;
  font-size: 1.15rem;
}
.card-bottom-vector {
  bottom: -35rem;
}
.tin-logo {
  width: 12.8rem;
  bottom: 1.3rem;
  left: 3rem;
}
.church-logo {
  width: 2.5rem;
  bottom: 1.45rem;
  left: 16.7rem;
}
.qr-code {
  width: 5.7rem;
  top: 0.8rem;
  right: 2.4rem;
}
</style>
