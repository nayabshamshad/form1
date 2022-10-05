<template>
  <div
    class="top-bar"
    v-if="
      isAuthenticated &&
      userData?.role != 'admin' &&
      userData?.role != 'department'
    "
  >
    <div class="top-center">
      <q-btn
        no-caps
        color="black"
        flat
        type="button"
        @click="$router.push('/')"
        class="btn"
        :class="$route.path === '/' ? 'add-border' : ''"
      >
        Panou de bord
      </q-btn>
      <q-btn
        no-caps
        type="button"
        color="black"
        flat
        @click="$router.push('/event-list')"
        class="btn"
        :class="$route.path === '/event-list' ? 'add-border' : ''"
      >
        Întâlniri
      </q-btn>
    </div>
    <div class="q-ml-auto">
      <q-btn
        no-caps
        color="black"
        flat
        to="/"
        type="button"
        @click="logOut"
        class="btn log-out"
        style="font-size: 12px; font-weight: 300"
        >Deconectare
        <q-icon
          class="q-pl-md"
          style="font-size: 30px; color: rgba(150, 150, 150, 1)"
          name="exit_to_app"
        ></q-icon
      ></q-btn>
    </div>
  </div>

  <div
    class="top-bar"
    v-else-if="
      isAuthenticated &&
      (userData?.role == 'admin' || userData?.role == 'department')
    "
  >
    <div class="flex admin-nav top-center">
      <q-btn
        no-caps
        type="button"
        color="black"
        flat
        @click="$router.push('/?q=approved')"
        class="btn"
        :class="$route.fullPath === '/' || $route.fullPath === '/?q=approved' ? 'add-border' : ''"
      >
        Aprobat

      </q-btn>
      <q-btn
        no-caps
        type="button"
        color="black"
        flat
        @click="$router.push('/?q=pending')"
        class="btn"
        :class="$route.fullPath === '/?q=pending' ? 'add-border' : ''"
      > În așteptare
      </q-btn>
      <q-btn
        no-caps
        type="button"
        color="black"
        flat
        @click="$router.push('/?q=declined')"
        class="btn"
        :class="$route.fullPath === '/?q=declined' ? 'add-border' : ''"
      > Refuzat
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
      > Data
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

      > Conferinte
      </q-btn>>
    </div>
    <div class="q-ml-auto">
      <q-btn
        no-caps
        color="black"
        flat
        to="/"
        type="button"
        @click="logOut"
        class="btn log-out"
        style="font-size: 12px; font-weight: 300"
        >Deconectare
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
        Întâlnirile
      </q-btn>
    </div>
  </div>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {};
  },
  methods: {
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
