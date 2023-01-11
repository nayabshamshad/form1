<template>
  <div
    class="top-bar user-top"
    v-if="
      isAuthenticated &&
      userData?.role != 'admin' &&
      userData?.role != 'department'
    "
  >
    <div class="menu-container flex justify-between">
      <div>
        <!-- <h1 class="lec-logo text-weight-bold">LEC</h1> -->
        <img class="lec-logo" src="../assets/lectin-mic.png" />
      </div>
      <div class="showMobile">
        <q-btn
          color="black"
          flat
          icon="menu"
          @click="showMenuUser = !showMenuUser"
        ></q-btn>
      </div>
      <mobile-nav @close="showMenuUser = !showMenuUser" v-show="showMenuUser" />
      <div class="top-center admin-nav hideMobile">
        <q-btn
          no-caps
          color="black"
          flat
          type="button"
          @click="$router.push('/')"
          class="btn"
          :class="$route.path === '/' ? 'add-border' : ''"
        >
          {{ $t("panouDeBord") }}
        </q-btn>
        <q-btn
          v-if="this.userData.status == true"
          no-caps
          type="button"
          color="black"
          flat
          @click="$router.push('/event-list')"
          class="btn"
          :class="$route.path === '/event-list' ? 'add-border' : ''"
        >
          {{ $t("Intalniri") }}
        </q-btn>
      </div>
      <div class="hideMobile">
        <q-btn
          no-caps
          color="black"
          flat
          to="/"
          type="button"
          @click="logOut"
          class="btn log-out"
          style="font-size: 12px; font-weight: 300"
          >{{ $t("Deconectare") }}
          <q-icon
            class="q-pl-md"
            style="font-size: 30px; color: rgba(150, 150, 150, 1)"
            name="exit_to_app"
          ></q-icon
        ></q-btn>
      </div>
    </div>
  </div>

  <div
    class="top-bar"
    v-else-if="
      isAuthenticated &&
      (userData?.role == 'admin' || userData?.role == 'department')
    "
  >
    <!-- Mobile Nav -->
    <mobile-nav @close="showMenu = false" v-show="showMenu" />
    <div class="hideMobile menu-container flex justify-between">
      <img class="lec-logo" src="../assets/lectin-mic.png" />
      <!-- <h1 class="lec-logo text-weight-bold">LEC</h1> -->

      <div class="flex hideMobile admin-nav top-center">
        <q-btn
          no-caps
          type="button"
          color="black"
          flat
          @click="$router.push('/?q=approved')"
          class="btn"
          :class="
            $route.fullPath === '/' || $route.fullPath === '/?q=approved'
              ? 'add-border'
              : ''
          "
        >
          {{ $t("aprobat") }}
        </q-btn>
        <q-btn
          no-caps
          type="button"
          color="black"
          flat
          @click="$router.push('/?q=pending')"
          class="btn"
          :class="$route.fullPath === '/?q=pending' ? 'add-border' : ''"
        >
          {{ $t("Înașteptare") }}
        </q-btn>
        <q-btn
          no-caps
          type="button"
          color="black"
          flat
          @click="$router.push('/?q=declined')"
          class="btn"
          :class="$route.fullPath === '/?q=declined' ? 'add-border' : ''"
        >
          {{ $t("Refuzat") }}
        </q-btn>
        <q-btn
          no-caps
          type="button"
          color="black"
          flat
          @click="$router.push('/?q=date')"
          class="btn"
          v-show="userData.role === 'department'"
          :class="$route.fullPath === '/?q=date' ? 'add-border' : ''"
        >
          {{ $t("data") }}
        </q-btn>
        <q-btn
          no-caps
          type="button"
          color="black"
          flat
          @click="$router.push('/?q=departments')"
          class="btn"
          v-show="userData.role === 'admin'"
          :class="$route.fullPath === '/?q=departments' ? 'add-border' : ''"
        >
          {{ $t("Conferințe") }}
        </q-btn>
      </div>
      <div class="hideMobile">
        <q-btn
          no-caps
          color="black"
          flat
          to="/"
          type="button"
          @click="logOut"
          class="btn log-out"
          style="font-size: 12px; font-weight: 300"
          >{{ $t("Deconectare") }}
          <q-icon
            class="q-pl-md"
            style="font-size: 30px; color: rgba(150, 150, 150, 1)"
            name="exit_to_app"
          ></q-icon
        ></q-btn>
        <q-btn
          no-caps
          color="grey"
          text-color="black"
          type="button"
          v-if="
            $route.path != '/event-list' &&
            userData?.status &&
            userData?.role != 'admin' &&
            userData?.isAuthorized == true
          "
          @click="$router.push('/event-list')"
          class="btn"
        >
          {{ $t("intâlnirile") }}
        </q-btn>
      </div>
    </div>

    <div class="showMobile flex justify-between">
      <div>
        <img class="lec-logo" src="../assets/lectin-mic.png" />
        <!-- <h1 class="lec-logo text-weight-bold">LEC</h1> -->
      </div>
      <div>
        <q-btn
          color="black"
          flat
          icon="menu"
          @click="showMenu = !showMenu"
        ></q-btn>
      </div>
    </div>
  </div>
  <router-view />
  <div
    class="flex align-center bottom-bar justify-center"
    v-if="isAuthenticated"
  >
    <div class="flex justify-between">
      <div @click="showTerms = true">T&C</div>
      <div
        @click="isopen = !isopen"
        style="padding: 1rem; position: relative"
        class="flex gap-2 language-btn"
      >
        <div style="margin-right: 0.5rem; margin-top: 0.5rem">
          <img v-if="localeLan == 'RO'" src="../assets/RO.svg" />
          <img v-else src="../assets/HU.svg" />
        </div>
        <div class="text-[1rem]">{{ localeLan }}</div>
        <div>
          <q-icon
            name="chevron_right"
            :class="isopen ? 'rotate-270' : 'rotate-90'"
            size="sm"
          />
        </div>
        <div
          v-if="isopen"
          style="top: -7.8rem; left: -1px; min-width: 6rem;background-color:#ffffff;"
          class="absolute "
        >
          <div style="border: 2px solid #c4c4c4; border-bottom: 0" class="">
            <div
              style="
                border-bottom: 2px solid #c4c4c4;
                padding: 1rem;
                justify-content: center;
                align-items: center;
              "
              class="flex gap-2 language-btn"
              v-for="(data, i) in localeOptions"
              :key="i"
              @click="changeLanguage(data)"
            >
              <div style="margin-right: 0.5rem; margin-top: 0.5rem">
                <img v-if="data.label == 'RO'" src="../assets/RO.svg" />
                <img v-else src="../assets/HU.svg" />
              </div>
              <div class="text-[1rem]">{{ data.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <div>&#x24B8; LEC</div>
    </div>
  </div>
  <q-dialog v-model="showTerms">
    <showTerms />
  </q-dialog>
</template>
<script>
import { defineComponent } from "vue";
import showTerms from "../components/termsAndConditions.vue";
import MobileNav from "../components/MobileNav.vue";

import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "MainLayout",
  components: { showTerms, MobileNav },
  data() {
    const { locale } = useI18n({ useScope: "global" });
    return {
      locale,
      isopen: false,
      localeLan: "EN",
      localeOptions: [
        { value: "en-US", label: "RO" },
        { value: "en-GB", label: "HU" },
      ],
      showTerms: false,
      showMenu: false,
      showMenuUser: false,
    };
  },
  methods: {
    changeLanguage(OBJ) {
      this.locale = OBJ.value;
      this.localeLan = obj.label;
    },
    logOut() {
      this.$store.dispatch("signOutUser");
    },
  },
  computed: {
    userData() {
      return this.$store.getters.userData;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
});
</script>
<style lang="scss" scoped>
.language-btn:hover{ 
  background-color:#C4C4C4 !important;
}
</style>
