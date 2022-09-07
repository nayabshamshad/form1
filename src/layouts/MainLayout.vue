<template>
  <div class="top-bar" v-if="isAuthenticated">
    <q-btn
      no-caps
      @click="$router.go(-1)"
      round
      style="transform: rotate(-90deg)"
      icon="navigation"
    />
    <h3 class="heading" style="">{{ $route.name }}</h3>
    <div>
      <q-btn
        no-caps
        color="grey"
        text-color="black"
        to="/"
        type="button"
        @click="logOut"
        class="btn"
        >Sign Out</q-btn
      >
      <q-btn
        no-caps
        color="grey"
        text-color="black"
        type="button"
        v-if="$route.path != '/' && (userData?.isUpdated == false || userData?.role == 'admin') && userData?.isAuthorized == true"
        @click="$router.push('/')"
        class="btn"
      >
        Dashboard
      </q-btn>
      <q-btn
        no-caps
        color="grey"
        text-color="black"
        type="button"
        v-if="$route.path != '/event-list' && userData?.status && userData?.role != 'admin' && userData?.isAuthorized == true"
        @click="$router.push('/event-list')"
        class="btn"
      >
        Events
      </q-btn>
    </div>
  </div>
  <div class="top-bar" v-else>
    <q-btn
      no-caps
      @click="$router.go(-1)"
      round
      style="transform: rotate(-90deg)"
      icon="navigation"
    />
    <h3>{{ $route.name }}</h3>
    <div>
      <q-btn
        v-if="$route.path != '/sign-in'"
        no-caps
        color="grey"
        text-color="black"
        @click="$router.push('/sign-in')"
        type="button"
        class="btn"
      >
        Sign In
      </q-btn>
      <q-btn
        v-if="$route.path != '/sign-up'"
        no-caps
        color="grey"
        text-color="black"
        type="button"
        @click="$router.push('/sign-up')"
        class="btn"
      >
        Sign Up
      </q-btn>
    </div>
  </div>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
import { auth } from "../store/firebase";

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
