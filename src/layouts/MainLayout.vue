<template>
  <div class="top-bar" v-if="isAuthenticated">
    <h3 class="heading">{{ $route.name }}</h3>
    <div>
      <button to="/" type="button" @click="logOut" class="btn">Sign Out</button>
      <button type="button" @click="$router.push('/event-list')" class="btn">
        Reports
      </button>
    </div>
  </div>
  <div class="top-bar" v-else>
    <h3>{{$route.name}} </h3>
    <div>
      <button @click="$router.push('/sign-in')" type="button" class="btn">
        Sign In
      </button>
      <button type="button" @click="$router.push('/sign-up')" class="btn">
        Sign Up
      </button>
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
