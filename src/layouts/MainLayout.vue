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
        @click="$router.push('/event-list')"
        class="btn"
      >
        Reports
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
<!-- <router-link  to="/sign-in">reda</router-link> -->

<script>
import { defineComponent } from "vue";
import { auth } from "../store/firebase";

export default defineComponent({
  name: "MainLayout",

  components: {},
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  },
  methods: {
    logOut() {
      this.$store.dispatch("signOutUser");
    },
  },
});
</script>
