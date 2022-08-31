<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { auth } from "./store/firebase";
export default defineComponent({
  name: "App",
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("getUserData");
      } else {
        this.$router.push("/sign-in");
      }
    });
  },
});
</script>
